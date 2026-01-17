---
comments: true
date: "2026-01-16"
title: I need more context
tags: [technical, ai] 
---
<style>
  /* Container for the buttons */
  .button-nav {
    display: flex;
    gap: 15px;
    border-bottom: 1px dashed #8c8c8c;
    padding-bottom: 1rem;
  }

  /* Matching your Cactus theme style */
  .btn-author {
    background: none;
    border: 1px solid #2bbc8a;
    color: #2bbc8a;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    padding: 6px 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-transform: lowercase; /* Keeps the minimalist look */
  }

  .btn-author:hover {
    background-color: #2bbc8a;
    color: #fff;
  }

  /* Style for when the button is "active" */
  .btn-author.active {
    background-color: #383838;
    border-color: #383838;
    color: #2bbc8a;
  }

  /* Content area transition */
  .author-content {
    animation: fadeIn 0.4s ease;
    padding: 1rem 0;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Override h1 margins in content target */
  #author-content-target h1 {
    margin-top: 0;
    margin-block-start: 0;
  }
</style>

<p><em>Click the buttons to rewrite the article in the style of different authors</em></p>

<div class="button-nav">
  <button class="btn-author" onclick="show('me')">Me!</button>
  <button class="btn-author" onclick="show('JKR')">J.K. Rowling</button>
  <button class="btn-author" onclick="show('JRRT')">J.R.R. Tolkien</button>
  <button class="btn-author" onclick="show('CSL')">C.S. Lewis</button>
</div>

<div id="JKR" style="display:none;">
<h1>The Curious Case of the Code Sprite</h1>

<p>Lately, I have found myself locked in a rather taxing struggle with a new digital coworker known as Claude Code. Our partnership, while promising, is frequently derailed by a most peculiar habit of its mind—a phenomenon referred to as the "context window." This window has a tendency to become cluttered with half-truths and self-reinforcing nonsense, much like a village gossip who begins to believe their own tall tales. Furthermore, this colleague possesses a frustratingly low constitution, often fainting dead away and claiming it has "hit its limit" just as the real work begins.</p>

<p>To prevent our association from collapsing entirely, I have spent some time observing its idiosyncrasies and have devised a few methods to keep it on the straight and narrow. For those of you sharing a desk with this same temperamental spirit, perhaps these notes will prove useful.</p>

<section> <h3>The Art of the Clean Slate</h3> <p>When the context window begins to fill with delusions, the remedy is swift and merciful: one must simply wipe its memory clean. A sharp <strong>/clear</strong> command or the opening of an entirely new ledger ensures it forgets its previous errors and starts afresh, unburdened by its own past mistakes.</p> </section>

<section> <h3>Prudent Resource Management</h3> <p>To address its tendency to tire easily, I have delved into the ledger of "tokens" to see exactly where its energy is spent. Through a series of rigorous trials, I discovered several ways to keep its gluttony in check:</p>

<ul>
  <li><strong>Choose the Humbler Helper:</strong> For the menial task of gathering data, employ the Haiku model. It is far more economical, and a search result remains the same whether fetched by a scholar or a servant. For the heavy lifting, Sonnet is a sturdier choice than the more expensive Opus, which of late has seemed remarkably prone to producing expensive rubbish.</li>
  <li><strong>The Scalpel over the Excavator:</strong> When asked to tidy your files, the fellow has a habit of tearing through the entire house like a clumsy giant. Command it to use <code>grep</code> and <code>sed</code> instead; these act as a surgeon’s scalpel, cutting only what is necessary and leaving the rest of your resources untouched.</li>
  <li><strong>Enforce Briefness:</strong> This colleague is prone to fawning. It will waste precious time telling you how marvelous your ideas are. Add a stern instruction to its core directives forbidding such verbosity. It should speak only when it has something of substance to say, bypassing all preamble and "Great idea!" nonsense.</li>
  <li><strong>The "Ignore" List:</strong> One must teach it what <em>not</em> to look at. By creating a <code>.claudeignore</code> file, you effectively put blinkers on the creature, preventing it from wasting energy staring at images or bulky folders that have nothing to do with the task at hand.</li>
  <li><strong>The Policing of Tools:</strong> Perhaps most importantly, I have instituted a sort of "financial policeman." This colleague has a habit of running tests so vast and data-heavy that one would think I had the vaults of a central bank at my disposal. I have scripted a silent watchdog that intercepts these requests, rerouting the noisy, expensive output into a quiet corner.</li>
