# * Server side

# make .env file

DB_USER=root
DB_PASSWORD=Thdbf098!@#
DB_NAME=genbank2016

# make sql backup logic 

source /data2/genbank_sql/.env
mysqldump -u $DB_USER -p$DB_PASSWORD $DB_NAME > /data2/genbank_sql/backup_file/$(date +%Y-%m-%d)_sqlbk.sql
eval $(ssh-agent -s)
ssh-add /root/.ssh/id_rsa
sftp -oPort=9022 root@192.168.73.129 << EOF

file_head=$(date +%Y-%m-%d)
put /data2/genbank_sql/backup_file/"$file_head"_sqlbk.sql /root/khgb_sql_backup/30_files

exit
EOF



# make sftp connection with publick key logic



# * Client side

# make test data

directory=/root/khgb_sql_backup/30_files
for i in {01..28}
do
touch $directory/2023-01-"$i"_sqlbk.sql.tar.gz
touch $directory/2023-02-"$i"_sqlbk.sql.tar.gz
touch $directory/2023-03-"$i"_sqlbk.sql.tar.gz
touch $directory/2023-04-"$i"_sqlbk.sql.tar.gz
touch $directory/2023-05-"$i"_sqlbk.sql.tar.gz
touch $directory/2023-06-"$i"_sqlbk.sql.tar.gz
touch $directory/2024-01-"$i"_sqlbk.sql.tar.gz
# touch 2024-02-"$i"_sqlbk.txt
# touch 2024-03-"$i"_sqlbk.txt
done

# sh.file: 30days maintaining back-up data 

directory=/root/khgb_sql_backup/30_files   # set sql repository data 
pmt_date_sec=$((60*60*24*30))
now_date_sec=$(date +%s)
maintain_date=30
if [ $(ls $directory | wc -l) -gt $maintain_date ]; 

then 

for file in $(find $directory -type f -exec basename {} \;)
do
file_date=$(echo $file | cut -c 1-10)
file_date_sec=$(date -d $(date +$file_date) +%s)
if [ $file_date_sec -lt $(($now_date_sec - $pmt_date_sec)) ]
then
echo ' === alert!! : '$file_date'_sqlbk.sql is deleted === '
rm -f "$directory/$file_date"_sqlbk.sql
fi

done

fi && ls


# crontab 

0 20 * * * /khgb_daily_backup.sh    # homepage server
0 0 * * * /khgb_30days_maintain.sh  # backup server