# user 

### command

- create user ['$username']@['$ipaddress'] (IDENTIFIED BY ['$password']);: Create user
- 

# privileges

### sequence

\# grant privilege to another host.

1. Create user
2. Grants the privilege
3. Open the specified firewall port (modify inbound rule> new rule click> make rule)

### command

- select user, host from mysql.user;: List user's privileges