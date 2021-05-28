---
layout: post
date: "2021-05-27"
title:  "Reflections on my career"
comments: true
tags: thoughts
---

Having worked for a little over six and a half years as a professional software engineer, now may be a good time to reflect on what I've learned and how I've grown.

## Company 1
In my first role, I primarily worked on implementing bug fixes and small features. While I feel bug fixes are not well considered by the industry, I really enjoyed working on them. They work as great on-boarding tools, allowing developers to come in and simply implement the fix or can also be great tools for learning the code-base. You can only fix a bug when you really understand what is causing it (if not, something will fail sooner or later).

As an avid reader of mystery novels growing up, this is the closest I could get to an investigative career. Beyond that, I didn't really know much. I didn't understand the systems I was working with to a great depth, nor could I jump between different levels of abstraction.

From a job perspective, the job was very well organized. Code reviews and designs were tracked by software internally, and each of these _had_ to have dates. This included dates by which you expected to complete your portion, dates by which you expected a first review, dates by which you expected the review to be complete, and similar dates for quality assurance (QA). In addition, reviewers had to explicitly mark a box saying "approved". This made the status of projects very clear. The dashboard would also display what reviews you still had to work on, as well as what bugs were assigned to you, etc. Reviews included checklists to ensure commmon issues were checked for (these had to be checked off for the review to complete) and also had buttons encouraging compliments for things done well on the review.

Every week, we had a meeting where we triaged bugs (this was how work was assigned, there was not much other than bugs for the first few months). We might go over the status of any work in progress as well. If a task was assigned to you and it was unclear what you had to do, you could use this time to get an idea and update the task description. Every bug was also tied back to the initial code review that caused it, which was a little stressful.

Training was copious, somewhat effective and somewhat ineffective. What was effective was that teachers were giving the lectures - rather than developers - which made it easier to absorb the content. I guess it makes sense - hire people to do a specific role and it works well. What didn't work was the amount of content that one is expected to absorb. It was like drinking out of a firehose - you manage to drink some water, but most of it is wasted. There were courses you could take as well, and they were well-structured too, with assignments and the like.

Code was in basically a mono-repo, but with testing deferred till QA, this meant a lot of broken code (incompatible due to breaking changes in dependencies or just broken dependencies) was checked in. The lack of testing also meant that the stages ("alpha"/"beta") were basically meaningless and even harmful.

In terms of the atmosphere, the campus was basically a theme park with bikes and shuttles you could ride to get from one building to another (as you would often need to - either to meet colleagues, go to the cafe, or for fun!). A private room (or shared with one other colleague) for every employee meant high productivity (or the complete opposite if you wished!).

Interestingly, the programming language used had *only* global variables and functions had no access restrictions (public/private were comments). As you may expect, this contributed to quite a few bugs.

Some other interesting points were that we got to see the software being used by real customers (doctors/nurses), got to know of each new customer, released software only once a year or two (like the Microsoft Windows of old) and had little-to-no options to work-from-home.

## Company 2
The second company I worked at was almost the polar opposite, and more in line with how software development works in Silicon Valley. Engineers had to own operations, along with development, and you needed to know a lot about the system and your dependencies to get your job done. In addition, training was either non-existent or conducted by engineers.

Instead of releasing once a year, releases could happen the very same day. Code reviews required a "ship it" (but no dates) and designs only an assumed consensus. As one may expect, the lack of a strictly defined process created a little more uncertainty and allowed a lot more initiative taking and more impact making.

These facets meant the role came with increased responsibility, and faster growth. One year into the role, I took a week or two going through all the code I could - diving through layers of abstraction into downstream dependencies and upstream callers to really understand our system. This made me feel like for the first time I was really getting things.

Unlike company 1, which struggled with discoverability ("what does this thing do? where can I read more about it?"), company 2 did a fairly swell job making things accessible (_if_ they were documented).

Private rooms were a distant dream, with open offices being the preferred way of enforcing collaboration (sometimes interruption), and office walls were bare concrete.

The vast differences, however, made the switch a great way to learn a lot quickly as having experienced both sides, I could easily see the benefits and drawbacks of the different ways things were done.

Coincidentally, both companies had tenets/values/commandments for employees to follow or use as guiding lights.

Here's to learning more!
