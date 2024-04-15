# Linux String control

### about

- cut -d '.' -f 1,3 file.csv    : extracts the first and third fields from the CSV file 'file.csv'
- cut -c 1-5 file.txt           : extracts the first five characters from each line of the text file 'file.txt'
- echo "apple computer" | cut -d ' ' -f 2   : extracts the second field (orange) from the input line, wher e fields are seperated by spaces.
- echo "super computer" | cut -c 1-10       : extracts 1~10 characters from provided.m