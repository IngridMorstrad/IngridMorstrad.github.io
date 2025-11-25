---
layout: post
title:  "EB-5 for Indians"
date:   2025-08-06 12:23:34
comments: true
tags: thoughts
---

DISCLAIMER: None of the below is financial advice or recommendations for anyone beyond myself. Please do your due diligence (and don't sue me, thanks!)!

## What

EB-5 is a program where you invest some money (800K$ minimum) and in exchange may be eligible for a green card.

One of the key issues with the EB-5 visa program is that it is currently backlogged for Indian citizens. However, some specific investment categories (targeted employment areas or TEAs) are not affected by this backlog. It's essential to ensure that any investments are directed into those categories to avoid delays.

The main benefits are getting the green card itself, meaning you are freed from the endless visa renewals, and the restrictions that come with visas (freeing up entrepreneurship opportunities, etc.). I go over this and "benefits" to travel (no benefit it turns out) in the last section below.

## Risk and Cost Analysis
With the EB-5 you "pay" an opportunity cost from investing the principal amount itself (800K$), which means you lose out on interest that you could have accrued on that money (whether savings interest or market returns). In addition, there is a chance of a full loss (meaning you lose all 800K$ as well).

Based on some calculations (done with the help of ChatGPT, so definitely not 100% accurate (EDIT: and now manually verified, so accurate enough not to be entirely useless)), here's a breakdown of potential financial outcomes for EB-5 investments in categories without a backlog. I've standardized the different scenarios to use a 100K$ cost towards fees (not returned), 800K$ investment for EB-5, and assumed a 1% yearly return, returned all at once after a 5-year period. The period affects the final results, so if you run your own calculations, please take note of that. I've assumed an effective tax-rate of 25%.

### Worst-case
There is approximately a 5% chance of a full loss (according to ChatGPT).

In such a scenario, the total loss would be $1,594,000 after six years (`900*1.1^6`).

To recover this, one would need to earn about $2.13 million pre-tax.  
To recover a $2,130,000 loss, you would need to work for
    <span id="yearsOutput">X</span> years
    if your pre-tax salary is

  <input type="number" id="salaryNumber" min="10000" max="5000000" value="100000" step="10000"> USD/year. (interactive, feel free to edit).

### Best-case

For EB-5, it looks like a project with a low return is likelier to allow you to get your principal back. Think of it this way: the corporations looking for an EB-5 investment are either risky investments that the banks don't consider safe enough to loan money to (these give a higher return like 5%) OR they are less risky investments that banks can loan money to, but at a higher rate than what they'd be able to get through the EB-5 program (returns around 1%). In this section, we'll model this latter case.

Since we assume 800K$ is fully returned after a 5 year period, with 1% interest per year, we should have ~840K$ after 5 years. In addition, we assumed 100K$ in fees, which will not be regained in the EB-5 case, but will grow if one does not take the EB-5 path. If invested in the S&P 500 with 10% returns yearly, this would lead to a 1.45M$ return (`900K * 1.1^5`), meaning the total difference at the end of 5 years is around 600K$. Note that if the investment is returned after 4 years, the difference drops to ~500K$, so the time period makes a big difference. With a 5 year period, the 600K$ translates to 800K$ pre-tax at a 25% effective tax rate.

This means working for an additional <span id="bestYearsOutput">X</span> years if your pre-tax salary is <span id="salaryEntered">Y</span> USD/year (interactive, feel free to update above).

### Average-case

[EDIT: After writing the post I realized the average-case is the average probabilistically, and so applies to how much a number of people would lose on average. This doesn't help for the individual investor, for whom either the worst-case or a best-case scenario applies. For EB-5, looks like most projects fall in either of these two outcomes. The average-case section is retained for posterity, but may not be particularly useful for an individual.]

Assuming a 5% chance of 100% loss, 10% chance of 50% capital loss, and 85% chance of full capital return with 1% interest, we get:
`(1.01^5*0.85+0.53*0.1)*800000`, which comes out to 757086.83$ over 5 years. The equivalent S&P 500 investment (10% return) gives us 1.45M$ as before. This translates to a 693K$ difference, which means you would need to earn another $924,000 pre-tax to recover the loss.

This translates to working for an additional <span id="averageYearsOutput">X</span> years if your pre-tax salary is <span id="salaryEntered">Y</span> USD/year (interactive, feel free to update above).

  <script>
    const salaryNumber = document.getElementById("salaryNumber");
    const yearsOutput = document.getElementById("yearsOutput");
    const averageYearsOutput = document.getElementById("averageYearsOutput");
    const bestYearsOutput = document.getElementById("bestYearsOutput");
    const salaryEntered = document.getElementById("salaryEntered");

    function updateYears() {
      const salary = parseFloat(salaryNumber.value);
      const years = (2130000 / salary).toFixed(2);
      const bestYears = (800000 / salary).toFixed(2);
      const averageYears = (924000 / salary).toFixed(2);
      yearsOutput.textContent = years;
      bestYearsOutput.textContent = bestYears;
      averageYearsOutput.textContent = averageYears;
      salaryEntered.textContent = salary;
    }

    salaryNumber.addEventListener("input", updateYears);

    updateYears();
  </script>

The total investment amount typically ranges from $870,000 to $940,000, which includes various fees. Of this, $70,000 to $140,000 is non-refundable (fees, etc.).

For couples, only one petition is required, so the above financial figures can effectively be divided in half if the couple splits finances.

## Aiming to open travel opportunities?
A review of [Visa Requirements for Indian Citizens](https://en.wikipedia.org/wiki/Visa_requirements_for_Indian_citizens) shows that a U.S. green card is treated the same as a valid U.S. visa in terms of international travel. As of July 2025, there don’t appear to be any countries where a green card provides entry privileges that an H1-B or H-4 visa does not.

### Alternative Citizenship Options
In addition to the EB-5 route, there are other countries that offer citizenship or residency through investment at a lower cost:

- Portugal, Spain, Greece, and Malta all offer residency-by-investment programs. Portugal is voting on changing Golden Visa requirements in September 2025. 

- Antigua & Barbuda, Saint Lucia, and Dominica offer citizenship for around $100,000.

- Antigua & Barbuda, in particular, provides access to all of Europe with its passport.

## Entrepreneurship
An H4 visa with an Employment Authorization Document (EAD) provides similar benefits to a green card with the exception that your spouse needs to be employed (I think on an H1-B, but check with your lawyers) and also, by virtue of it being a visa, the standard visa restrictions apply (can't re-enter if the visa is expired, need to renew it every 2-3 years, need to leave the country when you lose status). 

# Final thoughts

Comparing the program with similar programs in other nations, EB-5 is one of the better residency-by-investment programs out there assuming you get your principal amount back, even if it takes 4-5 years. Also important to consider the state of the world today (most nations seem to be moving away from globalization) and the recent hike in EB-5 fees for TEAs from 500k$ to 800k$ indicate that this may only get more expensive as time goes on, which means if you are interested it may be better to take advantage of this sooner rather than later.
