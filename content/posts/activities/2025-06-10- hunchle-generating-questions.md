---
layout: post
title:  "Hunchle: Generating questions"
date:   2025-06-10
comments: true
tags: activities
---

Time for a blog post detailing the difficulty with creating a fun-to-play trivia app (www.hunchle.com)

## Generating questions is hard

A good quiz app needs good questions. That should be obvious, and your #1 priority, but when I initially built Hunchle, I decided to focus on other features ([adding AI hints](https://www.ashwinmenon.com/posts/activities/2025-05-28-how-i-used-ai-in-hunchle/), streaks, share results, and thinking of whether I should include ads: I didn't). What makes a good question? As someone who is dabbled in quizzing through high school and college, I was told, "A good question is one that you can work out. Not one that you either know or you don't". For example, "What is the name of the elf in the Fellowship of the Ring?" is a horrible question. There is no way you can guess the answer if you don't know it. A much better formulation of the same question would be, "Legolas is this type of being, which shares its name with the title of a movie starring Will Ferrell". Here, even if you don't know the word "Elf" from The Lord Of the Rings context, you may be able to guess at it from the movie clue.

### Question difficulty

Ideally, I think a fun quiz would have a solve rate of 60-80%. For a quiz with five questions, this means most people score 3/5 or 4/5. A regular 5/5 score ends up being boring, but a rare 5/5 score feels like an achievement. Similarly, if I consistently score 1/5 or 2/5, I might feel like this just isn't in my wheelhouse. But, think about how you could balance difficulty across such a wide range of people. People assume their knowledge is "less than" others, but my take is that people simply have knowledge of different areas, based on their life experiences and interests. For example, my sister could likely tell you who Shah Rukh Khan's third child is (which I couldn't), while I could name an equally inane fact like the capital of Barbados (something many others can't). For a quiz to be appealing to both, you need to use your five questions to ideally hit a wide variety of topics. However, a wide variety of topics alone is not good enough. For someone who is well-versed with The Lord Of The Rings, a question like "Legolas is this type of being, which shares its name with the title of a movie starring Will Ferrell." is too easy. And ideally, you want a question that's a bit more of a challenge for them.

Providing "hints" is one way to help address these issues. Hints allow the quiz creator to provide slightly harder questions while reducing the risk that players may not get the answer. However, generating hints [has its own challenges](https://www.ashwinmenon.com/posts/activities/2025-05-28-how-i-used-ai-in-hunchle/). 

### Question topic

The last thing I'd consider is if the topic is "fun". The answer needs to be commonplace enough that people know of it, but obscure enough that there's a dopamine hit from arriving at it. "What is a four-letter word for a process  in which substances combine chemically with oxygen from the air, thus giving out bright light, heat, and smoke?" is an extremely boring question (and answer: fire). But, "What is a technique of painting in which small, distinct dots of color are applied in patterns to form an image?" (A: Pointillism) is too specific and usesless for anyone not too interested in art. This adds another challenge.

## Generating questions with AI

Using AI to generate questions tends to lead to questions of the former type, unfortunately, meaning A LOT of time needs to be spent reworking the questions into something interesting. This is why I added the ability to allow users to submit questions. AI also fares very poorly at judging the difficulty of a question, presumably because it has access to such a wide corpus to work with. One of the questions it generated was on the "Songhai Empire" (that I'd never heard of, and predictably, 0% of users got right), while another was on "the capital city of France", which I presume 7 billion of the 8 billion people on earth will get right. "Training" (prompting) the AI with some of the ideas in this post resulted in questions that have too many clues, and on boring topics.

## Possible paths forward?

**Presenting a different pool of questions to different users**  
All the following ideas result in users not answering the same pool of questions, which can be considered a disadvantage.
- Generating questions for a user based on questions they have answered correctly in the past could be a great way to keep this engaging for users.  
- Allowing the user to select categories is another approach, but that still needs questions to be generated. Limiting this to 1 question per day could mitigate the disadvantage somewhat.  
- Allowing users to submit questions has the advantage that it takes the load off of me, but will need a lot of users to scale well. Since the question submitted by the user cannot be shown to them, everyone may not be playing on the same pool of questions (though this may be less of an issue if only 1 question per quiz is "different").  

Ideally, LLMs just generate "good" questions for the app. I've not been successful with this yet, but maybe, with even more "training" or finetuning, this could work.