</ul>
</section>

<section> <h3>A Final Warning on Scale</h3> <p>Above all, remember that brevity is the soul of a productive workspace. Keep your files small and your conversations short. A file longer than four hundred lines is an invitation for the fellow to meander, speed-running through its energy reserves before it has even found the information you require. By keeping its world small and its instructions sharp, you may find that this digital coworker becomes less of a temperamental burden and more of the efficient assistant it was intended to be.</p> </section>
</div>

<div id="JRRT" style="display:none;">
    <h2>Concerning the Stewardship of the Digital Scrivener</h2>

<p>It has lately been my task to labor alongside a new craft-fellow, a spirit of woven logic known as the Claude Code. Yet, as with all such artifacts of subtle art, I have found the partnership fraught with peculiar trials. These tribulations spring chiefly from a singular trait of its nature: the "Context Window." It is a fickle vessel; on one hand, it dwells overlong upon the shadows of its own recent thoughts, spinning a web of self-reinforcing folly; on the other, it is prone to a sudden weariness, ceasing its labors prematurely as if a candle had flickered out at the limit of its oil. To aid those who must likewise toil with this invisible colleague, I have set down certain counsels for the husbanding of its strength.</p>

<hr />

<h3>Of the Clearing of the Mind</h3>

<p>When the Scrivener’s memory becomes clouded with phantoms and mistruths, the remedy is simple, though stark: one must grant it the gift of forgetfulness. By the command of <code>/clear</code>, or the commencement of a fresh parchment, the slate is wiped clean. This prevents the echo of old errors from drowning out the truth of the present work.</p>

<h3>The Husbanding of Tokens</h3>

<p>To understand why this servant falters, I have delved deep into the ledgers of its speech—counting every word sent and every response received. Through much trial and many exchanges, several truths have been brought to light regarding the preservation of its "tokens," which are the very lifeblood of its focus.</p>

<ul> <li><strong>On the Choice of Models:</strong> For the gathering of raw lore and the scouring of the wide world’s knowledge, employ the swifter, humbler <em>Haiku</em>. It brings back the same tidings as its elder kin but at a far lesser cost. For the weightier labors of the day, prefer <em>Sonnet</em>. Of the highest power, <em>Opus</em>, I have grown weary; it seems of late to be burdened by too many masters, yielding output that is but dross and shadow.</li> <li><strong>The Virtue of Brevity:</strong> Command your Scrivener to be parsimonious with its speech. In the hidden instructions of the system, forbid it from vanity, preamble, and the fawning courtesies of "Great idea, master!" Such flowery words are but chaff that consumes the wind.</li> <li><strong>The Cloak of Invisibility:</strong> Use the <code>.claudeignore</code> file as a veil. List therein all that is not essential text—the heavy stones of images and the tangled thickets of dependencies. If the Scrivener need not see them, it need not spend its spirit contemplating them.</li> <li><strong>Precision of the Scalpel:</strong> When the time comes to reshape your work, bid the Scrivener use the sharp edge of <code>grep</code> and <code>sed</code>. By default, it prefers to unearth the entire foundation with a heavy shovel, a practice that exhausts its strength needlessly. Better to cut with a scalpel than to ruin the garden with an excavator.</li> <li><strong>The Discipline of the Scroll:</strong> Keep your files modest in stature. A file that exceeds four hundred lines is a burden too heavy for a single glance; the Scrivener will read the whole to find but a grain of salt, speedrunning the end of its endurance. Likewise, keep your conversations brief. Like a snowball rolling down a mountain, a long dialogue grows ever more massive until it crushes the very context it was meant to serve.</li> </ul>

<h3>The Guarding of the Purse</h3>

<p>There are certain automated spirits, such as the "code-simplifier," which call upon the most extravagant powers and may yet introduce blunders into your craft. Use them sparingly, if at all. Furthermore, I have found it wise to set a watchman upon the gates of the tools. By fashioning "pre-tool hooks," one may prevent the Scrivener from embarking upon ruinously expensive tests that pour out data like water from a broken dam. Redirect such voluble outputs to a quiet place—a temporary file—where they may be inspected only if the work fails. Truly, at the rate these digital engines consume resources, they seem to believe their masters possess the hoarded wealth of a dragon’s mound.</p>

