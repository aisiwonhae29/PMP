/**
 * * winston: The logger module
 * 
 *  ! info
 * 
 * - Winston is the most popular logging library for Node.js
 * - This aims to make logging more flexible and extensible by decoupling different aspects(e.g., log levels, formatting, and storage) to each API independent and combinations are supported
 * - Also use stream to minimize the performance impact of implementing logging in your application.
 * 
 *  ! outline
 * 
 *  - 1. logger object gerate
 *      - simple logger obejct make
 *      - handle output format
 *      - configurate transport location
 * 
 *  - 2. logger usesage
 */

const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json, colorize, align, printf } = winston.format;

// Log levels in Winston

let Log_level   = 
{
    error   :   0,
    warn    :   1,
    info    :   2,
    http    :   3,
    verbose :   4,
    debug   :   5,
    silly   :   6,
}

// # Custom logger object generate

let logger = '';
function win_a01_01(){
    logger = winston.createLogger({
        level: 'info',                                      // Limit level of the transmmit messages.
        format: winston.format.json(),
        transports: [new winston.transports.Console()],
    });
}

function win_a01_02(){
    const logger = winston.createLogger({
        level: process.env.LOG_LEVEL || 'info',             // This style makes log level change more convenient.
        format: winston.format.json(),
        transport: [new winston.transports.Console()],
    })
}

/** 
 * # add timestamp, colorize, align, printf, combine
 * 
 * - Combine        : merges multiple formats into one
 * - Colorize       : assigns colors to the different log levels
 * - Timestamp      : outputs a datetime value
 * - align          : align the method
 * - printf         : defines a custom structure for the message.
 * 
 */

function win_a01_03() {
	let style = {
		level: process.env.LOG_LEVEL || "info",
		transports: [new winston.transports.Console()],
	};

	let opt_01 = combine(timestamp(), json());

	let opt_02 = combine(
		colorize({ all: true }),
		timestamp({
			format: "YYYY-MM-DD hh:mm:ss.SSS A",
		}),
		align(),
		printf((info) => `[${info.timestamp}] ${info.level} : ${info.message}`)
	);

	(() => {
		style.format = opt_01;
	})();

	logger = winston.createLogger(style);
}

/**
 * # configuring transports in Winston 
 * 
 * ! Transport target location
 * 
 * - 1. Console 
 * - 2. File     
 * - 3. HTTP    : stream logs to an HTTP endpoint 
 * - 4. Stream  : output logs to any Node.js stream 
 * 
 * ! directly store data on db exists 
 * 
 * - mongodb, syslog, telegram, logtail, mysql made by winston community
 */

function win_a01_04() {

    // save data into specified file. automatically generate file.
    let trs_01 = [
        new winston.transports.File({
            filename: './testfile/01/combined.log',
        }),
        new winston.transports.File({
            filename: './testfile/01/error.log',
            level: 'error',
        })
    ]

    // output data with cmd line.
    let trs_02 = [ new winston.transports.Console() ]

    // save data with specified level of log data.

    const errorFilter   = winston.format((info, opts) => {
        return info.level === 'error' ? info : false;
    });

    const infoFilter    = winston.format((info, opts) => {
        return info.level === 'info' ? info : false;
    });

    let trs_03 = [
        new winston.transports.File({
            filename: './testfile/03/combined.log',
        }),
        new winston.transports.File({
            filename: './testfile/03/app-error.log',
            level: 'error',
            format: combine(errorFilter(), timestamp(), json()),
        }),
        new winston.transports.File({
            filename: './testfile/03/app-info.log',
            level: 'info',
            format: combine(infoFilter(), timestamp(), json()),
        }),
    ]
    
    let style = {
        level: process.env.LOG_LeveL || 'info',
        format: combine(timestamp(), json()),
        transports: ''
    }

    style.transports = trs_03;
    logger = winston.createLogger(style)

    logger.info ('info message');
    logger.error('Error message');
    logger.warn ('Warning message');
};

/**
 * # adding metadata to our logs
 * 
 * - put additional info into logs.
 * - use child method to assign requestId
 * 
 * */ 

function win_a01_05(){
    let def_01 = {
        service: 'admin-service'
    }

    style = {
        level: process.env.LOG_LEVEL || 'info',
        format: winston.format.json(),
        transports: [new winston.transports.Console()],
    }
    style.defaultMeta = def_01;

    logger = winston.createLogger(style);

    logger.info ('Info message');
    logger.error('Error message');

    

    const childLogger = logger.child({ requestId: 'f9ed4675f1c53513c61a3b3b4e25b4c0' });

    childLogger.info('Info message');
    childLogger.info('Error message')
}
win_a01_05()

// # basic logger usage

function win_a02(){

    logger.info ('info message');
    logger.error('Error message');
    logger.warn ('Warning message');
    logger.http ('hi')

    logger.log  ('error', 'error message');
    logger.log  ('info',  'info message')
    winston.info(' this is winston module call');           // This form invoke much memory usage.
};


/**
 * # Log rotation in Winston: to handle size from prevent become extremly large log file
 * 
 * - datePattern    : This controls how often the file should be rotated
 * - maxFiles       : This ensures that log files that are older than 14 days are automatically deleted ex) '14d' 
 * 
 */
function win_a03(){
    const fileRotateTransport = new winston.transports.DailyRotateFile({
        filename: `combined-$DATE%.log`,
        dataPattern: 'YYYY-MM-DD',
        maxFiles: '14d',
    });

    logger = winston.createLogger({
        level: process.env.LOG_LEVEL || 'info',
        format: combine(timestamp(), json()),
        transports: [fileRotateTransport],
    })
    // - fired when a log file is created
    fileRotateTransport.on('new', (filename) => {});
    // - fired when a log file is rotated
    fileRotateTransport.on('rotate', (oldFilename, newFilename ) => {});
    // - fired when a log file is archived
    fileRotateTransport.on('archieve', (zipFilename) => {});
    // - fired when a log file is deleted
    fileRotateTransport.on('logRemoved', (removedFilename) => {});
};

// # Logging in an Express application using Winston and Morgan

