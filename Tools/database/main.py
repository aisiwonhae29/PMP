import mysql.connector
import sys
import json
import sql.mysql_func as mysql_func
import util.file as file_util

# Parse Arguments ───────────────────────────────────────────────────────────────────────────
# python main.py [job] [location] [table_name] [data_file]

print(file_util.test())

config_file = ""

if len(sys.argv) < 3:
    print("Error: Not enough arguments provided.")
    sys.exit(1)
elif len(sys.argv) == 4:
    location = "local"
    job = sys.argv[1]
    table_name = sys.argv[2]
    data_file = sys.argv[3]
else:
    job = sys.argv[1]
    location=sys.argv[2]
    table_name=sys.argv[3]
    data_file=sys.argv[4]

# do function ───────────────────────────────────────────────────────────────────────────

mysql_func.main(job, location, table_name, data_file)
