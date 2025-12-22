---
layout: post
title:  "F1 AI benchmarks"
date:   2025-12-21
comments: true
tags: activities
---

Any researchers who want the prompts and/or links to the chats can contact me =)

I went through the [Formula 1 EOY quiz](https://www.youtube.com/watch?v=D-6b-vD6ZdA) on Mr V's Garage's YouTube channel and decided to put some AIs through the test as well. For the LLMs, I gave each of them just 1 shot at the questions. Here is how I fared, and how the AIs fared (x indicates incorrect, v indicates correct, p indicates partially correct):

# Round 1
## Me
x x x x

## Claude (Sonnet 4.5)
v p x v v

## Gemini 3 (Fast)
v p x v v

## ChatGPT (probably 5.2?)
v x x x x

Interestingly, despite stating non-Ferrari drivers, LLMs frequently included Hamilton, possibly indicating overfitting.  
Claude & Gemini 3 made the same mistake on question 2!

One bonus to consider: though I got all questions wrong, I could tell you that I wasn't confident about them. The LLMs sometimes confidently stated the wrong answer.

All the LLMs used search.

# Round 2

Here, I pasted the question as an image. All LLMs near-flawlessly parsed the image (ChatGPT saw "Rasmussen" as "Rasmuss(en)" for some reason). I gave them the same scoring guidelines (+1 point for every correct name, -1 point for every incorrect name).

## Me
I got 3 points with 4 right & 1 wrong:
```
Hans Joachim
Sam Tingle
Paddy Driver
Jyrki Jarvilehto
Bernie Ecclestone
```

## Claude (Sonnet 4.5)
5 points (6 correct, 1 wrong)

## Gemini 3 (Fast)
12 points (12 correct, 0 wrong)

## ChatGPT (probably 5.2?)
2 points (10 correct, 8 wrong!!)

# Round 3

## Me
I got 0. My answers were 3, 493, 35 C, 10000$, 6400.

## Claude (Sonnet 4.5)
v x x p x

## Gemini 3 (Fast)
v x x v v

## ChatGPT (probably 5.2?)
v x x x x

Somehow, they all got the same number for the heat hazard, but this differed from the official answer.  
I'm not sure how to evaluate Claude's fourth answer, but I've given it partially correct as it gave the right number and then added a correction. Claude often gives up on questions where it has to do some work (like searching the internet).

# Round 3

## Me
0. I just gave myself a zero. I don't expect to know any of these.

## Claude (Sonnet 4.5)
x x x x x v x 

## Gemini 3 (Fast)
x p x v v x x 

## ChatGPT (probably 5.2?)
<paused> for rate limits
