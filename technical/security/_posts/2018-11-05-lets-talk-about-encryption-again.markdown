---
layout: post
title:  "Let's talk about encryption - again!"
date:   2018-11-20 23:51:00
comments: true
thumb: http://ashwinmenon.com/assets/images/code.jpg
categories: technical
---

This post is part of a series. For part 1, click [here](../05/lets-talk-about-encryption.html).

## Wolf Einstein
The wolf has realized you've foiled his initial plans, and he's decided to up his game. Now, he knows you encrypt your message with your private key. He decides he will decrypt the message with your public key, which will let him know exactly when you plan to visit. THen, he plans to intercept you on the way to your grandmother's house - just like the fairytale foretold.

## How can you solve this?
All you need to solve this problem are a basic understanding of encryption, decryption, private and public keys.  

--Pause here if you wish to solve the problem yourself--  

You realize encrypting the message with your private key won't work as the wolf will just decrypt it as he stated. What about encrypting it with your public key? Well, the wolf won't be able to read your message then, but neither will your grandmother!

However, if you use your recipient (Grandma)'s public key to encrypt the message, then the wolf won't be able to read it, only grandmother will! Problem solved.

## Bonus
For a further challenge, think about the scenario that follows. You want to write a letter and send it to Grandma. However, the wolf is willing to pose as your postman and change the text of your message. Now, using your knowledge of encryption/decryption and public/private keys, how can you ensure that if the wolf tampers with your message, then Grandma knows that what she's received is "fishy"?  

--Again, feel free to pause here and think for a bit--

The solution for this has already been described. Encrypting the message with your private key (as in post 1 of this series), will ensure that the wolf cannot tamper with it. The wolf may be able to decrypt your message (he has your private key after all), but he will be unable to encrypt it again.

## Summary
Rolling all the threads above into a ball, Red Riding Hood now knows enough to ensure that:
1. Her recipient knows the message was from her. This is done by encrypting the message with her private key.
2. Her recipient knows the message was tampered. This can also be done by encrypting the message with her private key.
3. Her recipient knows that the message was only intended to be read by the recipient. This can be done by encrypting the message with the recipient's public key.

So, you would sign your message by encrypting it with your private key and adding that (signature) to the message. Then, you would encrypt the entire message (including the signature) with the recipient's public key to ensure only they can read it. After decrypting with their private key, they will decrypt the signature with your public key. If it matches the message, they'll know it was from you!

{Unresolved question: What if you instead encrypt the message with the recipient's public key first and then encrypt it with your own private key? Will that work in all cases too? Tentative answer: Yes}

## End
Having learned how to securely send messages, Red Riding Hood happily starts writing her letter.

Tune in next week for part 3!

### Further reading
[EFF on encryption](https://ssd.eff.org/en/module/deep-dive-end-end-encryption-how-do-public-key-encryption-systems-work)  
