# for loop

### about



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


* numerical based for loop

for (( i = 1; i <= 30; i++>)); 
do 
    touch "{i}.txt" 
    echo ${i}.txt is Created" 
done


* in {} based loop

for day in {1...29}
do
    touch "$day.txt"
done

```




