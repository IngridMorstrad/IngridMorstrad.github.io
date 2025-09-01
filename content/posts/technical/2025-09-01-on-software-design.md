---
comments: true
date: "2025-09-01"
title: On Software Design
tags: technical 
bsky: 3lxsclllrlk2y
---

For a lot of my career, I never really understood software design. It was always presented as something more associated with SDE2s, or higher and not so much with SDE1s. I had no idea what to make of it or what to do with that information. The first few design documents I wrote seemed inane. There was something to be done, and we all knew what we wanted to do, but it looked like I had to formalize it in some way before I could move forward. The document always had a structure, always following a similar pattern, that made this exercise seem even more tedious. The structure usually went like this: Motivation, Problem, Requirements, Chosen proposal, Considered but declined proposal, Appendix. A glossary and "not in scope" section could also be excluded. For each proposal, we'd need to list out the pros and cons.

Now this seemed an exercise in futility because there was only one "real" option (choosing DynamoDB) and yet we had to go through this pointless exercise for some reason. It was not until later in my career where I dealt with true engineering problems where the options were all valid options, and it became crucial to define requirements precisely, as it was the requirements that would let us pick between the options (considering the pros & cons of each). One section I wish would be added would be a section on when a different option would become preferable. For example: if scale grows by 10x, switch to option B, or, if cost of a certain hardware component drops by 10x, switch to option B.

Without having real engineering problems - ones where the solution truly is unknown and there isn't a clear winner from the outset - writing a design document is a waste of time. Without technical skill, one is unable to identify what other options there are, and what the pros and cons of these options would be. How do you build that technical skill? Reading books can help, and working on ambiguous problems with others can help. Before I did that, I felt my design skills were lacking and I think that's a feeling many of us have. It surfaces clearly during interviews, when candidates regurgitate what they've read, not because they know it is the solution, but rather because it is the only thing they know. Luckily, one can get better by preparing for interviews (reading material) and more importantly, building things. Unfortunately, all of this costs time.

Where I stand today, I think software design is an interesting piece of the software engineering lifecycle, and opportunities exist to streamline this cycle by removing the need for a design where not necessary, and by providing tools to allow engineers to level up to write designs better & critique designs more thoroughly.
