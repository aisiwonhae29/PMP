# FTP SFTP

### FTP

- PORT: 21

<details><summary>Linux command</summary>

```

# FTP server details

FTP_SERVER="ftp.example.com"
FTP_USER="username"
FTP_PASS="password"


# Remote file path

REMOTE_FILE="/path/to/remote/file.zip"

# Local output file

OUTPUT_FILE="file.zip"

# Connect to the FTP server

ftp -n -v "$FTP_SERVER" <<END_SCRIPT

```

</details>


### SFTP

\# about

SFTP is used to secure file transfers between a remote host server and a client user over a public network like the internet.
SFTP ensures that the host and client are validated and authenticated.
PORT: 22

\# features

1. SFTP works in a client-server architecture. Clients always initiate a request to connect and servers passively listen for client requests.
2. The server's and client's identities are verified and the connection is encrypted before files are transferred.
3. 

### filezilla

\# sequence

1. site Manager - click (top left first menu box)  
2. new site Manager - click 
3. protocol box select - SFTP - SSH File Transfer Protocol
4. Host box - input address of the server you're conncting to
5. port box - enter 22
6. Logon Type box - select Ask for Password

### remark

\# EOF(End Of File) & END_SCRIPT

EOF: In shell scripting typically denotes the end marker for a here document of here document redirection.w
