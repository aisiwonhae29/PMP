# SMTP: Simple Mail Transfer Protocol

### about

\# image

<img src="../zzz_image/S_SMTP.png" style="height:300px"><br>

\# general info

- SMTP is an Internet standard communication protocol for electronic mail transmission.
- The protocol version in common use today has extensible structure with various extensions for authenticatiion, encryption, binary data transfer, internationalized.
- SMTP servers commonly use the Transmission Control Protocol on port number 25(plaintext) and 587 (encrypted communications), 456.
- SMTP allows computers and servers to exchange data regardless of their underlying hardware on software.
- SMTP is a mail delivery protocol, not a mail retrieval protocol.

\# SMTP server

- SMTP server is a mail server that can send and receive emails using the SMTP protocol.
- Mail Submission Agent(MAS)  : The MSA receives emails from the email client.
- Mail Transfer Agent(MTA)    : The MTA transfers emails to the next server in the delivery chain.
- Mail Delivery Agent(MDA)    : The MDA receives emails from MTAs and stores them in the recipient's email inbox.

### config

- locate: /etc/postfix/main.cf

### work flow

1. Compose Email
  - email form
  - Recipient's email address
2. Sender's Email client connects to SMTP server
  - The email client (MUA: mail user agent) sends the email to the sender's SMTP server(MTA) via port 25, 465, 587, 2525.
  - The MUA examples(Outlook, Thunderbird, Apple Mail, Gmail, Yahoo Mail, etc.)
3. SMTP server processes the email
  - SMTP extracts the recipient's email address(user@example.com => domain: example.com)
  - check domain local delivery or external delivery
4. DNS lookup for recipient's mail server
  - If recipients is on a different domain, then the SMTP queries the DNS to find the MX records of example.com
5. Email is transferred to recipient's SMTP server
  - The sender's SMTP server establishes a connection with the recipient's SMTP server via port 25.
  - This triggers to execute SMTP handshake process
    - EHLO or HELO
    - MAIL FROM
    - RCPT To
    - DATA
    - QUIT
6. Email is delivered to recipient's mailbox
  - The recipients SMTP server forwards the email to the MDA(Mail Delivery Agent), such as Postfix, Exim, Sendmail, etc.
  - The MDA places the email in the recipient's inbox(Maildir or Mbox).
7. Recipients retrieves the email
  - The recipient access the email via a MUA.
  - The Email is fetched using POP3, IMAP, Webmail.

### mail sequence

1. SMTP connection opened
2. Email data transferred
3. Mail Transfer Agent(MTA)
4. Connection closed

### terms

- envelope: Set of information that the email client sends the mail server about where the email comes from and where it is going.



### Error

\# code: 535

- related with incorrecting authentication data
- 535 is response code signaling authentication issues during email sending.
- Common causes 
  - incorrect login credentials
  - server configuration issues
  - overly stric security settings and firewalls
- Diagnosis and Solutions
  - Identify the error through messages
  - Verify and correct login credentials, check server configurations, and adjust security settings