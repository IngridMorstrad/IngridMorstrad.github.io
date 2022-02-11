---
layout: post
date: "2022-02-10"
title:  "Tech interviews: beating the game"
comments: true
tags: thoughts
---

_Disclaimer/Foreword: The aim of writing this series of posts is to allow our modern interview processes to be viewed through the lens of history (chronicling the process) and science (identifying problems and inferring improvements from process changes). This is part two in the series, which will focus on how to maximize your chances given the current state of the system. The rest of this post assumes you've read [part 1](https://www.ashwinmenon.com/posts/thoughts/2022-01-21-tech-interviews-an-origin-story/), and are interested in interviewing for tech/big tech companies._

## Prologue
In 2020, I gave a few (< 5) interviews, and failed every single one. In 2021, I gave quite a few more (~10), and got an offer from almost every company. This is my catalogue of what helped me improve my performance, with the hope that it may help you as well. Please let me know if it did!

## Training for the *sport* of interviewing
The extreme gamification of tech interviews<sup>[^1]</sup> means that nowadays, interviewing is basically a *sport*. So, to have good results when interviewing, one needs to prepare like a sport. This means identifying the few things that maximize your success given the time you have, and repeatedly drilling yourself with those things till you are in good shape to play "the final". I'll list some of these things, and provide the amount of time I think you need to spend on each. The list of items is sorted from least important (at the top) to most important (at the bottom). If you have a limited number of days remaining, skip the items at the top. It is critical to get to the items at the bottom, so, if you find yourself short on time, start moving down the list quicker.

## The training plan

