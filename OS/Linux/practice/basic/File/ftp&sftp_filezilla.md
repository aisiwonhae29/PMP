# FTP:File Transfer Protocol

> quote: https://en.wikipedia.org/wiki/File_Transfer_Protocol

### FTP

- FTP is a standard communication protocol used for the transfer of computer files from a server to a client on a computer network.
- FTP is built on a client-server model architecture using separate control and data connections between the client and the server.
- FTP users may authenticate themselves with a plain-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it.

### specification

- uri prefix: ftp://
- PORT: 21

### cmd

- ftp [hostname]    : Open the server.
- open [hostname]   : Open the server.
- get [filename]    : Download the file from server.
- put [filename]    : Upload the file to server.
- status
- mkdir [dirname]
- rename [filename]
- delete [filename]
- chmod [mode] [filename]
- hash              : Toggle hash mark printing for file transefer.
- quote [command]   : Send a raw command on remote server
- binary            : To binary mode change
- ascii             : To ascii mode change
- quit

### logic

\# mode  

- FTP run in active or passive mode, which determines how the data connection is established.
- active mode
  - The client starts listening for incoming data connections from the server on port M.
  - It sends the FTP command PORT M to inform the server on which port it is listening.
  - The server then initiates a data channel to the client from its port 20 the FTP server data port.
  
- passive mode
  - The Client is behind a firewall and unable to accept incoming TCP connections, passive mode used.
  - The client uses the control connection to send a PASV command to the server and then receives a server IP address and server port number from the server
  - With received info, the client uses to open a data connetion from an arbitrary client port to the server IP address and server port number received.

- FTP needs two ports (one for sending and one for receiving) because it was originally designed to operate on top of Nework Control Protocol(NCP) simplex protocol tuilized two port addresses two way communications.

\# NAT & firewall traversal

- FTP normally transfers data by having the server connect back to the client, after the PORT command is sent by the client
- This is problematic for both NATs and firewalls, which do not allow connections from the internet towards internal hosts.
- To solve these, FTP client and uses PASV command are needed.

### Data types

- ASCII (TYPE A): Used for text.
- Image (TYPE I, commonly called bynary mode): The sending machine sends each file byte by byte, and the recipient stores the bytestream as it receives it.
- EBCDIC (TYPE E): used for plain text etween hosts using the EBCDIC character set.
- Local (TYPE L): Designed to support file transfer between machines which do not use 8-bit bytes.
- Unicode text files using UTF-8 (TYPE U): Defined in n expired Internet Draft which never became an RFC, thought it has been implemented by several FTP clients/servers.

### File structures

> File organization is specified using the STRU command.

1. F or FILE structure: stream-oriented

- Files are viewed as an arbitrary sequence of bytes, characters or words. This is the usual file strucutre on Unix systems and other system SP/M. MS-DOS, Windows.

2. R or RECORD structure: record-oriented

- Files are viewed as divided into records, which may be fixed or variable length. This file organization is common on mainframe and midrange systems, such as MVS, VM/CMS, OS/400, and VMS.

3. P or PAGE structure: page-oriented

- Files are divided into pages, which may either contain data or metadata. Each page also have a header giving various attributes. This file desinged for TENEX systems.

### Data transfer modes

- Stream mode(MODE S): Data is sent as a continuous stream, relieving FTP from doing any processing.
- Block mode(MODE B): Designed primarily for transferring record-oriented files, although can also be used to transfer stream-oriented textfiles. FTP puts each record of data into several blocks and passes to TCP.
- Compressed mode(MODE C): Extends MODE B with compressing using run-length encoding.

### Login

- ID/PW: username is sent to the server with USER command, password with PASS command.
- Anonymous FTP: No verification is actually performed on the supplied data.

### install

1. sudo yum update
2. sudo yum install vsftpd ftp
3. sudo systemctl start vsftpd
4. sudo systemctl enable vsftpd
5. sudo firewall-cmd --zone=public --permanent --add-port=21/tcp
6. sudo firewall-cmd --zone=public --permanent --add-service=ftp
7. sudo firewall-cmd --reload
8. sudo cp /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.default // to preserve default config

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

### remark

\# EOF(End Of File) & END_SCRIPT

EOF: In shell scripting typically denotes the end marker for a here document of here document redirection.w


# file zilla

### sequence

1. site Manager - click (top left first menu box)  
2. new site Manager - click 
3. protocol box select - SFTP - SSH File Transfer Protocol
4. Host box - input address of the server you're conncting to
5. port box - enter 22
6. Logon Type box - select Ask for Password

# file zilla server

### implement

1. Download file zilla server
2. Connect to server: Launch and connect server, address_127.0.0.1 port_14147 is default.
3. Server configuration: General setting, FTP over TLS settings ...
4. Create Users and Groups: Usermanagement, group management
5. Assign shared folder
6. Configure firewall and router
7. Connect to your FTP server