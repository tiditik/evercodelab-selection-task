const config = require('./config');

const logger = (message) => {
    console.log(`[${config.appName}] ${message}`)
};

modules.exports = logger;