# for loop

### about

\# default frame: find [directory] [options] [expression]

### Usecase


```

* basic 

for item in list
do
    echo "processing file: $item"
done


* directory based

directory="/root

for file in $(find "$() -type f);
do
    echo "processing file: $item"
done

```

### options

- -maxdepth     : configure maxdepth
- -type         : configure file type
- -inum 