---
comments: true
date: "2023-04-17"
title: The sorry state of software UI/UX
tags: technical 
---

# The sorry state of software: UI/UX

## Can you tell the time?
![Weird Android clock face](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/android%20alarm.png?raw=true)

Nope, you aren't looking at a programmer's [attempt at being funny](https://techcrunch.com/gallery/worst-volume-controls/). This was the **official** clock app on Android.

This was actually an attempt at improving the earlier iteration, which for some godforsaken reason stuffed the hours from 13 to 24 into the clock face displaying 1-12:

![Weird Android dual clock face](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/ClockApp.jpeg?raw=true)

Inexplicably, 00 is included in the inner clock face, meaning the inner clock face actually goes from 00 to 13. I'm perplexed how this was released to customers. And really, why even update a "clock" app? Surely, it can't be improved anymore... or can it?

## Why is software UX so bad?
Most software engineers are completely alien to the idea of user experience (UX). Heck, I myself did not know how it differed from UI until I had a UX designer as a colleague, who patiently walked me through what UX is, how it matters and how UI ties in to it.

In the last decade, with organizations growing and mixing in more product managers in an attempt to scale, software engineers are either not expected to or not allowed to take ownership of the product. This is in part driven by the commoditization of software as engineers end up being given smaller and smaller roles so that trying to do the right thing takes exceptional effort to even attempt to convince the decision makers. As an organization grow larger, there is a growing disconnect between the product being built and the people doing the building. In addition, career paths are so strictly defined and narrow that this further kills motivation and the desire to learn or innnovate. 

Businesses are built to return a profit. Quite often, there is a lot of short-term thinking here, and a great desire for profit in the short-term. If good UX comes in the way of this, or cannot be proven to help, it falls by the wayside. Software also suffers from "feature-itis". The addition of "new" features above and beyond everything else, in (a usually futile) search for new business models, means the UI is further stuffed with unnecessary features in the hope the customer clicks on it. Unfortunately, we're all driven by [dopamine](https://www.ashwinmenon.com/posts/thoughts/2016-08-22-love-drugs-and-rock-n-roll/)), so it is plausible that engagement and other metrics increase, until years later the customer finally comes to their senses, breaks free of the dopamine addiction and deletes your app altogether.

Lastly, large corporations are likely monopolies, and without good regulations, a monopoly won't listen to customers nor build good products anymore. There are [many](https://www.reddit.com/r/GooglePixel/comments/qk2xzd/am_i_the_only_one_a_little_annoyed_clicking_the/) examples of customer complaints, but unfortunately they fall on [deaf ears](https://issuetracker.google.com/issues/194080895?pli=1) 

## What does good UI/UX look like?
Good UX is whatever makes it easier for the customer to do the right thing. The right thing here means whatever the customer opened the app/software to do, and not what the software/app may want to trick the consumer into doing. Good UI is whatever enables this UX. In addition, good UI makes it HARD for the user to do the wrong thing. The book "Design of Everyday Things" has a few non-software examples.

### Good UI/UX example: The old Square Cash app
![Old Square Cash UI](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/squareCashOld.png?raw=true)  
Here's a screenshot of an older version of the Square Cash app. See how it launches you right to the payment screen, and clearly presents two options (Request & Pay), which are likely all you need.
  
This is a seemingly simple product, but look at how one of their competitors went about it:  
![Venmo UI](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/venmoUI.png?raw=true)

Admittedly, this may have helped them win and keep market share thanks to network effects, but it's worth calling out that a product that is used more is not always a better product (as alluded to in the previous section).

Unfortunately, it looks like Square Cash (now just "Cash", which is in my opinion of the worst name changes ever) is beginning to lose its wonderful UI/UX to "feature-itis" (as described above):  
![New Square Cash UI](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/newSquareCash.jpeg?raw=true)  
_Note the increasing "tabs" at the bottom below Request/Pay_

The idea behind this forcing what should be different apps (for buying stocks and getting a debit card in this case) into an existing one is to attempt to drive growth. People are unlikely to download an app that they don't need, but if you force it onto one they may already be using, you may get more users! (Note to reader: Please do not emulate)

### Good UI/UX example: The official Android Clock app
![Timer tab in the Android clock app](https://github.com/IngridMorstrad/IngridMorstrad.github.io/blob/mainline/static/assets/images/timer.jpeg?raw=true)  
In a dramatic twist, it looks like the loser of this post is also its winner! In the latest version of the Android Clock app, the weird clock face has been removed, and replaced with a more sensible UI. This UI is also used for the "Timer" tab in the Clock app, which has some brilliant features baked in.  

The Timer tab comes with some preset timers, and while you may not be doing those exact things, the fact that they are set to different time periods (2 mins, 15 mins, etc.) means they are likely useful for some tasks you were using timers for anyway. For example, I use the "Brush teeth" 2 minute timer to take a 2 minute rest between sets during my workouts. Allowing the customer to have named timers set locally means I can use this to set up a 30 minute timer that I can use for guitar practice.

As a bonus, now, the Clock app can also notify you if you have an alarm about to go off in the next 15 minutes. For those of us that set multiple alarms, or wake up before the alarm goes off, this can save us the embarrassment of having our alarm go off in a meeting.
