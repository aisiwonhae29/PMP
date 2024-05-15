# systemctl

### about

- systemctl cmd is a command-line utility used in mordern Linux distributions that use systemd as their init system.
- systemd is responsible for managing the system's services, processes, and other aspects of the system's boot process and management.
- systemctl allows users to interact with systemd to control system services, view their status, enable or disable them and manage system state.

### cmd

- systemctl start [service_name]            : start service
- systemctl stop [service_name]             : stop service
- systemctl restart [service_name]          : restart service
- systemctl enable [service_name]           : enable service
- systemctl disable [service_name]          : disable service
- systemctl status [service_name]           : check the status
- systemctl                                 : view system's current state
- systemctl list-units --type=service       : Filtering by unit type
- systemctl list-units --state=inactive     : same
- systemctl --failed
- systemctl list-dependencies [unit_name]   : viewing dependencies
- systemctl [mask | unmask] [unit_name]     : prevent a unit from being started manually or by any other unit by masking it(mask means prevent to execute)
- systemctl daemon-reload                   : reloading systemctl configuration.

### appendix

\# types of systemctl units

1. service
2. socket
3. device
4. mount
5. automount
6. target
7. snapshot
8. timer
9. path
10. slice
ex) systemctl list-units --type=mount