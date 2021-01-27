---
layout: post
title:  "2FA, phishing and U2F"
date:   2017-09-06 23:50:00
comments: true
thumb: http://ashwinmenon.com/assets/images/yubikey.png
tags: security 
---

## Intro
As part of efforts to improve security, my workplace has issued us Yubikeys. What is a Yubikey? It's a device you plug into your computer's USB port and when you touch it for a few seconds, it spits out a string. This string is used for authentication (to identify you). The device has a capacitive sensor to detect touch, just like most phones today (old phones that used a "stylus" use resistive-touch based on resistors). A month or so ago, I saw a video/article stating that 2FA (two-factor authentication) was susceptible to phishing, and there exists a new proposal U2F that could fix that issue. I knew that the Yubikey supports U2F, but I didn't understand how it solved the problem.

## What is 2FA? What is phishing?
If you've signed in to Google or Facebook or your bank from a new computer recently, you hopefully had to do two things. First, you had to enter your username & password and if you got those right, then you would have to do a second step where you enter a code sent to your mobile phone (or email). This "second step" is what makes the authentication two-factor (2FA). Why is this good? For one, most passwords are worth little. People use the same passwords on multiple sites and that means if one password is leaked, someone who wants to take over your account can just try that password on multiple sites. Or let's say you logged into your account through a compromised computer (maybe a shared computer in an internet cafe that had a keylogger that noted everything you typed on it). Now, if you typed your password on that computer, the "attacker" (possibly the owner of the computer) can view it! Now, he/she would have complete access to your accounts. Unless, 2FA. If you had 2FA set up, then when an attacker tries to log in to your account later with your password, they wouldn't be able to access it as they wouldn't be able to access your phone (which would be where the OTP would be sent). But, attackers don't give up easily...

Phishing is an attack where an attacker creates a website that looks just like your email login page (or bank login page or Facebook login page, you get the idea) and tries to get you to sign in. When you do, the username & password are sent to the attacker's website and he can use that to sign in to the actual website (email/facebook/bank) without you realizing it. Ah, so does 2FA protect me from this? NO! The attacker could just present you with a page asking you to type in the code sent to your device. If you do, the attacker has access to your account again.

## So what's the deal with Yubikey/U2F?
Here's where I was stumped. Long-pressing the Yubikey generates a string, regardless of what application you are in (for details on how: see references below). You can see the string printed out in notepad for example. So, that means it works very similarly to an OTP (one time passcode - the code sent to your phone), in the sense that it doesn't use information specific to what webpage you are logging into, etc. (it may use timestamps, etc. but so can OTP). But, everywhere I read that U2F protects you from phishing! What gives?

After reading a bunch of pages, all which basically stated that the Yubikey "just works"/"sends a key" without describing how it generates the key and why this prevents phishing, I read the specifications on the Yubikey site & the Google design doc on U2F. The problem was, I confused two different features of the Yubikey. The string I was seeing was Yubico's OTP, which was one of the many different things it supports. It also supports U2F, which is entirely different.

The way U2F works is this: first, you register your hardware token on the website (this is like creating a password). During registration, the hardware token creates a private/public key pair (if you don't know what this is, see below) and a "KeyHandle" (like a password) corresponding to the website. IMPORTANT: The "KeyHandle" STORES INFORMATION ABOUT THE WEBSITE NAME (protocol, hostname & port). It sends the "KeyHandle" & the public key to the website, which stores it. Then, when a login page is presented, the browser is given a "KeyHandle" for the user by the server (login website) to verify the user through U2F. The browser then asks the user to press the U2F hardware token. Once pressed, the hardware token first checks if this "KeyHandle" matches the one it has stored for this website name (as sent by the browser). It can do this because of the IMPORTANT point mentioned above. If this doesn't match (\*cough\* PHISHING ATTACK! \*cough\*), it just doesn't respond, and so authentication will fail. Since the browser plays a very important role, it should be AWARE of this role - the browser NEEDS to be U2F compatible for this to work. This also means that if the browser itself is compromised (called a "man in the browser" attack), then you're screwed (shrug).

Extra notes: U2F also protects against even more sophisticated phishing attacks (MITM during registration as well as authentication), but those aren't worth delving into. U2F acknowledges that it can be attacked if you managed to obtain a cert for the actual website (email/bank/facebook, etc.) but I'm not going to bother with that because that just means the certificate issuing process is broken, and also because I'm not sure how that breaks U2F (I think they would need the same origin name - which wouldn't work because of a DNS conflict but clearly I'm missing something). I think as of now "ChannelID" support is yet to be implemented.

## How public/private keys work
Let's say you want to send me some information, and ensure only I can read it. I have a pair of keys (1 public & 1 private). This pair of keys is created such that if you encrypt with the public key, the message can be decrypted with the private key. Now, you can encrypt the message you want to send me with my public key and ensure no one else can read it (since only I should have my private key).

## References (stuff I read so you don't have to)
https://docs.google.com/document/d/1SjCwdrFbVPG1tYavO5RsSD1QpJwj8\_im6sl-VWjJ6k0  
https://fidoalliance.org/specs/u2f-specs-master/fido-u2f-overview.html  
http://www.linuxjournal.com/magazine/yubikey-one-time-password-authentication?page=0,1
