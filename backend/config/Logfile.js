'use strict';
let env = process.env.NODE_ENV;

const development = {
    logLevel: 'info',
    filePath: 'D:\\ihire-logs\\'
};
const qaenv = {
    logLevel: 'info',
    filePath: '/home/ec2-user/.pm2/logs/'
};

const config = { development, qaenv };
module.exports = development;