# Oracle VM VirtualBox.

### about

- VirtualBox is cross-platform virtualization software.
- This allows users to extend their existing computer to run multiple operating systems including Microsoft Windows, Mac OS X, Linux, and Oracle Solaris, at the same time.
- VirtualBox is ideal for testing, developing, demonstrating and deploying the solutions across multiple patforms from one machine.

### VM Virtual Enterprise

| Base Package                                                                 | Extension Pack                                                                |
| :--------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| Consists of all open source components and is licenced under the GNU GPL V.2 | Binaries are released under the Oracle VM VirtualBox PUEL licence             |
| Totally free for pseronal and business use                                   | A licence must be purchased for buisiness. The paid for license is perpetual  |
| Can be distributed and modified by customers                                 | Customers cannot distribute it                                                |
| Contains all the basic hypervisor features                                   | Virtual USB3.0, 2.0 device supports. VirtualBox Remote DeskTop Protocol(VRDP) |
| -                                                                            | Host webcam passthrough, Inter preboot eXecution (PXE) boot ROM               |
| -                                                                            | NVMe Storage emulation, Oracle Cloud Infrastructure integration               |

### cmd

\# mount

> quote: https://www.pragmaticlinux.com/2021/02/how-to-mount-a-shared-folder-in-virtualbox/

- sudo mount -t vboxsf -o uid=$USER,gid=vboxsf [mount_name] [mount_location]    : mount on
- sudo umount [mount_location]                                                  : mount down