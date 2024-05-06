# handshake

### about 

- A handshake refers to the process of negotiation and agreement between two parties (typically server, client) to establish a secure communication channel.

### sequence

1. Initiation

- One party (client) initiates the handshake by sending a message to the other party (the server), indicating its intention to establish a secure connection

2. Response

- The receiving party (the Server) responds to the initiation message, confirming its readiness to preceed with the handshake.

3. Parameter Negotiation

- During the handshake, the parties negotiate various parameters such as the SSL/TLS version to used, cryptographic algorithms for encrytion and authentication and other session details.

4. Key Exchange

- If asymetric encryption (public-key cryptography) is used, the parties exchange crpytographic keys to establish a shared secret
- This typically involves the lient generating a pre-master key, encrypting it with the server's public key, and sending it to the server.

5. Authentication

- The parties may authenticate each other to ensure the identity of the communication entities.
- This involve presenting digital certificates, verifying signatures, or using other authentication mechanisms.

6. Agreement

- Once all negotiation and authentication steps are successfully completed, both parties agree on the paraameters and keys to be used for the secure communication session.

7. Encryption

- With the parameters and keys agreed upon, the parties can now encrypt and decrypt data exchanged during the communication session, ensuring confidentiality and integrity.

### key

- handshake process is crucial for establishing trust and security in network
- This ensures that both parties agree on the terms of communication and that the communication channel is secure against eavesdropping, tampering, and impersonation.