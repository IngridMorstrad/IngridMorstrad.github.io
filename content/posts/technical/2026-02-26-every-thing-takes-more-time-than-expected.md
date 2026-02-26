---
comments: true
date: "2026-02-26"
title: Everything takes more time than expected
tags: [technical, ai]
---

A friend suggested that I allow users to login to hunchle.com without a password. This seemed fairly simple to implement, so I thought I'd give it a shot. I was allowing users to login with emails and passwords already, so removing a password was all that might be needed, right? And I had AI to help! Turns out, wrong! First, I had to streamline the new experience so that it worked for both existing users (who had passwords set) and new ones (who might never have a password). Adding this in meant I'd need a streamlined experience, so then I had to spend a few minutes researching how other websites did it. AI takes care of the coding, but needs a big helping hand with all of this. Taste is what I provide.

Once that was done, I started getting errors.
Okay, look at logs: Ah, I'm hitting rate limits!
Ways around it? Pay up or use a custom SMTP provider.
Okay, look up custom SMTP providers that have a free tier. Find Resend.
This needs DNS records added. Okay, pull up my domain name provider's website and add in the records.
Then wait for it to be picked up. It took 14 minutes to be picked up.

Even with AI, none of this is seamless. Compared to before, "coding" (specifically, only the act of writing code) is easier, but testing takes up a significant amount of time now, erasing some gains. This is because the AI often writes code implementing something completely different to what you want. Earlier, this was never a concern since you were writing code yourself. I guess the future can be seamless, but at a minimum, it would require that I trust AI with most of my logins. This explains why users were creating separate GitHub accounts, GMails and whatnot for agents like OpenClaw to use. At some level, I wonder if all these are even necessary in an agentic world. Looking forward, an agent for website/app building should probably come with its own email ID, phone number and preset logins for 3P services (database, DNS records, deployment) to make it truly seamless.

At the end of the day, something I thought would take 5-10 minutes to complete, finally took 3 hours (18-36x as long!). No wonder adding buffers to estimates rarely seems to work. You can tell someone I can do this in 3 days, but you can't pad it by 18x... How do we fix this? As of today, I think the best way is to highlight and understand that a very high-level of uncertainty exists 1) at the start of a project and 2) for large tasks. Simply don't estimate those. Instead, understand deadlines, and cut scope as needed by the deadline on a regular cadence. For small tasks, estimate, while surfacing actual delivery time and updating your forecasts with what you learn. If your forecasts aren't getting accurate over time, you might need to look deeper to understand why.
