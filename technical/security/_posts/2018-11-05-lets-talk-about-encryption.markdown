---
layout: post
title:  "Let's talk about encryption"
date:   2018-11-05 23:51:00
comments: true
thumb: http://ashwinmenon.com/assets/images/code.jpg
categories: technical
---

## The better to write you with

Let's say you are Red Riding Hood, and you want to write a letter to your grandmother telling her you will be visiting. However, the big bad wolf is aware of your plans, and he decides he will *also* write a letter to your grandmother (pretending to be you) saying you won't be visiting. If only there was a way you could let your grandmother know your letter was from you *and* the wolf's letter was a fake. What if I tell you, little Red Riding Hood, that there **is** a way you can do this!

## Now you're just some terms that I used to know
<dl>
<dt>Encryption</dt>
<dd>Encryption is a process by which a message is transformed into a "secret message". The process of getting the message back from the "secret message"/encrypted message is called decryption.</dd>

<dt>Key</dt>
<dd>A value used in encryption and decryption. For example, say the encryption algorithm was "Move every letter of the message forward by some amount. If you pick "some amount" to be 1 (so 'a' becomes 'b', 'b' becomes 'c' and so on), then the key would be "1" (the value moved).</dd>

<dt>Symmetric key encryption</dt>
<dd>Encryption that uses only one key. The same key is used in encryption and decryption.</dd>

<dt>Asymmetric key encryption</dt>
<dd>Encryption that uses 2 keys - public & private. Either the public key can be used to encrypt and the private key can be used to decrypt, or vice versa.</dd>
</dl>

#### Too complex so let's be a little imaginary
I need you, dear reader, to assume a few things here.

Firstly, asymmetric key encryption may sound like magic, and it is tough to give really simple examples to show how it works. So, for now, we'll just assume such algorithms exist. Secondly, it is also important to note here that it is assumed that an encrypted message cannot be easily decrypted without the decryption key. This is also true in practice, but reasons why it holds true are too complex for this post.  

## Uses
Now that we know about asymmetric key encryption, how can we use it to help solve Red Riding Hood's conundrum?  

--Feel free to take a break here and think about solutions to this if you wish--  

Well, anytime you (or Red Riding Hood) want to say you yourself wrote a message, you can encrypt the message with your private key and add it as a "signature" (technical term, used to refer to the encrypted message) to the message. Your recipient (Grandma) knows your public key and should be able to decrypt your signature to see that it matches the original message. The big, bad wolf will not be able to sign the message (as he does not know your private key) with the same signature. Grandma will immediately know it is a fake when she is unable to decrypt the wolf's false signature with your public key!

## End
Relieved to have solved the problem, you get back to writing your letter. Little do you know, that further dangers remain...

Tune in next week for part 2!
