# sql secure

- .env: this file control compose, root pw with variables.

ex)

- side at docker-compose 
  
~  
MYSQL_ROOT_PASSWOR=${DB_PW}
~

- side at .env
  
DB_PW = mypw