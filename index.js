const scheduler = require('./scheduler');
const logger = require('./modules/logger');

scheduler.createTask('task1', 10 * 1000, () => {
    logger('running')
});