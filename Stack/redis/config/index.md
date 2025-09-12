# index

### config file

- path: /etc/redis/redis.conf

### Permission to outter network

1. change [bind 127.0.0.1 ::1] > [bind 0.0.0.0]
2. change [protected-mode yes] > [protected-mode no]
3. sudo systemctl restart redis