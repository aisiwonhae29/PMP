# iptables

# about

- iptables is a command that manages the linux packet filtering and NAT rules.
- Activate based on kernel's netfilter framework.

# work

- Port permission/ deny
- IP address based filtering
- NAT
- packet logging

# structure

## main chains

- INPUT: For incoming packets
- OUTPUT: for outgoing packets
- FORWARD: for packets routed through the system

## main tables

- filter: basic tables(for filtering)
- nat: for NAT
- mangle: for packet alteration
- raw: for chasing connection tracking

# example

- [lg/tools/ip/iptables.md](../../../work/lg/tools/ip/iptables.md)