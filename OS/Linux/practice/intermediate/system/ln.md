# ln: link

### about

- 'ln' cmd in linux is used to create links between files.

###  cmd

ln [options] <target> <link_name>

- target    : The file or directory that the link will point to
- link_name : The name of the link to be crated
- options
  - -s      : Create a symbolic link
  - -f      : Force to creation of the link, even if the 'link_name' already exists
  - -i      : prompt before overwriting an existing file
### types

\# Hard links

- This create additional directory entries pointing to the same inode as the original file.
- Hard links essentially share the same data on disk.

\# Symbolic links 

- Symbolic links (symlinks) are special files that point to another file or directory by name.
- They act as shortcuts or references to the target file or directory.
- Symbolic links can span different filesystem and can point to non-existent or remote locations.