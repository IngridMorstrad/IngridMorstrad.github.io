---
tags: activities
comments: true
date: "2018-01-29T01:34:00Z"
thumb: http://ashwinmenon.com/assets/images/code.jpg
title: A guide to code reviews
---

This here is a collection of things I've learned about reviewing code in the few years that I've worked as a software developer. As these are my thoughts, you should take them with at least a pinch of salt instead of at face value, as with most subjective things in life.

When I first started, I reviewed code very differently from how I review code now. Despite this being a very important skill, it is not taught in high school or even college. Like with most other engineering skills, you're tossed into the deep end and left to learn how to swim by yourself.

1. Code linters  
In my first job out of college, we were given a checklist of items to look for in a code review. If the submitter ran afoul of any of these, this was an "easy win" for the reviewer: the reviewer would simply report these issues to the submitter! Then, the submitter would fix them and since the code was better now, the review should be done, right? Well, no, a perfunctory review like that shouldn't suffice. Many of the items on the checklist could have easily been discovered without any manual effort by a static code analyser (code linter). Using code linters can lessen the load on the reviewer and force them to instead look for serious issues that may exist in the code submitted. Investing time in finding and setting up a code linter for your team can provide benefits in the long-term (because reviewers cannot rely on scoring "easy wins" in addition to ironing out style & static code issues).

2. The big picture  
At the start of my career, while reviewing code, it was far easier for me to do a line-by-line scan of the program. This meant while reading a line, I would only identify errors on the given line without considering how it really fit into the program. A line-by-line scan may uncover some issues, but the main purpose of the code review should be to ensure that the code is logically consistent and solving the right problem.

   * Understand the problem and the solution
As a reviewer, it's important to first understand the problem being solved, and how the submitter is solving it. Thinking about how you would solve it is a good way to test your understanding of the problem. At the end of the day, you should be able to explain the code submitted to anyone else. 

   * Entry points
To aid with the big picture, recognizing the entry points of the program also help. When you start programming, everything has a nice "main" method. Sometimes, the review is for a bug in a function. These cases let you easily spot the entry point (the function/main method itself). But, it may be worth tracking back (up the stack) and ensuring you understand the process end-to-end. This can also help prevent situations where solving one bug just uncovers another.

   * Tough-to-understand code
Sometimes you may be reviewing code that you don't understand well. Maybe you are unfamiliar with this section of your team's code-base, maybe you are reviewing legacy code, or maybe it's something else altogether. At this juncture, you're not sure whether you should ask the reviewer for help or soldier on by yourself. A few simple guidelines that I discovered (the hard way) help me with this: If you don't understand the code at all, ask the reviewer to run through the code with you. If there are parts you do understand and only a few lines have gone over your head, I'd leave a note on the review asking for the code to be explained. It's nice to mention that if possible, the explanation should be added as comments to the code. Written documentation is always good, and if you found the code tough to understand, someone else will too! On the other hand, if the part you don't understand can be found with a simple search then don't borrow your teammate's time - just search for it :) Exception - if the explanations you find are too lengthy/difficult to comprehend and this route is going to take at least twice as long as having your teammate explain it, you could ask for your teammate's help. Twice as long because when you ask for a teammate's help you are effectively losing 2 developers' worth of time to that problem.

3. Tests and Testability  
Many reviewers may ignore tests in reviews, but, I think reading and reviewing tests provide three benefits. For one, the tests act as documentation, explaining (through code!) how others should interact with the code you've written. Secondly, they ensure robustness. Code that is tested lets you know it works (under the assumptions of the test, at least). Thirdly, testable code is likely to be more modular and easier to understand. A good way to ensure these goals are met is to ensure that a reviewer at least look through the tests and verify that the tests are *logical* and *functional* where possible. You don't want tests that make incorrect logical assumptions or test something meaningless just to increase code coverage or other metrics.

4. Design concerns  
Sometimes, reviewers may bring up design issues in reviews. Reviews are not the best place to debate design (you should have a design review for this) but, if it's a non-debatable issue, it's better to have it fixed than go through because of "guidelines". The submitter should have linked the design (or summarized the change) in the review as well, and you may (politely) remind them to do so if they missed that out :)

   * Concurrency and threading
Examples of design issues that may be spotted only after design review include issues to do with scaling. For example, you notice that there are not enough (or too many) threads running or that a piece of code is not thread-safe and this necessitates a re-design (or a mental walkthrough of the design at least). These issues may not be obvious to a new developer, and so, the onus is more on an experienced developer to consider such possible failures.

5. Multiple reviewers  
Having multiple reviewers on a review may not be required for small reviews (simple bug fixes), but can be a great learning resource for larger reviews. If you have multiple reviewers, review the code without looking at other reviewers' comments, and then go back and read their comments to see what issues you possibly missed. Make sure to remove any of your comments that have already been mentioned in another reviewer's comment - you don't want to waste the submitter's time. Getting multiple reviewers on a review is also a good way to get new team members up to speed.

6. Timelines  
   * **Prioritization:** A guideline provided at one of my earlier jobs was that you should get all your reviews done before you start writing code. I think that makes sense because when you receive a code review, you are likely on the hook for "unblocking" the submitter. The submitter may not have much left on her plate to work on while a review remains open.

   * **ETAs and communication:** In addition, you should clearly communicate with the submitter to understand by what date he requires an iteration of the review, and by what date he would like the whole review to be completed. If you have a code review tool that can hold this information, even better! That lets you plan accordingly and provides an understanding of whether everything is still on track.

7. Style and minor changes  
Submitters may not enjoy receiving style and other minor changes on their reviews. Whether you should write out all of these may depend on your team's culture/teammates. I would say write out as many as you can find, but not to the point where you ignore larger, functional issues (see points 1 and 2). You don't want to find twenty minor issues (whitespace, indentation, etc.) and zero functional issues in code - as that may be annoying for the submitter. Since style is a subjective decision, ideally, style should be documented in a "style guide" that your team adheres to and enforces across its codebase. Such a document also lets you avoid having team members debate endlessly on style (tabs vs. spaces, for example).

8. Empathy/Language  
You'll find varying opinions on whether you should get to the point ("Change X to Y") or use softer language to make it easier for the submitter to take ("Might be worth thinking about changing X to Y"). What you choose depends on the culture of your team, and you should try to ensure there are no misunderstandings and no hard feelings arise because of this. A fair rule may be: If you're working remotely and/or are unlikely to see the reviewer, err on the side of softer language. If the submitter is on the same team and you understand they are unlikely to take it personally, you could go for the former, direct approach.

Hope these tips help :) I hope to keep this list updated as I learn more.
