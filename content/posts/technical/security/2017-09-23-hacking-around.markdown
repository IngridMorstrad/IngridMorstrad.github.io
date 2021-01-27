---
layout: post
title:  "H*cking around"
date:   2017-09-23 22:29:00
comments: true
thumb: http://ashwinmenon.com/assets/images/login.png
tags: security 
---

## Intro
People think hacking requires a great deal of skill (on the part of the attacker) and/or a great deal of skill (on the part of the defender). This is quite clearly false. There are many simple ways to exploit a system. In this post, I detail some of the times I got access to accounts I shouldn't have been able to get access to. While these are not the specific ways that a system's bugs are taken advantage of, in general the principles hold true.

## Attack 1: Too much trust
The first "attack" that I describe is probably the one that took the least effort from me. One of my friends logged in to his Facebook account from my computer, and I guess he must have checked the box that says "trust this device" (or something similar). He was just visiting me on vacation, but after he left, when I went to Facebook, it turned out I still had access to his account. Insane. I kept checking back a few weeks/months later and I still always had access. Finally, after many months, I clicked logout (ideally, Facebook should have logged me out or asked me for some form of ID - either a password or a security token or SOMETHING before this point) and reported this to him. Not as scary when it's a friend who has access, but what if it was a public net cafe, or a device you lost, etc. ?

To mitigate this: check your recent sign-ins. Periodically logout of all sessions regardless. Facebook should identify active sessions from suspicious locations and warn you about it. If you do get those mails from Facebook (or other site), DO NOT ignore them!

## Attack 2: Outdated info
In a recent attack on another friend's Facebook account, I clicked on "Forgot Password". This allowed me to send a code to his email account, which I chose to do. Now, I had to get access to his email account (Hotmail). So, I went to hotmail and repeated the process. I clicked on "Forgot Password" and Hotmail was very nice to tell me that an email with that user ID did not exist...! What? Did not exist? Well, let me try registering one with that user ID then. Less than 10 minutes later, I had a hotmail account with that person's email ID. I asked Facebook to mail me the code, which they did (not knowing I was now the owner of the email account) and I was allowed to then reset the Facebook password. Instead of following through on that, I let my friend know, and gave him access to his Hotmail account (letting him know how this attack was done as well).

To mitigate this: Check what other accounts have access to your email/Facebook account. Delete ones that are old (mobile numbers too!).

## Attack 3: Poor ID mechanism
Another account was compromised by Facebook's awful ID mechanism. After clicking "Forgot Password", I had to answer 5 questions about this person's friends to get access. The questions were somewhat specific (which of these friends went to high school with you) and they didn't reveal too many details about your friends (just a photo, if I remember right). Seems solid, right? The issue was that there was no limit on the number of retries. After around 10 attempts, I fluked through all 5 questions and gained access. Facebook has now removed this and replaced it with the "Trusted Friends" feature, which is much safer (IMO).

To mitigate this: This specific case is a tough one to mitigate, but looks like Facebook doesn't allow this type of ID mechanism anymore. However, many sites still let you use a "Secret Question/Answer" option. The key is to LIE to the answer (or just enter a random string that makes no sense, but you remember with a password manager like LastPass). Everyone knows where you were born & where you went to high school, and even if they don't, the answer is just a web search away.

## Attack 4: Crappy user/pass combinations
One day when I was bored, I tried logging into Reddit with random user/pass combinations. A Reddit account isn't worth much, but I was surprised to get hold of an account in my first five tries. I'm not sure exactly what the fault was - either the user/pass was the same, or the password was something common like "password" - but it shocked me that five manual attempts got me an account. I changed the password and have lost access to the account myself (forgot the user/pass). Most attackers would run a script that tries many, many different username/password combinations, obtained from a better source (a database leak).

To mitigate this: Pretty simple really, use a long password. No, it doesn't need to necessarily have complicated characters like #, $, ! that most sites love to enforce. As long as it is long, it works [Relevant XKCD](https://xkcd.com/936/).

## Attack 5: Trust no-one
The last attack I'll describe is probably the most boring, but has the best mitigation. I installed a keylogger on my computer and when a couple of friends logged in from my computer, I had their passwords. This was extremely low-effort and boring and after confirming that the keylogger worked, I never bothered to log-in. However, a similar software could be installed on public computers (net cafes, etc.) and your account could be compromised, so I'll mention it here.

To mitigate this: USE 2FA (two-factor authentication)! I've blogged in another post about how this can help - even if someone knows your password, they won't be able to sign-in unless they have access to your second factor. Enable 2FA on all major accounts (emails, facebooks, etc.). Also, when installed on my laptop, the keylogger introduce a somewhat noticeable lag (although I guess this could be mitigated by using a faster processor/better computer).

## Conclusion
For someone who wants to, getting hold of your account is easier than you think, especially if you haven't taken care to safeguard your account (2FA, etc.). The incidents I've described above don't even use some of the (slightly) more complicated techniques - using leaked databases, using phishing sites, etc. In short, stop being so insecure!
