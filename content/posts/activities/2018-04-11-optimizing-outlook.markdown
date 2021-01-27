---
layout: post
title:  "Optimizing Outlook"
date:   2018-04-11 19:29:00
comments: true
thumb: http://ashwinmenon.com/assets/images/mail.png
tags: activities
---

## Introduction
They say "necessity is the mother of invention". It's incredible the power programming gives you. Maybe if the power-hungry learned how to program they could be constructive rather than destructive. Then again, the recent Facebook scandal makes you wonder.

## The problem
Stepping down a few rungs and we're back to the little world I live in. For the past few days/weeks, I had been frustrated by the lack of mailbox space at work. 2 GB. "But, mail providers give you 15 GB for personal email nowadays!" I hear you say.

<blockquote> <i>15 Gigs?! No one can live at that speed</i> - Eddie Izzard. </blockquote>

Now, Outlook for Windows had this feature where you could group messages by conversations and then get rid of redundant messages in those conversations. What is a conversation? I'm not 100% certain, but I think it works like this:

Let's say you send a message. Now, any message that is a reply to that message (or possibly even a forwarded version of that message) is part of the conversation. Any reply (or possibly even forward) of a message in the conversation is also in the conversation. Ooh, closures. Or a recurrence? Different from recursion, I believe. Terms are well and good but as long you understand it, it doesn't matter.

This concept (of a conversation) let's you optimize messages. For example, when you send a message, and someone replies to that message, in most cases the entire text of your message is included in their message. That means your message provides no additional information and can be thrown in the trash. This can be done for every message in the conversation and you can get significant reductions in storage (up to reducing an entire conversation to just one - the final - message).

## The solution
Of course, this is easier said than done, and that is where this becomes an engineering problem. There are many parts of the problem to think about:

### Tools
You clearly do want to have some kind of programmatic way to access (read & delete) messages. Outlook for Windows has VBA scripts. On Mac? After some Googling, I discovered that you can use AppleScript, a scripting language for Mac which lets you interact with any other application on the Mac. Pretty cool!

This meant learning enough of a new language to write the program. AppleScript is probably the most readable language I've found yet. It reads like English. After coding in other languages, it took a little getting used to. The Script Editor (an application that comes with Mac) also has a Dictionary for every application it can interact with. For this task, I had to read the Microsoft Outlook dictionary, which explains what concepts exist (and can be interacted with programmatically) in Microsoft Outlook. Examples of these concepts include messages & folders.

AppleScript is very "primitive" in a sense. There are very few features/functions provided, and I had to Google extensively to see if there were implementations of common functions I could re-use. Re-use plays a big role in engineering. Why reuse? What about the purity of writing something from your own intellect? Well, that would slow things down and could produce bugs. It also lets you scale & build bigger & better things. Delivery is the other big part of engineering.

### The logic
The logic was not very easy to pin down. It would have been a lot easier if Outlook let you iterate through conversations and iterate through messages in conversation order (as in the UI). That's the initial assumption I made and started with. Assumptions are important in engineering too. It's important to get them right, or to get them reasonably right. If this assumption was wrong, I could still re-use the rest of what I'd done. At this point, this was the logic I had:

    Algorithm 1
    
    For each conversation
        Set allContent to <blank>
        For each message in conversation (from newest to oldest)
            If message's content is in allContent, delete message
            Else add message's content to allContent

Unfortunately, I later learned that it just gives you a list of messages in a folder in what seemed like mostly random order. This means you need to sort the messages in some order. I went with "Time sent". Note, however, that you still don't have the messages by conversation. Two messages in the same conversation could be separated by many others if you sort all messages by time sent. Ideally, you would want to partition the list of messages by conversation, and then just iterate through each partition, deleting the redundant messages. I opted for a much more inefficient, but easier to code solution (considering the difficulties of dealing with Outlook's objects in AppleScript). The logic looks something like this:

    Algorithm 2
    
    For every message in the folder
        Run Algorithm 1 on [all messages in the folder with the same subject]

Technically, you have to look for a similar subject (due to replies that start with "Re: " for example). If there are N messages in the folder, this is clearly O(N^2), whereas the partition algorithm would be O(N).

### Issues that come up while working on the problem
#### AKA Runtime issues (huehuehue)
AppleScript threw up a lot of problems as it is has very few "features". I struggled with getting the function to recognize types (from the Outlook dictionary), and it took hours of Googling to get to the solution.

Messages were never found to be exact subsets of other messages. After investigating, I found out that this was because of newlines and spaces. To get around this, I deleted all newlines and spaces. It would have been more efficient (theoretically at least) to write a new "contains substring" function that ignores newlines and spaces. However, since AppleScript has decent support for deleting newlines/spaces & a contains function, and previously mentioned advantages of "re-use", I decided to ditch the optimization (for the first iteration at least).

Since, as mentioned above in point 2, we have to figure out which messages belong to the same conversation. Initially, after figuring out all the messages to be deleted, I was deleting all of them at the end. This ended up being slow as I was iterating through all messages, even after I knew they had to be deleted. Storing all messages to be deleted, taking up memory, may not have helped either (I'm uncertain about this - maybe only a pointer is stored). I tried deleting messages immediately, but that wouldn't work because it interfered with the iteration and threw up errors. Finally, I decided to exit the loops after finding messages to be deleted, delete the messages, build up the list of messages again (which should decrease each time) and loop again. This turned out to be unbearably slow (Why? left as an exercise to the reader. Answer at the bottom.), even though I thought for certain it could run faster. This took over 3 hours to go over a folder with ~5000 messages (don't have data on the number of repeated messages). To fix this, I decided to "batch" the deletes. The deletes would exit the loops only after a certain number of conversations had been found to have repeated messages. This now runs fairly quickly.

## Conclusion
Overall, this was a very fun and fulfilling exercise. I ended up reducing my mailbox space significantly (700 MB to 100 MB for one folder alone). The code is [on Github](https://github.com/IngridMorstrad/Scripts/blob/master/OptimizeOutlook.applescript).

#### Answer to exercise above
This was slow as each time you deleted messages from a conversation, you would then start at the very beginning and loop over all messages, even the ones you knew should NOT be deleted. In some ways, the exact opposite of the problem we started with.
