---
comments: true
date: "2026-01-17"
title: Optimizing Tack On
tags: [technical, ai] 
---

With AI advancing rapidly, one of the most asked questions these days is, "Are software engineers still needed?". I have some answers! I love optimizations and performance engineering, and decided to dig into my codebase (with Claude Code) to find possible improvements in this domain. If you've worked with these tools, then you know that for an inquizitive person, there is nothing better as with AI, you get to learn and improve at a rapid pace!

For context, I built Tack On (playable on [Hunchle](www.hunchle.com), if you select Tack On from the top) and just asked AI to optimize some of the algorithms. Tack On is a word game where you chain words together where the last two letters of a word in the chain match the first two letters of the next word (playing the game is an easier way to understand it).

I'm happy to report that software engineers still add something to the process. While AI can still build, there is more that I could extract by inspectings its responses and talking with it. Here are some of the discoveries, presented as interview questions.

# Q1

To chain words, Tack On builds an adjacency list. How might you optimize the following code?

```
for word1 in word_list:
    for word2 in word_list:
        if word1[-2:] == word2[:2]:
            graph[word1].append(word2)
```

<details>
<summary>Click to show answer</summary>
A: Create a mapping from prefix[word] -> [word1, word2, ...] which is O(n).  Then, you can go through the word list, and for each word, map it to prefix[word] to get the same graph! Note that you don't want to add the same word into prefix[word], to avoid a "infinite" chain. This was in fact a better solution than the AI found, here's the full convo:

<details>
<summary>Click to expand conversation</summary>

```
❯ For 1. wouldn't the following be even more optimal?

  > Create a mapping from prefix[word] -> [word1, word2, ...] which is O(n).  Then, you can go through the word list, and for each word, map it to prefix[word] to get the same
  graph!

⏺ You're absolutely right! 🎯

  My suggestion was over-engineered. I built two dictionaries but only used one:

  # My suggestion (wasteful):
  prefix_dict = defaultdict(list)  # Actually used
  suffix_dict = defaultdict(list)  # NEVER USED!

  Your optimized version:

  # Build prefix mapping only - O(n)
  prefix = defaultdict(list)
  for word in word_list:
      prefix[word[:2]].append(word)

  # Build graph using only prefix mapping - O(n × k)
  graph = defaultdict(list)
  for word in word_list:
      for next_word in prefix[word[-2:]]:  # Look up suffix as prefix key
          if next_word != word:
              graph[word].append(next_word)

  Why this is better:
  - Half the memory: One dict instead of two
  - Cleaner logic: Only build what you use
  - Same time complexity: O(n) setup + O(n × k) graph building

  When would you need suffix_dict?
  Only if you're also building the backlinks graph (words that can come before a given word). But checking the code:

  # wordchainfinder.py line 51
  backlinks[word2].append(word1)  # Built in same loop as graph

  They build backlinks simultaneously, so the current O(n²) approach does both in one pass. With your optimization, we'd need:

  # Forward edges: word -> next_word
  for word in word_list:
      for next_word in prefix[word[-2:]]:
          if next_word != word:
              graph[word].append(next_word)
              backlinks[next_word].append(word)  # Can add backlink here!

  So your approach is strictly better - single dict, same functionality. Good catch!

❯ We don't need graph[word].append(next_word) right? We can just do `graph[word] = prefix[word[-2:]]` and then when using it, make sure we exclude the graph[word] -> word mapping
  to prevent infinite chains

⏺ Brilliant insight! You're absolutely right. 🧠

  # Even better - O(n) construction, shared references
  prefix = defaultdict(list)
  for word in word_list:
      prefix[word[:2]].append(word)

  # Just point to the prefix lists directly!
  graph = {word: prefix[word[-2:]] for word in word_list}

  Advantages:
  1. O(n) construction instead of O(n × k) - no filtering loop
  2. Massive memory savings - all words with same suffix share one list
    - Before: 10,000 words × 20 connections = 200,000 references
    - After: ~676 unique 2-letter combos × 20 words = ~13,520 references (15× less!)
  3. Simpler code - just one dict comprehension

  Trade-off:
  - Add if next_word != word check when traversing (negligible cost)

  # When using the graph:
  for next_word in graph[current_word]:
      if next_word == current_word:  # Skip self-loop
          continue
      # ... process next_word

  Critical constraint: Don't mutate the lists since they're shared:
  graph["ABLE"].append("NEWWORD")  # BAD! Modifies prefix["AB"] too

  But for read-only traversal (which is the use case here), this is strictly better than my suggestion.

  Comparison:
  - Original O(n²): 10K words = 100M comparisons
  - My suggestion: 10K words × 20 avg = 200K operations
  - Your suggestion: 10K words = 10K operations (20× faster than mine!)

  You just made the optimization 20× better. Well spotted! 🎯
```
</details>
</details>

# Q2

This one's a simpler one. We don't want to accept questions with answers that match previously used answers (for Hunchle). How would you fix the below code?

```
  def is_answer_already_used(answer, used_answers):
      used_lower = [a.lower().strip() for a in used_answers]  # O(n) rebuild
      return answer_lower in used_lower  # O(n) search

  Problem: O(n) list comprehension + O(n) search = O(n) per check, called multiple times = O(n²) total
```

<details>
<summary>Click to show answer</summary>
A: Initialize once, and use a set instead of a list.
</details>

# Q3

To rate limit calls to the LLM, we want to track timestamps. Why is the below suboptimal?

```
  LLM_CALL_TIMESTAMPS = [t for t in LLM_CALL_TIMESTAMPS if now - t < 60]
```

