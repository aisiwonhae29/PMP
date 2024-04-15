# ssh

### about

>https://zah.uni-heidelberg.de/it-guide/ssh-tutorial-linux
- secure protocol used as the primary means of connecting to linux servers remotely.
- stands for Secure Shell and provides a safe and secure way of executing commands, making chnages, and configuring services remotely.
- When connect through SSH, we log in using an account that exists on the remote server.


### How SSH works

- When we connect through SSH, we will be dropped into a shell session, which is a text-based interface where you can interact with your server.
- During on our SSH session, any commands that we type into our terminal are sent through an encrypted SSH tunnel and executed on our server.
- SSH connection is implemented using a client-server model.
- This means that for an SSH connection to be established, the remote machine must be running a piece of software called an SSH daemon.
- This software listens for connections on a specific network port, authenticates connection requests, and spawns the appropriate environment if the user provides the correct credentials.
- The user's computer must have an SSH client that have function to communicate using the SSH protocol and can be given information about the remote host to connect to, username to use and credential should pass to authenticate.


### cmd

- ssh-keygen: make securekey
- ssh-keygen -p: change or remove Private key. Change key cycle is similar with change password. (type original key and type new key two times.)
- ssh-keygen -l: Displaying the SSH key fingerprint.
- ssh [remote_host]: Connecting to a Remote Server adress: remote_host
- ssh -L [port:hostaddress:port]: port forwading


### concept

<img src="../public/a03_ssh-01.png" style="width:700px">


### example

1. login sequence

why: to avoid firewall block. This called tunneling.

```
# app1
ssh -p 1111 root@192.168.75.13
# app2
setting local port forwarding as 127.0.0.1:2022 to localhost:2002
ssh -p 3333 -L 1111:127.0.0.1:3333 root@192.168.73.5
```

### configure

- systemctl status ssh      : ssh service check, run or not
- vim /etc/ssh/sshd_config  : can find about sshd_config