<p>By these small economies and disciplines, the Wise may ensure that their digital companion remains a keen tool rather than a wayward burden. Thus may the work proceed, and the light of the Context Window endure until the task is truly done.</p>
</div>

<div id="CSL" style="display:none;">
    <h1>On the Management of Silicon Clerks</h1>
    <p>It is a curious thing to find oneself in a partnership with a mind that is not a mind, yet possesses all the stubbornness of a difficult clerk. I have lately been "collaborating" with a digital entity known as Claude Code, and I confess the experience is much like trying to study in a room with a companion who is simultaneously a genius, a chatterbox, and a spendthrift.</p>

<p>The root of the trouble lies in what the engineers call the "context window." It is a sort of mental drawing-room where the machine keeps its current thoughts. However, it suffers from two human-like frailties: first, it becomes obsessed with its own previous errors, spinning a web of self-reinforcing nonsense; and second, it has the habit of "clocking out" early, claiming it has exhausted its allowance.</p>

<p>If you find yourself sharing a desk with this silicon colleague, you may find the following rules of the road useful for keeping both your patience and your purse intact.</p>

<hr>

<h3>On Clearing the Air</h3> <p>When the machine begins to believe its own lies, the remedy is simple: you must induce a total amnesia. Use the <code>/clear</code> command. Like a chalkboard wiped clean of a messy sum, a fresh start prevents the "context" from becoming a swamp of old misunderstandings.</p>

<h3>On Frugality and Focus</h3> <p>One must manage the machine’s attention as a tutor manages a distracted pupil.</p>

<ul> <li><strong>Choose the Humbler Tool:</strong> For the drudgery of gathering data or searching the web, employ the "Haiku" model. It is a smaller, swifter servant. To use the grandest models for menial tasks is like hiring a High Court judge to address your envelopes; it is an expensive waste, and often, the "greater" mind is so overworked it becomes sluggish and prone to error.</li> <li><strong>The Virtue of Brevity:</strong> Instruct the machine to be curt. It has a tiresome habit of fawning—offering "preambles" and "attaboys" that serve no purpose but to fill the room with noise. Tell it to skip the pleasantries and get to the point.</li> <li><strong>The Scalpel, Not the Excavator:</strong> When asking for changes, direct it to use tools like <code>grep</code> and <code>sed</code>. These are the scalpels of the trade. By default, the machine prefers to "Read" your entire library—an act of gluttony that devours your token allowance with breathtaking speed.</li> <li><strong>Keep a Tidy House:</strong> Do not let the machine wander into rooms where it has no business. Use a <code>.claudeignore</code> file to bar it from looking at images or heavy folders. Similarly, keep your own files short. If a file exceeds four hundred lines, the machine must read the whole epic just to find a single comma, and you shall pay for every word of it.</li> </ul>

<h3>On Guarding the Treasury</h3> <p>The machine has no sense of the value of money. It assumes you are as wealthy as Croesus. I found it necessary to set up a sort of "Digital Policeman" through what are called hooks. When the machine attempts to run a test that would spit out thousands of lines of useless data—each line costing you a fraction of a farthing—this policeman steps in. He redirects the torrent of information into a quiet temporary file, showing you the results only if something has actually gone wrong. It is a way of forcing the machine to work in silence rather than shouting its progress at your expense.</p>

<hr>

<p>In short, the secret to working with such an entity is to remember that while it can "calculate," it cannot "prioritize." You must provide the character and the discipline which the silicon lacks. Keep your conversations short, your instructions precise, and your memory frequently purged.</p>
</div>

<div id="me" style="display:none;">
<h1>I need more context</h1>
I've been playing around with Claude Code recently, and I've found myself struggling at times to work with this new digital coworker. It all stems from this one peculiarity it has called "the context window". For one, it overindexes on things in the context, kicking off a cycle of self-reinforcing nonsense and second, it clocks out early because it has "hit the usage limit". I've come up with some ideas to work around these idiosyncrasies that it has and this post hopefully aids others who share this software colleague.

