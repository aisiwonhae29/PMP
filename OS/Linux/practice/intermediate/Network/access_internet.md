# Access Internet

### about

\# Setting up network on CentOS 7 minimal

1. type 'nmcli d'

- In order to show quick list ethernet card installed on your machine.

2. type 'nmtui' 

- Command on your terminal and open Network Manager. After opening Network manager, select 'Edit connection'.
- This cmd is interact with "/etc/sysconfig/network-scripts/ifcfg-enp0s3"

3. Pick the network interfaces and click on the 'Edit button'.


\# DHCP configuration

1. choose 'Automation' in IPv4 configuration and check the Automatically connect checkbox.

2. Press OK and quit from the Network Manager to proceed with CentOS setup