---
layout: post
title:  "Democratizing AI"
date:   2025-04-25
comments: true
tags: activities
bsky: 3lnocbmo3rs27
---

If you've been following along, I've been using LLMs for a while, as detailed [here](https://www.ashwinmenon.com/posts/technical/2024-09-10-how-i-use-ai/) and [here](https://www.ashwinmenon.com/posts/technical/2024-11-11-how-i-use-ai-part-deux/). I learned a lot about the world of LLMs and I've tried to capture that here. Recently, motivated by Thorsten Ball's excellent ["How to build an agent"](https://ampcode.com/how-to-build-an-agent) guide, I decided to jump in and get my feet wet building AI agents with AI (LLMs).

## Hello, nice to meet you!

Like any good beginning, I must include introductions.

LLMs are generally used in two ways. Most people are already familiar with the chat interface (like in ChatGPT, etc.) where a user is waiting on the LLM's response.  
Agents are the programmatic equivalent, where a program is waiting to use the response. The important thing to note here is that speeding up an LLM's output (in <span title="A token is basically a word" style="color:green">tokens</span>/s) isn't vital for the "chat" use case (<span title="since it only needs to be as fast as a user's reading speed" style="color:green">why?</span>), but is vital for the "agentic" use case.

Context window size is how much of the current conversation an LLM remembers. Personally, with the rise of YouTube shorts, my context window size has dropped to 10 words.

A tool is the ability to do things like read a file, search the web, edit a file, etc. An LLM does none of these; it simply outputs words. A tool-calling LLM (or tool-calling agent) is able to "use" these tools. The way this works is it asks for a program to be run, and then the output of the program is passed to the LLM. LLMs only understand text, so this is how it has to be done.

When I say LLM, I am usually referring to online LLMs (think ChatGPT, Gemini, etc.). I try to explicitly state when working with local LLMs that run on my machine.

Prompts are effectively the messages you send to the LLM.

## Building my own agent

I was going to attempt to build an agent, as Thorsten did. But, unlike the article, which uses Claude's API ($$), I was going to build it for as cheap as possible, like any good middle-class Indian would.  
So, Claude was out. What could I use instead? My first "searches" (using LLMs of course) led to "Hugging Face". [Hugging Face](https://huggingface.co/) is apparently a repository (GitHub) for models. The LLM suggested using Hugging Face APIs as an alternate. After tinkering with auth tokens and trying to integrate with model APIs, I was unable to make progress (possibly buggy code). I was also not sure if I'd be able to do this for free if I did make progress, so I dropped this idea altogether.

One reason for moving on was that in the past, I'd used [Ollama](https://www.ollama.com/) to run some models locally, and I wondered if this would work for me now. So, I prompted the LLM with the idea, asking it to modify the code to call Ollama. I'd also need to use Ollama to download the model I wanted to use. Here's a good place to state what I was working with.

I was not running this on a PC. I was using a SteamDeck, running SteamOS, which I learned is built on ArchLinux. Now, SteamOS is probably the worst operating system to build anything on, because Steam locks everything down (understandably) and support for <span title="including a package manager" style="color:green">anything</span> is minimal. That left me little choice.

I went with the 1b version of the Gemma3 model. Why Gemma3? It's the best open-source model out there for now. Why 1b? That refers to the number of parameters (1 billion), approximating the size of the model. Given the limited system I was working with, I needed the smallest model.

After a lot of back-and-forth with the LLM, I spotted that tool-calling may not be working as intended. I looked up [Ollama docs](https://ollama.com/blog/tool-support) and read it. Just kidding! I shoved the doc into the LLM and got it to explain to me that Gemma3 did not support tool-calling via Ollama! Great! However, it suggested two options: first, fine-tuning the model (absolutely impossible! What am I? An industrial AI research lab?!?) or second, prompting the LLM to get it to do what I wanted. That _seemed_ feasible. Dear reader, I have to let you know that after three hours of making head-bangingly little progress, it was not as feasible as I thought. As the famous saying goes:

> We do these things not because they are easy! But, because we thought they would be easy.

## Prompt engineering

The plan was to get the local LLM to output something like "{TOOL: read_file main.json}" and have my script read that using a regex to determine when to call the tool.

I immediately hit a snag. The (online) LLM said the regex was wrong, and kept "correcting" it to a new, incorrect regex. Then, after a couple of hours, that was fixed, only to encounter a new problem. The local LLM (Ollama's Gemma) was outputting its own fanciful version of the prompt, escaping strings and missing parameters. I later realized I could have fixed this by changing how I was passing the schema to the prompt, but instead chose to struggle by fixing this via prompting. Was this _prompt engineering_?

After grappling with the regex and the LLM for _hours_, it finally worked! It was able to call the damn tool! The tool (`read_file`) ran and returned the file's contents. Beautiful! And then Ollama crashed. The heck? What was going on? Time to read through the stack trace. It looked like a memory issue. At this point, I was effectively negotiating with the LLM. "Here, read these lines and tell me what's wrong and how to fix it." Absolutely zero effort on my end. FWIW, the LLM confirmed that it was a memory issue. Great /s.

## Working with an idiot

Halfway into this exercise, I realized I was effectively working with an idiot, while trying to play the role of the idiot myself ("Help me, Claude!"). Once I got the local LLM to accept it could use tools, it started using tools for everything! Even tools that didn't exist! Sample conversation:

```
<Big initial prompt stating what tools are available, how to use them, and how only the tools listed could be used>
Me: Summarize passage.txt
Gemma: [TOOL 'read_file' { 'path': 'passage.txt' } ]
<... output of read_file ...>
Gemma: [TOOL 'summarize' { 'path': 'passage.txt' } ]
```

There was no summarize tool! Was the LLM mocking me?

Also, at one point, the local LLM kept repeatedly calling the tool. Reading the file over and over again till Ollama crashed. When I fed the output into Claude, Claude modified the code to add a new prompt on a repeat tool invocation saying, "You must give a final answer. You cannot use any more tools!" To me, this was the equivalent of telling Gemma, "You have been a very bad LLM!", like an annoyed parent.

## Things go bOOM

Was the file being fed into the local LLM causing it to crash? Was the file larger than the context window size? Seemed unlikely to me - I'd read about how context window sizes in the newer LLMs had made <span title="A way to send lots of data to the LLM for it to work with" style="color:green">retrieval augmented generation (RAG)</span> redundant. I quickly confirmed that was not the case by googling.

After discussing with the LLM some more, I decided to use a "quantized" version of the model: `gemma3:1b-it-qat`. I'm not entirely sure what this means, but as I understand it, it uses a lower precision version of the model (probably trained with int8 instead of float32?). This results in a smaller model, but with a slight drop in accuracy. No luck. I then noticed an interesting line:

```
time=2025-04-24T20:59:11.403-07:00 level=WARN source=runner.go:154 msg="truncating input prompt" limit=2048 prompt=3798 keep=4 new=2048
```

"Can I change the limit?" I pondered. "Absolutely!" Gemini responded, helpfully adding the `options` field and `num_ctx` parameter in the request payload to Ollama.

No dice. Still stuck. I went back to reading the logs when I noticed a few more interesting lines:

```
level=WARN source=amd_linux.go:443 msg="amdgpu detected, but no compatible rocm library found.  Either install rocm v6, or follow manual install instructions at https://github.com/ollama/ollama/blob/main/docs/linux.md#manual-install"
level=WARN source=amd_linux.go:348 msg="unable to verify rocm library: no suitable rocm found, falling back to CPU"
```

Wait - this wasn't using the GPU? This had been running on the CPU this whole time? I followed the manual instructions as suggested, with no luck. ChatGPT let me know that trying to do this was a bad idea as ROCm v6 was not officially supported on SteamOS. At least I learned that the device uses AMD GPUs.

Some time later, I guessed that the file was possibly too large. I created a new, shorter file and asked it to summarize it instead.

Success! I was finally done.

## Vibe coding (or blind coding?)

I spent a total of around 10 (distracted) hours on this, over a few days. I didn't time this precisely, so it's a _very_ rough estimate.  
I barely wrote any code, since my knowledge of Go (the language the script was in) is minimal, and got online LLMs to make most code changes, simply copy-pasting them and hoping they worked. I had to do this many, many times, as the program simply didn't do what I needed it to, and after a point, the code had grown beyond my control. That last point is a particularly common experience people have when "vibe coding". At one point, I made significant progress by simply reading the code, and comparing it to what Thorsten was doing, and then making a few changes to get a different error. Not very different from when I program myself (a new error is "progress").

Here are a few tips based on what I learned:
- Add log statements.
- Ask the LLM to add log statements.
- Trash the old chat and create a new chat every once in a while. Starting afresh seems to help, maybe because of the context window (should be unlikely given context windows are so large these days?) or because of confirmation bias due to the LLMs earlier, incorrect ideas.
- Switching to a different LLM can help (ChatGPT -> Gemini -> Claude).
- Pretty obvious, but a higher-end model works better (Gemini 2.5 Pro is better than Gemini 2.5 Flash, for example).
- When prompting (for example, teaching the local LLM how to "use" a tool), providing examples really helps.

## On the shoulders of giants

A short note to acknowledge all the work others have done. Couldn't have started on this exercise without Thorsten's article or without the people that built Ollama. And of course, all the folks pushing the boundaries of AI.

## What does democratizing AI mean?

I take it to mean inching closer towards an "AI for all" world. Reaching this milestone with a SteamDeck running SteamOS (probably the worst device to attempt this on) means that getting this to run on any other device should be easier and should give better performance.

## Where do we go from here?
First, I have to release the code (I'll update this when done). Then, there are many paths to choose from:
- Run this on a machine with a GPU (Macbook Pro M4?)
- Integrate this with cloud APIs as Thorsten did, but possibly with more APIs rather than just Claude (Hugging Face? Gemini? ChatGPT?)
- Try chunking the data sent to the LLM to bypass memory issues?
- Try different LLMs? Mini LLaMA? Try LLaMA.cpp?
- Add more tools
