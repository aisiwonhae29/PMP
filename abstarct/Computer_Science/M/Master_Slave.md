# Master Slave concept

> quote: https://medium.com/bina-nusantara-it-division/the-master-slave-database-concept-for-beginners-8a3884896b14

### about

- M-S is a way to optmize the I/O in your application other than using caching.
- The master database serves as the keeper of information, so to speak.
- True Data is kept at the master databse, thus writing only occurs there.
- Reading only done in the slave.
- This architecture serves the purpose of safeguarding site reliability.
- If a site receives a lot of traffic and the only available database is one master, it will be overloaded with reading and writing requests.

### example

\# 1 postgre DB: Master - 3 mongo DB: Slave

\# MySQL Mster-Slave Replication on the Same Machine

1. Choose Os as the host operating system, and the provided commands are for that operating system.
2. If we want  to setup our MYSQL master-slave replication on some other operating system, we will need to make modifications for its specific commands.
3. install MySQL on OS