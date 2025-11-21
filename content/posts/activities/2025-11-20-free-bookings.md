---
layout: post
title:  "I want my Chicken Shawarma: How I cut booking costs by 10x"
date:   2025-11-20
comments: true
tags: activities
---

I like playing sports. I created an app to notify me when courts are available.  

## General design
I had built this a few months ago and was able to get it running from my laptop. I don't have my notes from back then.

### Adding notifications
What I wanted now was to get it running on a remote server and also to give it the capability to provide notifications. For notifications, I settled on pushbullet though WhatsApp would have been ideal. Seems like more products may be needed in this space to make notifications easier to get. How hard is the WhatsApp API to integrate with? I don't know, but maybe good to look at for a future project. Twilio is a big player in this space.

### Automation design
The first few hours I spent using Selenium to open up the browser and testing it locally to make sure everything worked with notifications.  
Tested locally without headless, and then ran on the remote server in headless mode (without actually opening up a browser).  
In hindsight, testing locally with headless may have been useful to uncover a couple of issues earlier.  

Deploying to a remote server unearthed a host (haha...) of problems. Initially, there were issues due to Ubuntu using a 'snap' package. I learned that this is a stub that may point to the actual executable, but this causes problems with chromiumdriver. Then, I ran into OOMs. Chromium is a memory hog. Luckily, Chromium & chromiumdriver have a plethora of options that the LLMs advised me to tune to try and fit it onto a cheap server (one of my requirements/good-to-haves). I spent a good hour or two on this, fixing some options that the LLMs had hallucinated and trying to work with the LLMs to understand why they had put in flags for visual options when we were running in headless mode (they conceded and reversed many of those flags). However, no amount of flag tuning would get the browser started up. I finally had to switch to a maching with 1GB of RAM to get it to work. At this point, Cloudflare started kicking in and blocking my requests. The LLM was useless at getting past this (suggesting I open up a full browser, which it also said couldn't be done on remote servers with no displays attached), but luckily **experience** was key here. In the past I'd noticed passing in a user agent would sometimes get past these blockers (shout-out to my first stint at Amazon for teaching me about user agents and more). I asked the LLM to help me with that and we were off to the races!

I still couldn't get past the fact that this would cost me around 10$ a month. Way too expensive. It would mean I give up one chicken shawarma a month. I needed to get around this somehow. After all, as they say "frugality is the mother of invention", right?

### Human in the loop (or why good engineers still have value)
At this point, I wondered why the hell I needed a browser in the first place. I remember having half-heartedly gone down this path the first time I built this (a few months ago) but now, thinking of my chicken shawarma, I wondered whether I'd abandoned the idea too soon. In simple terms, the idea was "if I can just make requests to an API and get the response, why the hell do I need the browser as a middleman?"

I opened up Chrome's dev console & looked for Fetch/XHR requests being made. I found one, and put it into the LLM. The LLM said this was great, but there were some auth tokens needed. Now that was weird, because I hadn't logged in. So, I went through the network requests some more and landed on one that seemed promising. Working with the response for this request and the LLM, the solution finally looked like this: Set session headers, get the RequestData (access card) and Bearer token (ID badge) and then make the requests to the second API. This worked! And it used a lot less memory, so I could try deploying it to a cheaper (free!) cloud. I also added a few features like looking at multiple locations, multiple types of events and reducing notification noise by tracking notifications sent (in a file to reduce $$). Adding the code to clean-up the notification file was also a no-brainer thanks to the LLM.

## LLM use
Needless to say, in this day and age, heavy LLM use was involved in making this.  
I initially set out coding this with the chatbot versions. ChatGPT Plus was useless after a point, so much so that when I was deploying to a remote server, the free version of Claude and Gemini 3 thinking were all I used.

LLMs make this SUPER easy to iterate on. Along with notifications, I added quite a few features that would be triggered by passing a bunch of option flags (Why option flags? Because I wanted the flexibility to pick & choose. The default remains what I think would be the likeliest option I'd choose.). This would have been a pain to do manually because of the number of forks created, but with the LLM, I can ask it to update the README as well to help document what's going on.

In short, I did in hours what would have taken me days. However, if I didn't have some ideas or knowledge (from experience) on certain topics, then I'd likely be banging my head on a suboptimal solution for days. Hopefully, that (as expanded on in the previous paragraphs) helps address some of the confusing "AI saves time!" v/s "AI does not save any time!" discourse you hear.

### Testing
How do you really test with LLMs? Unit tests tend to be useless because LLMs tend to write tests in a way that they pass - sometimes without calling into your code at all. I added a `test` flag that I could pass in to reproduce a specific workflow that I knew would trigger a notification. Besides that, I did manual testing as flows were added. There is room for improvement here with regression tests. 

## Opportunities
Thanks to LLMs, coding is simpler, but there are still a lot of manual, painful steps. Like setting up an account (with Pushbullet, etc.) and the lack of good systems for things like notifications.

## Other
Notes for myself: court types, slot types, rate limiting were all added.
