---
comments: true
date: "2024-11-11"
title: How I use AI (part deux)
tags: technical 
---

Adding to my list of what I've used AI (read as "LLMs") for. For my previous post, click [here](https://www.ashwinmenon.com/posts/technical/2024-09-10-how-i-use-ai/).

# Travel-related
ChatGPT was quite helpful answering questions about the areas I was visiting in Europe. For example, I was confused by all the buildings and names, and sought help in the form of the question: "What was the Domus Flavia part of?". ChatGPT answered that it was Domitian's palace, which among other things included a basilica. That confused me even more, as evident in my follow-up: "Is that the same basilica as the basilica of Constantine?". The answer was no.

## As a tour guide
While touring the many museums in Europe I relied on AI as a tour guide when I didn't have one available. The prompt I used: "What should I see in the <XYZ>. Write the answer as a script for a walking tour", which I later modified to "Explain the significance of the painting <XYZ> by <ABC>". However, often I'd get responses that seem to be hallucinations, which brings me to:

## Fixing hallucinations
You can ask AI to give you answers to questions that you know to. For example, when using the AI as a tour guide, I asked it to describe the significance of the painting, but also asked it to list the main figures in the painting. Often, it wouldn't get the second part right and it was then obvious that the LLM was hallucinating. Some of the prompts I used:
"That's not right. Can you list the paintings the room contains?"

I could also simply ask it to let me know that it didn't know as shown by the following prompt:
"I'll list paintings. If you know about their significance, state it (why it's important in art history, etc.) along with one word stating level of significance (immense, high, medium, low, none).
If you don't know, simply say "unaware" and nothing else."
I added to this, "Also state which parts of the painting to look at more deeply" to understand if it was hallucinating.

It got a little wordy, so I asked it to zip it with:
"Now onwards, start with the significance, and only provide details if the significance is high or above. Also give one line giving how it goes chronologically in art over time (for example how early renaissance focused on 3-d and space)"

It started hallucinating again, so I went with: "Who are the main figures in the painting?", and after its lengthy response, I added: "Are you sure?" to which it answered in the negative. Now, like a therapist trying to let the patient know there was nothing wrong with them, I came up with, "Before answering, ask yourself "are you sure?" If the answer is no, then simply say that. I prefer that if you are a good llm". For what it's worth, it's not because I'm intro anthropomorphization, it's because I read that sometimes responses are better if you phrase the prompt in a positive light.

## Identifying what ticket to buy
Asking ChatGPT which of the myriad ticket options to buy (for the metro for my 3-day stay) simplified what would have taken many minutes at the ticket terminals trying to pick an optimal ticket.

# Learning the language
It was also great at teaching me a language. I lost the exact prompt I used as I unfortunately set it up as a temporary chat, but with prompting I could get it to be an interactive teacher and start simple.

# Summarizing YouTube videos
I have a few YouTube videos saved to playlists that I haven't seen for months. These tend to be on the longer side (over an hour long in some cases). I got the transcript for one of the videos using [note GPT](https://notegpt.io) and then pasted the transcript into an LLM for summarization. Now, I could either skip the entire video - saving an hour of my time - or at least be able to focus more easily on the video since I had an idea of what it would be covering.

I also asked it to summarize my writing/brain dump to make a case for why what I'd done was valuable. 

# Other

## Phone assistant
I switched my voice assistant on my Android phone to Google Gemini, instead of the old Google Assistant. Now I'm able to ask it queries about any questions I may have had, as well as schedule appointments and reply to emails. It seems to finally be fulfilling the promise it aimed to deliver with its first launch.

## Doing simple math
I use it to do simple math, but using text as input. For example, I might say, "What's the annual rate of return if the price went up 1.3x from Apr 2021 to Nov 2023?"

## Quick searches for facts
I was touring with an agent, and wasn't confident in some of their responses. I sent in the same queries to ChatGPT and with its first response, I realized they did know what they were talking about! ChatGPT (and LLMs) have completely replaced search engines for me, for the usecase of "looking up facts". I also used it to understand if tobacco contained nicotine.

## Coding!
Created my yearly list of goals for 2024 on my website using LLM-twiddling! You can see it [here](https://www.ashwinmenon.com/yearly.html). It might need a little bit more work.  
I also used it to remove jquery from this blog, so hopefully it's quicker!

# Web search feature
With ChatGPT's new web search feature, I asked it to summarize the polls for me. It did a great job, saving me time from having to open multiple pages. However, I had saved the polling pages I usually look at in a bookmarked folder, and I could easily open all pages in the folder up in a new window, peruse them, and close them in under a minute, so I'm not entirely sure which one is better.

I also got it to find me a site for a certain purpose with the condition that I shouldn't be asked to create an account.

# Things it got wrong
I asked it a trivia question I'd gotten wrong:
> Give me a list of the top 10 Beatles songs sorted by how many times they repeat the title of the song in its lyrics.

It got the answer approximately right (for the top spot it said "Hey Jude" once, then "Let it Be") but the counts were all wrong.

It got Paul McCartney & John Lennon's ranges completely wrong too (needed an "Are you sure?" whack to get it back on track). Maybe it just has a bad taste in music.


