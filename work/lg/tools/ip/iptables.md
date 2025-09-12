# iptables tool

# about

- [iptables](../../../../abstarct/Computer_Science/I/iptables.md) 

# command

iptables -P INPUT DROP

sudo iptables -A OUTPUT -p tcp --dport 8000 -j DROP
sudo iptables -L OUTPUT --line-numbers
sudo iptables -D OUTPUT 1 (지우고 싶은거 지움)
