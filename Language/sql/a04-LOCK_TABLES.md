# LOCK TABLES

### about

- 'LOCK TABLES' statement is used to lock tables explicitly for read or write operations within a transaction.
- It allows you to control access to tables and prevent other sessions from modifying the locked tables until the lock is released.


### usage

- LOCK TABLES table_name [ READ | WRITE ];
- UNLOCK TABLES;


### key feature

- ensure data consistency and integrity during complex operations involving multiple tables.