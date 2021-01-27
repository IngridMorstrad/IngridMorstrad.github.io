---
layout: post
title:  "Let's talk about encryption - part 2"
date:   2018-11-01 23:51:00
comments: true
thumb: http://ashwinmenon.com/assets/images/code.jpg
tags: technical
---

This post is part of a series. For part 1, click [here](www.ashwinmenon.com/technical/security/2018/11/05/lets-talk-about-encryption.html)

## The problem
We have two computers (let's call them the client and the server) that want to communicate securely with each other. This means they want to ensure that the messages go to who they want it to go to (the other computer & not some random imposter-computer) and that the messages do NOT go to anyone else (like some spy-computer trying to steal the message).

## The solution
This is the solution as it is implemented today. Feel free to brainstorm other possible solutions and figure out why this one in particular was chosen.

The solution consists of 3 steps (terms explained in the next section):
1. Computer 1 (the client) sends a request to start a secure communication.
2. Computer 2 (the server) responds to the request.
3. Computer 1 (the client) sends a symmetric key which is asymmetrically encrypted with the server's public key.
3. Computer 2 (the server) decrypts with its private key. The server now has the symmetric key, which it uses to encrypt all messages for the session.

Since the client already knows the key (it sent it) it can decrypt all the messages. Symmetric key encryption is used for sending messages as it is faster than asymmetric key encryption.

Questions:
Why can't the client create & send the symmetric key to be used encrypted with the server's public key?

## Signing
Now that we know about asymmetric key encryption, how can we use it? There are two distinct ways in which it is used:
1. When you want to say you wrote a message and it was not tampered with, you would sign the request with your private key. Others can decrypt it with your public key to ensure it is you that wrote the message.
2. When sending messages and you want to ensure that only the recipient reads them, encrypt the message with the recipient's public key. The recipient (and ONLY the recipient) should be able to decrypt with their private key. The CA signs the certificate & this can be verified by the client using the CA's public key.

So, you would sign your message by encrypting it with your private key and adding that (signature) to the message. Then, you would encrypt the entire message (plus signature) with the recipient's public key to ensure only they can read it. After decrypting with their private key, they will decrypt the signature with your public key. If it matches the message, they'll know it was from you!

## Questions  
Q: How can we trust the server? (How do we know the messages are not being sent to another host?)  
A: In step 2, the server sends an SSL cert identifying itself along with its public key. The cert basically acts as identity proof (think of it like your passport or driving license). The cert has to be registered with a trusted root certificate authority (CA) for the browser (client) to accept it (similar to how a passport or driving license has to be registered with the government). There are only a few trusted CAs and trust can be revoked if they are found to fall foul of their duty.  
Q: Can the server send the symmetric key instead of the client?  
A: Don't know   
Q: When getting a new cert, why does the CA have to verify the private key as well in the key-pair? [The CA is basically verifying the domain owner owns the public key & also the key-pair]  
A: To fill in - is it necessary to verify that it owns both keys? What attacks are possible if not?  

Tampering (bonus)
 
### Resources
[Let's Encrypt - how it works](https://letsencrypt.org/how-it-works/)  
[Blogpost #1](http://www.hoylen.com/articles/it/email/security/basics.html)  
[Blogpost #2](https://robertheaton.com/2014/03/27/how-does-https-actually-work/)  
https://en.wikibooks.org/wiki/Cryptography/A_Basic_Public_Key_Example
https://pixabay.com/en/statue-of-liberty-monument-landmark-2501264/
