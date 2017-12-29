'use strict';
const dateFormat = require('dateformat');
const logfile = require('./../config/Logfile');
const winston = require('winston');
winston.emitErrs = true;
// logger configaration  for file and console in normal mode
const logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: logfile.logLevel,
            timestamp: function () {
                return dateFormat(new Date(), "yyyy-mmm-dd HH:MM:ss");
            },
            formatter: function (options) {
                return options.timestamp() + ', ' + options.level.toUpperCase() + ', ' + (options.message ? options.message : '');
            },
            filename: logfile.filePath + 'ihire-logs.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880,
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: logfile.logLevel,
            timestamp: function () {
                return dateFormat(new Date(), "yyyy-mmm-dd HH:MM:ss");
            },
            formatter: function (options) {
                return options.timestamp() + ', ' + options.level.toUpperCase() + ', ' + (options.message ? options.message : '');
            },
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    // logger configaration  for file and console in exception mode
    exceptionHandlers: [
        new (winston.transports.Console)({
            json: false,
            timestamp: function () {
                return dateFormat(new Date(), "yyyy-mmm-dd HH:MM:ss");
            }
        }),
        new winston.transports.File({
            filename: logfile.filePath + '//ihire-exception.log',
            json: false,
            timestamp: function () {
                return dateFormat(new Date(), "yyyy-mmm-dd HH:MM:ss");
            },
        })
    ],
    exitOnError: false
});

module.exports = logger;
