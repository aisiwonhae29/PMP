let fs = require('fs').promises;

async function get_package_info(json){
    let arr = '';
    for(let key in json){
        arr += `${key} \n`

    }
    try {
        await fs.writeFile('hi.txt', arr)
    }catch (error){
        console.error(error);
    }
}

data = {};
let csms = 'csms'; ghbk = 'ghbk'; gris = 'gris'
data[csms] = { "app-root-path": "^2.1.0", "async": "^2.6.1", "axios": "^0.19.0", "bcrypt-nodejs": "0.0.3", "body-parser": "^1.19.0", "buffer": "^5.4.3", "connect-busboy": "0.0.2", "cookie-parser": "~1.4.3", "cors": "^2.8.5", "cron": "^1.8.2", "dateformat": "^3.0.3", "debug": "~2.6.9", "ejs": "~2.5.7", "exceljs": "^4.3.0", "express": "^4.16.4", "express-ejs-layouts": "^2.5.0", "express-mysql-session": "^2.1.2", "express-session": "^1.15.6", "firebase-admin": "^11.5.0", "formidable": "^1.2.6", "fs-extra": "^10.1.0", "ftp-srv": "^4.6.2", "glob": "^7.1.3", "http-errors": "~1.6.2", "iconv-lite": "^0.6.3", "mime": "^3.0.0", "moment": "^2.29.1", "morgan": "~1.9.0", "mssql-session-store": "^1.0.0", "mysql2": "^2.2.5", "node-cron": "^2.0.3", "node-fetch": "^2.6.7", "node-ssh": "^12.0.4", "numeral": "^2.0.6", "request": "^2.88.0", "sync-task-queue": "^1.0.4", "urlencode": "^1.1.0", "window": "^4.2.6", "winston": "^3.8.2", "winston-daily-rotate-file": "^4.7.1", "ws": "^8.13.0", "xlsx": "^0.14.1" };
data[ghbk] = { "app-root-path": "^1.0.0", async: "^1.5.2", "body-parser": "~1.13.2", cheerio: "^0.19.0", "cookie-parser": "~1.3.5", cors: "^2.8.5", cron: "^1.1.0", crypto: "*", dateformat: "^1.0.12", debug: "^2.2.0", ejs: "~2.3.3", "error-agent": "0.0.11", "escape-html": "^1.0.3", express: "~4.13.1", "express-mysql-session": "^0.4.3", "express-paginate": "*", "express-session": "^1.17.3", glob: "^6.0.4", helmet: "^3.20.0", iamporter: "^1.4.2", "line-by-line": "^0.1.4", morgan: "~1.6.1", multer: "^1.1.0", mysql: "*", "node-rest-client": "^1.8.0", nodemailer: "~1.4.0", "nodemailer-smtp-transport": "~1.0.3", numeral: "^2.0.6", "python-shell": "^0.3.0", request: "^2.67.0", "sanitize-html": "^1.11.3", sys: "0.0.1", underscore: "^1.13.6", urlencode: "^1.1.0", };
data[gris] = { "app-root-path": "^2.1.0", "async": "^2.6.2", "body-parser": "^1.18.3", "chart.js": "^2.7.3", "chartist": "^0.11.0", "cheerio": "^1.0.0-rc.2", "chokidar": "^2.1.2", "connect-busboy": "0.0.2", "cookie-parser": "~1.4.3", "cron": "^1.6.0", "cron-job-manager": "^2.1.1", "dateformat": "^3.0.3", "debug": "~2.6.9", "ejs": "~2.5.7", "excel-export": "^0.5.1", "express": "~4.16.0", "express-mysql-session": "^2.1.0", "express-session": "^1.15.6", "formidable": "^1.2.1", "glob": "^7.1.3", "handlebars": "^4.7.7", "http-errors": "~1.6.2", "ipware": "^1.0.0", "minimist": "^1.2.0", "morgan": "~1.9.0", "multer": "^1.4.1", "mysql": "^2.16.0", "node-rest-client": "^3.1.0", "node-schedule": "^1.3.3", "nodemailer": "^5.1.1", "nodemailer-smtp-transport": "^2.7.4", "numeral": "^2.0.6", "request": "^2.88.0", "sanitize-html": "^1.20.0", "sequelize": "^4.42.1", "socket.io": "^2.2.0", "stringbuilder": "0.0.11", "tinymce": "^5.0.1", "tinymce-mediauploader": "^0.2.0", "underscore": "^1.9.1", "urlencode": "^1.1.0", "validator": "^10.11.0" }

get_package_info(data[csms]);
