---
comments: true
date: "2024-09-10"
title: How I use AI
tags: technical 
---

Brief list of what I've used AI (read as "LLMs") for.

# What I've used AI for

## Laziness
I _could_ have googled things in this section and figured my way around it with a little effort.

### Writing code to use features that I know exist, but am not proficient at:
- I asked it to mock static methods using Mockito. This was a feature introduced in the newer versions of Mockito, so I am not as familiar with mocking statics off the top of my head. The syntax is also somewhat weird, so asking the LLM to do it works well.
- I asked it to cherry pick a file from another commit.
- I asked it to show me a way to see files in a git stash.
- I asked it for a command to copy the last git message. Answer: `git log -1 --pretty=%B | pbcopy`
- Asked it to split a commit into 2 commits. See below.
- Asked it how to stash only unstaged changes. Answer: `git stash --keep-index`

### Working with cumbersome CLI commands
I asked it to write a `find` command and pass in the arguments to `sed` as the arguments to pass to `find` are never obvious to me. Specifically, whether the path should come before the `--name` option or not. I also find (heh) that sending output from `find` to `sed` is really hard to get right. Do I get it to work with `xargs` or pipe the arguments to `sed` or use the exec option within `find`? Well, with the LLM I just had to ask what I wanted it to do and the command it gave me worked perfectly (specifying platform of course, because `sed` behaves differently with in-place replace in files on the Mac v/s Linux).

### Restructuring code using plain English
Instead of manually editing the code I asked the LLM to rewrite the code for me. Now I have 3 ways to refactor code - IntelliJ IDEA's refactor options, Vim macros, and LLMs!

### Hard to write code
- Thread-safety: I asked the LLM to make a piece of code thread-safe. I was familiar with some ideas about how to do this from a past interview experience where they asked me about reentrant locks. The initial solution was incorrect, but after asking it to correct itself - since I knew the initial solution was incorrect - it got to a reasonable answer. This is an important point: **If I didn't know the solution beforehand, I wouldn't have known there was a bug!** The code didn't work because I needed to use it in an interface (interfaces in Java don't allow private static variables, which the LLM used), but once I let the LLM know, it provided a solution that worked by moving the variable to a different class. Neat!
- Time-based cache: Well, not hard in the sense difficult, rather "cumbersome". It spit out a couple of options using Guava (I was familiar with this) and Caffeine (I did not know of this option). I didn't use the code, so can't judge correctness.

## Curiosity
Teaching me stuff!

### Learning something new
- I asked the LLM whether priority could be set on a thread. I didn't know if this was possible and it gave me code on how I could do so.
- I asked the LLM to explain the Net.poll method to me. I can't rate the response as my network knowledge is weak, and I'm not sure how much of the response I understood. 
- I asked the LLM to tell me the CLI command to run a gradle task.

## Productivity
Unlocking areas I wouldn't have been able to get to without a lot of effort.

### Parsing blobs of data
It is "easy"/possible to parse data in a known data format (like CSV, etc.). But, LLMs work pretty well for parsing data without any format!
- Used this to parse build log output to identify the slowest dependencies in the build. Just copy-paste the text blob into the LLM. The large context windows definitely help!
- Used this to parse my 'time tracking logs'. Earlier, I'd manually have to edit and paste each piece of data in to the right cell in Excel. With the LLM, I could just ask it to format a text blob into a suitable format so I could copy-paste it directly into Excel (rather than piece-by-piece).

### Finding bugs
Find the bug in the following Python code:
```
>>> X-train, y_train, X_test, y_test = train_test_split(X, y, test_size = 0.25, random_state = 88)
  File "<stdin>", line 1
    X-train, y_train, X_test, y_test = train_test_split(X, y, test_size = 0.25, random_state = 88)
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
SyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?
```

I spent a few minutes double-checking everything, then gave up and asked the LLM. The LLM spotted it immediately (it should be X_train, not X-train).

### Converting code across languages
I was working on "The Analytics Edge" which uses R. I wanted to work through it in Python. LLM to the rescue!

## Failures
I've also had some unsatisfactory results.  
As an example, I asked it to explain why Java may be omitting the complete stack trace on occasion. I already had some ideas like the OmitStackTraceInFastThrow option, but the response given by the LLM was not helpful at all. I could have re-worded the prompt and tried again (as it focused too much on the exception), but for whatever reason, I didn't (maybe I was tired, or maybe I thought a web search would do better).

## Some tips
Most of the time, you can leave typos in your prompt, and the LLM will still understand you. This can speed things up.  
You can ask the LLM to go step-by-step (print the results of each step, reason step-by-step, etc.) to reduce the chance of errors.  


## Appendix: Useful answers from the LLM
### Splitting a git commit into 2

`git reset HEAD^` to unstage the changes, then git add the changes you want in the first commit.  
Run `git commit -m "First part of the split commit"` to create the first commit.  
For the remaining changes, use git add to stage them, then `git commit -m "Second part of the split commit"` to create the second commit.

### Cherry-picking a file from another commit

```
git checkout destination_branch
git checkout source_commit -- path/to/ABC
```

### Checking which files are in a git stash

```
git stash show stash@{<index>}

# More details:
git stash show -p stash@{<index>}

# Name only:
git stash show -m stash@{<index>}
git stash show --name-only stash@{<index>}
```

### Deleting files matching a certain regex in all Java files
Prompt:
> On linux, find all java files and delete all lines matching "XYZ"

Unsatisfactory response

> Do it in 1 line

```
find . -type f -name "*.java" -exec sed -i '/XYZ/d' {} \;
```

Perfect!
