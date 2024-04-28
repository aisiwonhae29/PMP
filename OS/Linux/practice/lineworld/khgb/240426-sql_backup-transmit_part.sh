# make sql backup logic 

pwd=/data2/genbank_sql/backup_file/

source /data2/genbank_sql/.env
docker exec khgb_mysql_830 mysqldump -u $DB_USER -p$DB_PASSWORD --databases $DB_NAME_1 $DB_NAME_2 > "$pwd"/$(date +%Y-%m-%d)_sqlbk.sql
tar -czvf "$pwd"/$(date +%Y-%m-%d)_sqlbk.sql.tar.gz "$pwd"/$(date +%Y-%m-%d)_sqlbk.sql
eval $(ssh-agent -s)
ssh-add /root/.ssh/id_rsa
sftp -oPort=9022 root@192.168.73.129 << EOF

put /data2/genbank_sql/backup_file/"$(date +%Y-%m-%d)"_sqlbk.sql.tar.gz /root/khgb_sql_backup/30_files

exit
EOF
rm "$pwd"/$(date +%Y-%m-%d)_sqlbk.sql
rm "$pwd"/$(date +%Y-%m-%d)_sqlbk.sql.tar.gz