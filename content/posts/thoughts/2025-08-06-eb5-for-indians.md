---
layout: post
title:  "EB-5 for Indians"
date:   2025-08-06 12:23:34
comments: true
tags: thoughts
---

DISCLAIMER: None of the below is financial advice or recommendations for anyone beyond myself. Please do your due diligence (and don't sue me, thanks!)!

EB-5 is a program where you invest some money (800K$ minimum) and in exchange may be eligible for a green card.

One of the key issues with the EB-5 visa program is that it is currently backlogged for Indian citizens. However, some specific investment categories (targeted employment areas or TEAs) are not affected by this backlog. It's essential to ensure that any investments are directed into those categories to avoid delays.

## Risk and Cost Analysis
With the EB-5 you "pay" an opportunity cost from investing the principal amount itself (800K$), which means you lose out on interest that you could have accrued on that money (whether savings interest or market returns). In addition, there is a chance of a full loss (meaning you lose all 800K$ as well).

Based on some calculations (done with the help of ChatGPT, so definitely not 100% accurate), here’s a breakdown of potential financial outcomes for EB-5 investments in categories without a backlog:

There is approximately a 5% chance of a full loss.

In such a scenario, the total loss would be $1,351,000 after six years.

To recover this, one would need to earn about $2 million pre-tax.  
To recover a $2,000,000 loss, you would need to work for
    <span id="yearsOutput">X</span> years
    if your pre-tax salary is

  <input type="number" id="salaryNumber" min="10000" max="1000000" value="100000" step="1000"> USD/year

  <div class="output" id="result"></div>

  <script>
    const salaryNumber = document.getElementById("salaryNumber");
    const yearsOutput = document.getElementById("yearsOutput");

    function updateYears() {
      const salary = parseFloat(salaryNumber.value);
      const years = (2000000 / salary).toFixed(2);
      yearsOutput.textContent = years;
    }

    salaryNumber.addEventListener("input", updateYears);

    // Initial calculation
    updateYears();
  </script>

On average, the expected loss is about $600,000, which means:

You would need to earn another $895,000 pre-tax to recover the loss.

This translates to X years of work, if your pre-tax salary is Y.

The total investment amount typically ranges from $870,000 to $940,000, which includes various fees. Of this, $70,000 to $140,000 is non-refundable (fees, etc.).

For couples, only one petition is required, so the above financial figures can effectively be divided in half if the couple splits finances.

## Aiming to open travel opportunities?
A review of [Visa Requirements for Indian Citizens](https://en.wikipedia.org/wiki/Visa_requirements_for_Indian_citizens) shows that a U.S. green card is treated the same as a valid U.S. visa in terms of international travel. As of July 2025, there don’t appear to be any countries where a green card provides entry privileges that an H1-B or H-4 visa does not.

### Alternative Citizenship Options
In addition to the EB-5 route, there are other countries that offer citizenship or residency through investment at a lower cost:

- Portugal, Spain, Greece, and Malta all offer residency-by-investment programs.

- Antigua & Barbuda, Saint Lucia, and Dominica offer citizenship for around $100,000.

- Antigua & Barbuda, in particular, provides access to all of Europe with its passport.

# Final thoughts

Comparing the program with similar programs in other nations, EB-5 is one of the better "residency by investment" programs out there, assuming you get your principal amount back, even if after 4-5 years. Also important to consider the state of the world today (most nations seem to be moving away from globalization) and the recent hike in EB-5 fees for TEAs from 500k$ to 800k$ indicate that this may only get more expensive as time goes on, which means if you are interested it may be better to take advantage of this sooner rather than later.