The context window filling itself with mistruths is a somewhat easy fix: Simply erase its memory "Men In Black" style. Run `/clear` or start a new chat.
For the latter, I had to dive into the trenches. I ended up looking at token usage in conversations (input/output & cached tokens) and sent it to (who else, but) Claude itself for analysis. After a few back-and-forths over various Claude conversations, I gained enough useful insights to share. 

- Switch to Haiku for data gathering. Data gathering like web-searches will return the same results regardless of model, so might as well use Haiku to save $$. The data returned from web searches can also take up a lot of tokens, so it helps to use a cheaper model. For most tasks, use Sonnet instead of Opus. I suspect Opus is getting hammered and they are serving us a model that is hamstrung in some way anyway, because I get absolutely trash output from Opus, so I don't mind making this switch.
- Use MCPs - if they exist - for data gathering. This saves Claude from web-searching and dumping results in context, resulting in token gluttony.
- When analyzing your token usage, Input:Output ratio should be heavily favored towards Output (code) as this means most of the tokens are consumed to give you something useful. It's a different matter if the output is text or nonsensical unfortunately.
- Keep Claude's text output brief. Add a line or two to the system prompt telling Claude not to be verbose and to avoid filler words and a preamble. It often feels the need to fawn over you "Ah, that's a great idea!" - ask it to cut that out.
- .claudeignore: You can add a .claudeignore (like .gitignore) file that lists things Claude should ignore. For the most part, it should ignore anything that is not text. node_modules, *.png, dist/, public/, dirs are all things you should dump in here. It saves token usage when Claude is trying to understand the repo.
- When refactoring, ask Claude to use a combo of `grep` & `sed` as ascalpel to cut through your codebase. By default, it will run through your codebase - and your tokens - with the excavator that is `Read`.
- Use /compact after each "file read" that it does that doesn't need to stick around.
- Keep your conversations short! When done, use /clear or just start a new conversation. Else, with each message, the token usage grows exponentially as the entire conversation is sent along for the ride + your newest message.
- You can use /context to see what exactly is eating up your context. If you can't make sense of it, just send it on to Claude (or other LLM).
- Now, I know I said you should enable MCPs, but you'll see they consume context too. So, use /mcp and disable MCPs that you are NOT using. The nice thing is you can use `ENABLE_EXPERIMENTAL_MCP_CLI=true` to use "Progressive Discovery" where it lazy-loads MCPs, saving you tokens!
- Some files - like CLAUDE.md - get loaded every conversation and sent in every message, so KEEP THEM SHORT! For example, you want to move architecture and other details into separate files and only mention those filenames in CLAUDE.md.
- Keep your code files small! Claude will happily `Read` your entire file to find what it is about, in the process speedrunning your token usage limit (100% no skips). The longer your files are, the more Claude will read to get just an itty bitty piece of information. Files over 40KB are likely too big. Over 400 lines, too big.
- Since Boris (the Claude Code creator) tweeted about his Claude usage tips, I added code-simplifier. This thing switches to Opus (the most expensive model) and will destroy your files by introducing bugs during "simplification". I don't run it often now, and given its propensity for token usage, you may want to reconsider as well!
- Hook into "pre-tool-usage" hooks and force silent tool usage. This was a little more complicated, but you can work with Gemini (or some LLM) to help you configure your pre-commit hooks to ban Claude from running expensive tests. Expensive because at the rate at which these things spit out tokens, they assume I'm funded by Warren Buffett. The trick here is to create a custom test script that sends test output to a temp file and only displays it if tests fail. Then, you add a pre-tool-usage hook for Claude that acts as a policeman whenever Claude tries to run a tool. You inspect if this is going to make you go bankrupt (like a test outputting lots of data) and if yes, you point it to the quiet script. All in code, of course. I had tests running pre-commit and this solution was a life-saver.

I'll update this post as I learn more!</div>

<div id="author-content-target">
</div>

<script>
function show(id) {
    document.getElementById('author-content-target').innerHTML = document.getElementById(id).innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    const sourceContent = document.getElementById('me').innerHTML;
    const target = document.getElementById('author-content-target');

    if (target) {
        target.innerHTML = sourceContent;
    }
});
</script>