<details>
<summary>Click to show answer</summary>
A: Use a queue (or a deque). Pop from the front while `now - t < 60`.
</details>

# Q4

We sometimes want to replace a single word in the chain. In that case, we do a linear search through entire word list when only need words with specific prefix/suffix. How would you optimize this?

```
  for word in word_list:  # O(n) search
      if word.startswith(prefix) and word.endswith(suffix):
          candidates.append(word)
```

<details>
<summary>Click to show answer</summary>
A: This was the AI's initial solution:
```
  Optimization: Build prefix_dict/suffix_dict once, then:
  # O(k) where k is words with that prefix
  candidates = [w for w in prefix_dict[prefix] if w.endswith(suffix)]
```

But then I prompted with:
<details>
<summary>Click to expand conversation</summary>

```
>   For 5. Would it be better to have a mapping from (prefix, suffix) -> [word1, word2] where word1, word2, etc. are words with that prefix AND suffix? Can optimize by pruning
  the mappings that only have 1 item to map to (as they cannot be replaced)? There is a trade-off wrt memory here, can you analyze that?

⏺ Excellent questions! Let me address each:

  5. Two-Dimensional Mapping - Memory Analysis

  Brilliant optimization! Let's analyze:

  Current Approach (1D):

  prefix["AB"] -> [ABLE, ABOUT, ABOVE, ABSTRACT, ...]  # ~20 words
  # To find replacement for: prefix="AB", suffix="LE"
  candidates = [w for w in prefix["AB"] if w.endswith("LE")]  # O(k) filter

  Two-Dimensional Approach (2D):

  prefix_suffix[("AB", "LE")] -> [ABLE]
  prefix_suffix[("AB", "UT")] -> [ABOUT]
  # Direct lookup
  candidates = prefix_suffix[("AB", "LE")]  # O(1) lookup!

  Memory Analysis

  Data characteristics:
  - n = total words (e.g., 10,000)
  - p = unique prefixes (max 676 = 26²)
  - s = unique suffixes (max 676)
  - c = unique (prefix, suffix) combinations (variable)

  1D Memory:
  Storage: p dictionaries, n total word references
  Memory: O(p + n) ≈ O(n) for large n

  2D Memory:
  Storage: c dictionaries, n total word references
  Memory: O(c + n)

  What's c?

  Let me check empirically:

⏺ Bash(python3 -c "
      words = []…)
  ⎿  Total words: 4608
     Unique prefixes: 192
     Unique (prefix, suffix) combos: 2299
     … +3 lines (ctrl+o to expand)

⏺ Real Data Analysis (from tack_on_word_list.txt):

  Total words:                    4,608
  Unique prefixes:                  192
  Unique (prefix, suffix) combos: 2,299

  After analyzing replacement usefulness:
    Combos with >1 word:            823 (useful for replacement)
    Combos with 1 word:           1,476 (cannot replace - prune)

  Memory savings: 64.2% of keys can be pruned!

  Memory Comparison

  1D Approach:
  Keys:    192 prefix strings
  Values:  4,608 word references
  Memory:  ~4,800 units

  2D Approach (unpruned):
  Keys:    2,299 (prefix, suffix) tuples
  Values:  4,608 word references (same words, different grouping)
  Memory:  ~6,900 units (45% MORE memory)

  2D Approach (pruned):
  # Only store combos with >1 word
  prefix_suffix = {}
  for w in words:
      key = (w[:2], w[-2:])
      if key not in prefix_suffix:
          prefix_suffix[key] = []
      prefix_suffix[key].append(w)

  # Prune single-word entries
  prefix_suffix = {k: v for k, v in prefix_suffix.items() if len(v) > 1}

  Keys:    823 tuples (64% fewer than unpruned)
  Values:  Fewer word references (words in single-word combos not stored)
  Memory:  ~2,500 units (48% LESS than 1D!)

  Performance Comparison
  ┌──────────────┬───────────────┬──────────────────────────┐
  │  Operation   │      1D       │       2D (pruned)        │
  ├──────────────┼───────────────┼──────────────────────────┤
  │ Lookup       │ O(k) filter   │ O(1) direct              │
  ├──────────────┼───────────────┼──────────────────────────┤
  │ Memory       │ 100% baseline │ ~52% (48% savings)       │
  ├──────────────┼───────────────┼──────────────────────────┤
  │ Keys         │ 192           │ 823 (but smaller groups) │
  ├──────────────┼───────────────┼──────────────────────────┤
  │ Construction │ O(n)          │ O(n)                     │
  └──────────────┴───────────────┴──────────────────────────┘
  Recommendation

  Use 2D with pruning because:

  1. 64% of combos are useless (single word = no alternatives)
  2. Massive speedup: O(k) → O(1) lookups (k ≈ 24 avg based on 4608/192)
  3. Memory savings: 48% less after pruning
  4. Trade-off is worth it: Small increase in keys, huge decrease in filtering cost

  Implementation:
  # Build 2D mapping with pruning - O(n)
  from collections import defaultdict

  def build_replacement_map(words):
      ps_map = defaultdict(list)
      for w in words:
          ps_map[(w[:2], w[-2:])].append(w)

      # Prune single-word entries (no alternatives = useless for replacement)
      return {k: v for k, v in ps_map.items() if len(v) > 1}

  # Usage - O(1) lookup!
  def find_replacement(prefix, suffix, exclude_words):
      candidates = replacement_map.get((prefix, suffix), [])
      return [w for w in candidates if w not in exclude_words]

  The pruning is key - without it, 2D uses 45% MORE memory with marginal benefit.
```
</details>

</details>
