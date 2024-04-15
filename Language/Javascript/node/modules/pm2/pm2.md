# pm2

### about

- pm2 is a daemon process manager that will help you manage and keep your application online.

### characters

- Automatic process restarts and keeping alive
- Error logging
- Limit memory consumed by the app
- multi-app management, if there is more than Node.js application in the server.
- Application monitoring


### cmd

- npm install pm2@latest -g || yarn global add pm2
- pm2 start app.js || pm2 start bashscript.sh || pm2 python-app.py --watch || pm2 start binary-file -- --port 1520 : start cmd
- pm2 restart app
- pm2 reload app
- pm2 stop app
- pm2 delete app_name 
  - all & id can substitute app word
- pm2 [list|ls|l|status] [--sort [name|id|pid|memory|cpu|status|uptime]][:asc|desc]
- pm2 ecosystem : create a configuration file.
- pm2 monit
- pm2 show api: display metadata about app
- pm2 scale [app] [number of instances]: adjust instances number based on command number


### json file
  
\# example code

```
{
  "apps": [
    {
      "name": "myApp",
      "script": "app.js",
      "instances": "max",
      "exec_mode": "cluster",
      "watch": true,
      "out_file": "logs/out.log",
      "error_file": "logs/error.log",
      "env": {
        "NODE_ENV": "production",
        "PORT": 3000
      }
    }
  ]
}

```

- name            : Specifies the name of the application.
- script          : The entry point file of your Node.js application.
- instances       : Specifies the number of instances of the application to run. 'max' indicates that PM2 should run as many instances as there are CPU cores.
- exec_mode       : Defines how PM2 will manage the instances.
  - cluster Mode: PM2 uses Node.js's built-in cluster module to spawn multiple instances of your application. Each instance runs in its own Node.js process, and PM2 manages the communication bet
  - fork Mode   : 'fork' mode is used module with 'child-process' like "require('child_process').spawn('node', ['server.js']) load-balanced by HAProxy or Nginx
- watch           : If set 'true', PM2 will watch for changes in your application files and automatically restart the application when changes are detected.
- out_file        : This specify location of log file.
- error_file
- env             : This allows our to define environment variables for our application.