---
layout: post
title:  "Probability and tennis"
date:   2015-05-31 18:09:00
categories: activities
---

#How I got the idea
The other day, while surfing Reddit, I came across a few comments that said having a 55% chance of winning a point would give you a 99% chance of winning the game. I'd heard this before, but this time I thought, "Hey! I can simulate that and see if it makes sense.". Seemed a bit unrealistic to me, that 50% would mean dead-even whereas 55% would mean a blowout.

#What I did
So, I went ahead and opened up python and wrote a little program to simulate a tennis match. I varied the probability of winning a point so that it went from 0.00 to 1.00, in steps of 0.01 and simulated 10000 matches for each probability. Matches were best of 5, with no tiebreaks - you had to be two games clear (read up on tennis rules if the terminology isn't clear). CHANGE TO NOTE TODO

#What the results mean
Here are the results:
<img src="{{ site.url }}/assets/tennis.png">


#Link to codebook

