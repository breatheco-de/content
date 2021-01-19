---
title: "Understanding JWT and how to implement a simple JWT with Flask"
subtitle: ""
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
