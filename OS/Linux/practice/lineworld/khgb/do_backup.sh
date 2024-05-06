function do_backup {
dest_ip=$1
port=$2
account=$3
password=$4
dest_path=$5
alias=$6

echo "now : $now_date"
src_path=/storage/disk2/backup/$alias
working_path=$src_path/$week
echo "destination "$dest_ip" : "$port" ("$dest_path")"
echo "working directory : "$working_path

if [ ! -d "$src_path" ] ; then mkdir -p $src_path ; fi
if [ ! -d "$working_path" ] ; then mkdir -p $working_path ; fi

logfile=${backup_logs}/${now_date}_${alias}.log

echo "rsync -avz --delete --rsh='/usr/local/bin/sshpass -p ${password} ssh -p${port} -o StrictHostKeyChecking=no -l ${account}' ${dest_ip}:${dest_path} ${working_path} 2>&1 | tee ${logfile}"

rsync -avz --delete --rsh="/usr/local/bin/sshpass -p ${password} ssh -p${port} -o StrictHostKeyChecking=no -l ${account}" ${dest_ip}:${dest_path} ${working_path} 2>&1 | tee ${logfile}

}

#do_backup (1)$dest_ip (2)$port (3)$account (4)$password (5)$dest_path (6)$alias
###### SERVICE ##############
do_backup 203.253.134.227 9022 root tjsxor23 /data2/genbank SERVICE_GENBANK
do_backup 203.253.134.227 9022 root tjsxor23 /data2/exome SERVICE_EXOME
do_backup 203.253.134.227 9022 root tjsxor23 /data2/genbankAdmin SERVICE_GBKADM
do_backup 203.253.134.227 9022 root tjsxor23 /data2/REST3 SERVICE_REST
do_backup 203.253.134.227 9022 root tjsxor23 /data1/db_home SERVICE_DB
###### GRIS #################
do_backup 192.168.110.216 9022 root Thdbf098!@# /data/service/LAB GRIS_LAB
do_backup 192.168.110.216 9022 root Thdbf098!@# /data/service/GRIS GRIS
do_backup 192.168.110.216 9022 root Thdbf098!@# /data/service/ATENA GRIS_ATENA
###### BRAIN ################
do_backup 210.219.43.183 2022 uni uni8123 /jzhv/Seminar BRAIN_SEMINAR
do_backup 210.219.43.183 2022 uni uni8123 /jzhv/REST BRAIN_REST
#do_backup 210.219.43.183 2022 uni uni8123 /home BRAIN_HOME
#do_backup 210.219.43.183 2022 uni uni8123 /home2 BRAIN_HOME2
###### MENDEL ###############
#do_backup 192.168.150.77 3030 uni uni8123 /home MENDEL_HOME

