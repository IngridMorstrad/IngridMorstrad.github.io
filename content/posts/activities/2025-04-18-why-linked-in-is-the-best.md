---
layout: post
title:  "Why LinkedIn is the best social network (for me)"
date:   2025-04-18
comments: true
tags: activities
---

At the outset, this may seem an absurd conclusion. To make my point, I'll need to go into a little bit about how social networks came to be. It won't take long.

Back in the mid-2000s, we had a bunch of social networks pop up. Hi5, Orkut, and of course, Facebook got a foothold on Dubai's "interwebz".
Possibly due to its simplicity or due to the exclusiveness stemming from its invite-only system, Facebook soon came to dominate. Importantly, at least in the beginning, Facebook had a simple guarantee: you post, and it would - with a 100% guarantee - land on your friends' walls (as feeds were called back then). This meant everything that I wanted to say would get blasted to my friends' screens and all the cool parties my friends were at would dangle irresistibly out of reach on my feed.

Things started changing with the introduction of the newsfeed, which led to a huge uproar. People hated it. People hate change. Now, Facebook controlled what would surface on your screen. People hate loss of control. The word "algorithm" was nowhere to be found, but it was basically about the same thing that dominates the media airwaves today.

Facebook came to be the leading social network till around 2014. Facebook pre-2014 was a magical place. To me, it's where I could catch up with friends, see what they'd been up to, share scruffy videos of the latest guitar riff I'd learned, and appreciate my friends' attempts at reaching the heights of Jason Becker. I wasn't great but the space was "safe" - the audience was limited. No one expected to make money or get famous off of social media. With the inviting "What's on your mind?" prompt, many shared. Some friends even wrote longer "notes" and I think I remember at least one sharing poems.

This all changed with the coming of Instagram. For my part, I was blissfully unaware of Instagram. Sharing only visuals and that too with a focus on fakeness from the first launch (with filters) meant it simply didn't "jive" with me. I came from the Nirvana, rock/grunge/post-punk school of thought, and authenticity was of prime importance. As I stuck to the comfort of Facebook, Instagram was acquired and things slowly started changing. 

At some point, Facebook decided to prioritize "groups" on your newsfeed. And in the process, deprioritized updates from friends. This destroyed the virtuous cycle social media needs to succeed. You post -> you get engagement (comments and likes) that manifests as a dopamine hit -> you post again seeking more dopamine, restarting the cycle. Facebook now ended up being a place where looking into your newsfeed was akin to looking down an endless dark well. There was nothing of interest to be found, and if you posted, it'd be lost to the ether. Just a complete lack of engagement, not even an echo to be found. Even negative comments were better than the wasteland Facebook had become.

Meanwhile, Instagram was picking up steam. My friends had moved there, and unbeknownst to me, direct messaging there turned out to be the way people kept in touch. However, try as I might, I couldn't get myself to post to Instagram. While my friends were setting up new years resolutions to use Instagram less, I was setting resolutions to use it more!

Enter LinkedIn. Sometime post-2020 LinkedIn moved to a model where you could post, and it would surface your posts to your network and vice versa. In exchange for your posts, you'd get likes and comments. "Hey!" I thought. "This feels familiar..." Indeed, it was simply old-style Facebook. Except, with a different set of connections.

<p id="ending">Now, here's the point of this post. We're in a bit of a golden moment here. This is the twilight zone before "the algorithm" takes a more powerful stance and you have ads or other revenue-generating junk pushed onto your feed. This is the opportunity for your 15 minutes of connection, where you can post, and hopefully, be heard. A hark back to the days when social media was actually social. And an opportunity to brighten faded connections or create new ones. All you have to do is post :)</p>
<a href="#" id="toggle-ending">Click to view alternate ending</a>

<script>
  const original = "Now, here's the point of this post. We're in a bit of a golden moment here. This is the twilight zone before the 'algorithm' takes a more powerful stance and you have ads or other revenue-generating junk pushed onto your feed. This is the opportunity for your 15 minutes of connection, where you can post, and hopefully, be heard. A hark back to the days when social media was actually social. And an opportunity to brighten faded connections or create new ones. All you have to do is post :)";
  const alternate = "Now, we get to today. I think we're in a bit of a golden moment here. A twilight zonebefore the darkness of an algorithm focused on revenue generation injects ads and junk into your feed. This is an opportunity to share, like in the early days of social media, where the focus was more on being social. Sure, there may be some hawking their courses or reposting memes from Twitter, but there's also a place for those that want to be authentic and build connection. A chance for brightening faded connections or forging new ones. It only takes one post.";
  let showingAlternate = false;

  document.getElementById('toggle-ending').addEventListener('click', function(e) {
    e.preventDefault();
    const para = document.getElementById('ending');
    showingAlternate = !showingAlternate;
    para.textContent = showingAlternate ? alternate : original;
    this.textContent = showingAlternate ? 'Click to view original ending' : 'Click to view alternate ending';
  });
</script>

And vote for your preferred ending:
<form action="https://formspree.io/f/xoveobwr" method="POST">
  <label>
    <input type="radio" name="ending" value="original" required> Original
  </label>
  <label>
    <input type="radio" name="ending" value="alternate"> Alternate
  </label>
  <button type="submit">Vote</button>
</form>

---

### Post-script
_For those interested in the technical side_  
I used an LLM to help me set up the "alternate ending" mechanism. This is a static page, so I can't really use responses from a server, meaning everything has to live client-side. This makes it hard to collect votes from readers on which version of the alternate ending to prefer. The LLM suggested using a form and making a request. This works, but has its limitations. What are the limitations? I'll leave that as an exercise for the reader, or as a good topic to discuss over coffee ;).
