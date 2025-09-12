# User Account

### user

- new user: sudo useradd newuser [-s: shell] [-d: home directory] [-m: create home directory] [-g: group] [-G: additional groups]
  - ex)  useradd jhipster -s /bin/bash -m -g jhipster -G sudo && \
  echo 'jhipster:jhipster' |chpasswd && \
- set pw: sudo passwd newuser
- add detail: sudo usermod -c "New User's Full name" newuser
- assign privileges(sudoers group): sudo usermod -aG sudo newuser
- user list: cat /etc/passwd | cut -d: -f1  // less /etc/passwd
- remove user: sudo userdel [-r] john

### group

- make group: sudo groupadd groupname
- group user list: getent group groupname
- group list: getent group
- group delete: sudo groupdel groupname

### additional tip

- /home/newuser will be home directory.(if needed with -d option change home directory)