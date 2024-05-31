# Mount

### about

- Mounting is a concept in operating systems and file systems that allows a file system or storage device to be made accessible and integrated into file system.
- When a file system or storage device is mounted, it becomes part of the unified directory structure, enabling users and app to access and interact with ths seamlessly.
- In programming, mounting typically achieved through system calls or library functions provided by the operating system.

### cmd

- sudo mount -t vboxsf -o uid=$USER,gid=vboxsf a ~/annotation

\# option specification

- t: Filesystem type
  - ext4    : The fourth extended filesystem.
  - xfs     : The XFS filesystem.
  - vfat    : FAT filesystem used in USB drives.
  - ntfs    : NTFS filesystem used in windows.
  - iso9660 : Filesystem for CD-ROMs.
  - nfs     : Network File system.
  - cifs    : Common internet file system for SMB shares.
  - vboxsf  : Virtualbox shared folder filesystem.

- o: This allows specifying various mount options.
  - uid     : This option sets the user ID of the owner of the files in the mounted filesystem.
    - numeric user ID   : -o uid=1000
    - username ID       : -o uid=john
  - gid     : This option sets the group ID of the owner of the files in the mounted filesystem. Same format as uid.
  - ro      : Read-only
  - rw 
  - noexec  : Do not allow execution of binaries on the mounted filesystem
  - nosuid  : Do not allow set-user-identifier or set-group-identifier bits to take effect
  - nodev   : Do not interpret character or block special devices on the filesystem.

### explanation

1. File System Types

- Different file systems have their own structure and way of organizing data on storage devices.
- Examples of file system types include ex4, NTFS, FAT, HFS+, and others.
- Each file system type has its own set of rules for storing and retrieving data.

2. Storage Devices

- Storage devices, such as hard disk drives (HDDs, SSDs), USB drives, or network shares, contain one more file systems.

3. Mount points

- A mount point is a directory within the existing file system hierarchy where the new file system or storage device will be attached.
- It serves as the entry point for accessing the mounted file system.

4. Access and Operation

- Once a file system is mounted, programs and users can access its files and directories through the mount point as if they were part of the main file system.
- All file operations (read, write, create, delete, etc) can be performed transparently on the mounted file system.


### sequence

1. The operating system provides system calls or library functions that allow programs to mount a file system or storage device.
2. These functions typically require parameters such as the type of file system being mounted, the device or path representing the file system, and the mount point directory where it should be attached
3. The operating system performs the necessary operations to integrate the file system into the existing directory structure at the specified mount point.

### usage

- Mounting external storage devices to make their contents accessible.
- Mounting different file system partitions or volumes during system startup or as needed.
- Mounting temporary file systems (e.g., tmpfs) for specific purposes, like creating a RAM disk.
- Mounting network file system (e.g., NFS, CIFS/SMB) to access remote file shares.
- Mounting loopback file systems, which allow treating a regular file as a file system.

