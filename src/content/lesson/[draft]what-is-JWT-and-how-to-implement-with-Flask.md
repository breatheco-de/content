---
title: "Understanding JWT and how to implement a simple JWT with Flask"
subtitle: "One of the challenges for any RESTful API is having a good authentication strategy!"
cover_local: "../../assets/images/http-0.png"
textColor: "white"
date: "2020-10-19T16:36:31+00:00"
tags: ["HTTP"]
status: "draft"

---



# The Handshaking Protocol

Normally a handshake is a greeting between two people. In the same way, a computer handshake serves as a greeting between two computer systems and It is used to initialize a network connection between two hosts.

A computer handshake may be completed between any two systems that communicate with each other on the same protocol. The systems could be a client and server or simply two computers on a P2P network. The handshake confirms the identities of the connecting systems and allows additional communication to take place. During this process the computer recieves a great ammout of data allowing him to learn how to communicate with several devices and networks.

A handshake between two computers has three possible outcomes:

+ No response : the system that recieves the handshake is not available or does not support the protocol of the initiating system
+ Connection refused: the system that recieves the handshake is available to receive the request, but refuses connection.
+ Connection accepted : The system that recieves the handshake is available, it receives the request and accepts the connection

For example, USB connections between computers and devices use handshakes to verify data has been received or not, or to check if the device needs user intervention to continue.

## What is JWT?

Json Web Token or JWT is an open standard to create tokens for get authenticated on an Application. 

First the server creates a token to verify the user identity and it is sent to the client. Then the token is sent back to the server so that server remembers the user's identity in every following request coming from a certain entity.

This standard has become quite popular since it's very effective for Web Apps like Google APis, where after the user authentication you make API requests. 

 JSON Web Token is a type of token that includes a structure, which can be decrypted by the server that allows you to authenticate the identity of the user of that application.

[picture of the structure]

You may notice that the string is divided in three sections separated by a (.). Each section has it meaning:

1.	HEADER: The first part stores the type of token and the encryption algorithm.
2.	PAYLOAD: The second part has the data that identifies the user: it can be its ID, user name, etc.
3.	SIGNATURE: The last part is the digital signature, which is generated with the previous two sections, and it allows you to verify if the content has been modified.









