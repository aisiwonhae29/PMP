# compress & extract

### tar

- tar   : This is the command itself, used to manipulate archives (Tape ARchives).

\# compress

- cmd   : tar -[ c | z | v | f] /path/to/backup/abc.a /path/to/your/files

- options
  - c: Stands for "create," indicating that you want to create a new archive.
  - z: Specifies that you want to compress the archive using gzip.
  - v: Stands for "verbose," which displays the files being processed as they are archived.
  - f: Indicates that you want to specify a file name for the archive that follows.

\* usually named as [filename].tar.gz

---


\# extract

- cmd   : tar -[ x | v | z | f] backup_files.tar.gz

- option
  - x: This stands for "extract" and tells tar to extract files from an archive.
  - v: Stands for "verbose," which displays the files being extracted as they are processed.
  - z: Specifies that the archive is compressed with gzip.
  - f: Indicates that the following argument is the name of the archive file you want to extract.

### zip

\# compress

- cmd   : zip (opt) [zipfile.zip] [file] { [file], [dir], ...}

- options
  - r: Recursive. This makes copmress whole data in directory.
  - u: Add more files or directories to an existing zip archieve. 

\# extract

- cmd   : unzip [zipfile.zip]
  - d: If you wanna extract zip file into specifiy directory