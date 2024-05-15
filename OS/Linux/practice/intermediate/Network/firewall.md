# firewall

### cmd

\# deamon

- (sudo) systemctl [$(manipulate operation)] firewalld

\# get active zone

- firewall-cmd --get-active-zones

\# port management

- firewall-cmd --list-ports                                             : show firewall list
- firewall-cmd --zone=public --add-port=[portNum]/tcp --permanent       : set firewall on specified port
- firewall-cmd --zone=public --remove-port=[portNum]/tcp --permanent    : set firewall on specified port
- firewall-cmd --reload                                                 : set modified firewall with reload process