# IO

## grep

### about

\# default frame: find [directory] [options] [expression]

### options

- -maxdepth             : configure maxdepth
- -type                 : configure file type
- -exec command {} \;   : execute a specified command on each file found by the 'find' operation.
    ex) find /path -type f -exec echo {} \;
  - '{}': Represents the placeholder for the filename or path of each file found by 'find'. can handle like ' value= "{}"'

## awk

### about

- Extract and calculate the relevant fields.

### cmd

- [$cmd] (-opt) | ([$cmd] (-opt) | ) | awk ['{$expression}']