### A positive disposition and mental strength
Probably the easiest thing to do to maximize your chances, while also possibly the most dismissed area is simply, to be positive. During the interview, having a positive disposition can cause interviewers to bias the interview in your favor (see [part 1](https://www.ashwinmenon.com/posts/thoughts/2022-01-21-tech-interviews-an-origin-story/#:~:text=Bias%20is%20the,not%20be%20affected). A solution that may have been dismissed with "Candidate could not find the most optimal solution" may be instead written up as "Candidate solved the question in time, and given more time I expect they would find the most optimal solution.". Gayle McDowell also refers to this in her book, using something along the lines of, "make yourself a person the interviewer would want to go grab a beer with". 

On occasion, you may run into an interviewer with a bad disposition. It is crucial that you maintain a positive attitude and keep your focus on solving the question. In 2020, I was really, *really* put off by a few interviewers who were completely uninterested in the interview (unfortunately not an uncommon situation). In 2021, I worked on it by actively trying to stay interested in the problem even when an interviewer was off-putting. While practising, I also scheduled interviews with friends who played the role of an antagonistic interviewer (maybe unintentionally 😉). Even if you decide you do not want to be a part of the company, you're better off giving it your best shot and rejecting them later (as things may change - you may like the team/get a great offer/not get any other offers).

Another aspect to being mentally strong is to avoid "spinning" in your head. In 2020, at times I'd find myself *stuck* and not able to think of a solution, with my mind going over the information I'd already gained, somewhat on auto-pilot. At that point, I knew mentally the interview was done. I'd keep spinning for however long the interview was going to last, and my mind was going to spend more effort whining about the interview process than trying to gain insights that would lead me to the solution. In 2021, I tried to account for this while practising questions. Each time I'd start to spin, I tried to push myself to find some new information that could help. It worked more often than not.

Keeping a positive attitude can also help you stay mentally strong (disciplined). While preparing, it's easy to feel like practising puzzles on Leetcode is degrading or beneath you, but given the possible returns (i.e. the reason you started doing this) it's good to have a positive approach to the whole thing. While I practised, I "fooled" myself into thinking that solving Leetcode puzzles was the most fun thing I could do in the moment, by repeatedly telling myself how much fun this was. This made grinding the problems every single day much, much easier.

![Leetcode problems done](/assets/images/leetcode_2021.png)
_I also made some graphs like this to gamify preparation itself_

In short, keep the above points in mind (heh) while practising. Consciously make the effort to practice improving on all of these fronts. Like in tennis, you're the only one out there on the court. You have to be coach & candidate all in one. 

### Resumes
_Time to spend: ~3 hours_
Resumes don't matter too much. I see a lot of people spending days making their resumes look good, but there's no value in spending more than a few hours on this, tops. Try and be quantitative (use numbers to show how you delivered value) when elaborating on projects. Before submitting resumes to recruiters, get a couple of friends to give you feedback on your resume. Finally, before on-site rounds, go over what projects you put in your resume (in case interviewers want to dive a bit deeper), and refer to those projects in the behavioral round (see below).

### Landing interviews
The best way to get interviews is to have recruiters reach out to you. You can encourage this by setting your LinkedIn profile to "actively looking" and messaging recruiters and managers (especially ones that say they are hiring). The second-best way is to get people to refer you, which is why having a network *really* helps (and may also partly explain the weird demographics of the tech world). Everything else (like applying on companies' websites) is near pointless. I've had auto-rejections from company websites and then had a recruiter reach out to me later, don't waste your time.

### Mock interviews
_When to schedule: throughout the process, at intervals_
Mock interviews are super important and under-utilized. The right way to use mock interviews is to schedule as many of them as you can, and schedule them frequently soon after you start preparation. In 2020, I waited till I thought I was "ready" before scheduling mock interviews. But, by then, the feedback I got was too late. Mock interviews let you know how well-prepared you are, and what areas you need to work on (always ask the interviewer for feedback!). Feedback is _very_ important - change your preparation plan based on the feedback. For example, if the mock interview contained a question from a Leetcode list you'd done (see the Leetcode & company-specific preparation sections below for more info), and you did not get it, drill the entire list again!

To schedule mock interviews, you can use websites that conduct mock interviews ([Pramp](www.pramp.com) is free, and [www.interviewing.io](https://iio.sh/r/S8J6) lets you do one for free). Even better, if you have friends in tech, ask if they can conduct mocks for you. Having some "harsh" mock interviews serves as good preparation, as some real-life interviewers may be quite strict when evaluating. Mock interviews with friends are great because they can give you honest, detailed feedback. Lastly, given the nature of the game<sup>[^2]</sup>, you can use real interviews with companies as mock interviews for other companies.

### The dreaded design round
_Time to spend: ~3 months_
Design is a tough nut to crack. You aren't going to significantly improve your design knowledge in a month or two. However, any time spent reading the basically-a-distributed-engineering-manual "Designing Data-Intensive applications" by Martin Kleppmann, [Web Scalability for startup engineers](https://smile.amazon.com/Scalability-Startup-Engineers-Artur-Ejsmont/dp/0071843655) and watching [Hussein Nasser's](https://www.youtube.com/c/HusseinNasser-software-engineering) excellent YouTube channel is time well spent. These should help you with your software engineering career in general, while also possibly aiding with interviews.

Design interviews are hard to prepare for as they vary widely between companies. Some company-specific preparation (see section below) may help you plan for the design round in a more effective manner. A few companies will ask you to design popular websites. For these kinds of interviews, you can use [CodeKarle's YouTube channel](https://www.youtube.com/c/codeKarle), which goes into great detail on many systems, and [this playlist](https://www.youtube.com/watch?v=gQfaWHOrITI&list=PLK8IOvtbwVsuYW8KovGg9o6dlhspym8O_). Grokking the Coding interview (on educative.io) is also recommended, but be alert reading it, as it contains a lot of errors, and handwavy explanations (that may not fly in real-world interviews). The main goal of most design rounds is to gauge breadth, so try and cover the entire system at a high level before diving into any particular component.

Unfortunately, the design round can go poorly no matter how much you prepare for it. It could end up being a case of "have you and your interviewer read the same resource?" or in some cases "does the interviewer have enough experience/knowledge to know what approaches could work?". Luckily, given that design is usually a focus for more senior roles, you might do better to focus on another area that is also important for senior roles:

### The behavioral round
_Time to spend: ~1-2 weeks_
I used to think of behavioral interviews as the easiest rounds. Ones you could simply bluff your way through (not lie, really, but let's say you want to be a bit selective with the truth). While I still believe that, I don't think behavioral interviews are necessarily easy. One thing I learned in 2021 (thanks to some help), was that all questions in the behavioral round have another question hiding behind them, and that is the question you need to answer. This may not be entirely obvious. For example, when asked about a conflict at work, the point is not about the conflict at all, but rather to construct a PR-fluff piece - the kind you might hear from celebrities that are unbelievably diplomatic. It doesn't matter how poorly the other party in the conflict acted, the question seeks to unearth whether you will be pleasant and amicable under _every_ situation. It isn't lost on me that this is a little Miss India-esque, but (like with many other objectionable parts of the interview process) it is what it is.

So, how do you get better at behavioral interviews? You could ask friends in non-technical roles for help, especially ones that have conducted or given many such interviews. Or you could practice with your recruiter (a lot of recruiters are open to this, as your performance ties into _their_ performance). For some questions, I prepared a couple of possible answers (using examples at work), and had recruiters help me with which ones to use. Once you have the answers you are going to use for each question, drill them by repeating them to a friend<sup>[^3]</sup>, or even a mirror, until you can say them confidently while having a positive disposition. Interviewers (on account of being human beings), will have unconscious biases, and you want those to fall your way. Confident, well-articulated and positive responses are likelier to get a positive outcome, assuming other factors are similar (I can't find too much fault with this, as software engineering *is* a social profession - in most cases, you need to work well with others to do your best work)<sup>[^4]</sup>.

Behavioral interviews are also a great way to illustrate the kind of scope you had in your role (for example, if your conflict was with a director versus an SDE 2 😉), meaning you improve your interview performance significantly without requiring the time investment other skills (design, coding) do. Probably because more senior roles are less technical, the behavioral interview becomes more important the higher you go, so investing time here should pay off in the long run.

### Leetcode
_Time to spend: >= 2 months_
If you want to clear interviews across the industry, it's no secret that you will have to buck up and go heads down into Leetcode. A good pace to set is to solve around 2 medium-hard difficulty problems per day until you hit ~100-200 medium-hard problems solved (aiming for 200 is safer). The aim here is primarily to familiarize yourself with the set of problems that get asked, and secondarily to get better at solving new, unseen problems. Get Leetcode premium ~1 month before the interview and solve all the questions in the "by company" list for the company you are interviewing for, sorting by frequency (most of these questions should have been done if you've hit 200 problems). Once you've solved all the questions, solve them again. The standard you want to hit is being able to solve a problem in 10 minutes flat from seeing the question to coding up the solution, and having it run with no errors on the first try. A good tool to aid with this is spaced repetition. Repeatedly solve the problems a few days apart - especially the ones you found hard, and at a more granular level, note down common errors that prevented the code from compiling (for example, using Anki - a flashcard system) and drill yourself on those. For example, I'd always forget the order of parameters for "String.join" in Java or whether an array's length was a field or a method (things an IDE usually helps me with). Using Anki sorted this out so well that even if I got to use an IDE in an interview, I didn't need to spend any time on it.

![Leetcode problems done per day](/assets/images/leetcode_2021_ppd.png)  
_Solve around 2 medium-hard problems per day_

You'll also want some practice with tackling new problems. This will help you practice *thinking* of solutions from scratch, which should help when you come across an unfamiliar question in an interview. Just knowing that you are capable of tackling *any* problem is a big confidence boost that can improve your interview performance. I'd probably go with a 80-20 split between doing problems for familiarization versus for improving thinking. As your interview dates get closer, spend less time on trying to come up with solutions to problems yourself. When doing problems to build familiarization, give yourself 20 minutes at most (the usual length of an interview), and soon start cutting it down to 5. When doing problems to practice thinking, take as much time as you need (especially if the interview is some time away).

If you find that the problems are too hard, try solving some easy problems to build up momentum (spend 20-40 minutes on each problem). If easy problems are still too hard, start reading the solution, and stop reading as soon as you think you gained enough information to make some progress.

However, if you don't have time to do a lot of problems, move on to the next section. 

### Company-specific preparation
_Time to spend: ~2 days (per company)_
Not frequently listed, but company-specific preparation is probably what gives you the biggest bang for your buck. The best way to go about this, is to go to the Leetcode forums, Glassdoor or Blind, and check for questions others have posted, that they may have been asked. Once you find relevant posts, try and solve the problems in code. Do *not* just read the problems and solutions<sup>[^5]</sup>. Once you identify questions that are likely to be asked, repeatedly solve the questions (as stated in the previous section). For some companies, you can find their entire interview list online! The reason this works is that companies attempt to calibrate their interview questions across candidates. This usually means that questions that are asked have to be from a limited pool of questions<sup>[^6]</sup>. If you have completed the previous steps, you should have completed the problems on Leetcode under "by company", sorted by frequency, for the companies you are interviewing with, meaning this section should take only a couple of days.

### In short
For an SDE 1 level, you can skip the design section, spend ~2 days on the behavioral section and spend all your remaining time on the Leetcode section.
For an SDE 2 level, you should spend 1-2 weeks on the design section, half a week on the behavioral section and 2-3 weeks on the Leetcode section.
For an SDE 3 level, you should spend ~2 months on the design section, 1-2 weeks on the behavioral section and 2-4 weeks on the Leetcode section.

Lastly, you should plan on doing **nothing** the day before the interview. What you've prepared is probably enough, and as a professor once told me, if you haven't gotten to it by the last day, you're probably not going to be able to really get it on the last day either. Wind down and relax instead. You got this!

[^1]: See [part 1](https://www.ashwinmenon.com/posts/thoughts/2022-01-21-tech-interviews-an-origin-story/) for details about gamification
[^2]: if you don't do it, someone else will, and they will get the job
[^3]: having the major points for the narrative (rather than by-hearting the entire anecdote) should be enough as long as you are able to go from start to end without a hitch
[^4]: whether you're faking the social nicety or not. In any case, if you're faking it all the time, is it any different from it being real?
[^5]: unless you have already drilled through these problems repeatedly
[^6]: though this limited pool may change over time
