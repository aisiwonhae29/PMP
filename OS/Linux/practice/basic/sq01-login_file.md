# sql login_file

### file construct process

- makes login_file: mysql_config_editor set --login-path=test_pw --host=127.0.0.1 --user=root --port=3306 --password
- --login-path=test_pw : login path ex) mysql --login-path=test_pw
- print login path: mysql_config_editor print --logint-path=test_pw
- remove login path: mysql_config_editor remove --login-path=test_pw
- print all value: mysql_config_editor print --all
- do login: mysql --login-path=test_pw
- list: mysql_config_editor print --all