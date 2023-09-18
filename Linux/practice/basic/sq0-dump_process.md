# mysql dump process

### prerequisite

1. install mysql
2. install mysql-devel - command : sudo yum install mysql-devel mysql

### flow 

1. make sql dumpfile <br>
mysqldump -u username -p password database_name > backup.sql

2. makes file compress(optional)<br>
tar czvf /path/to/backupfiles.tar.gz /path/to/files

3. move backups to a safe location<br>
mv backup.sql /path/to/backup/
mv backupfiles.tar.gz /path/to/backup/

4. extract backup files<br>
tar xzvf backupfiles.tar.gz -C /path/to/restore/location

5. test backupfiles 
mysql -u username -p database_name < backup.sql

