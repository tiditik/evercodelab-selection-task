const logger = require('./modules/logger');

// init
const tasks = new Map();

logger('Файл scheduler.js запущен');

function createTask(name, interval, task) {
    const intervalId = setInterval(() => {
        task();
    }, interval);

    tasks.set(name, intervalId);
}

function stopTask(name) {
    const intervalId = tasks.get(name);
    if (intervalId) {
        clearInterval(intervalId);
        tasks.delete(name);
        return true;
    }
    return false;
}

function stopAllTasks() {
    tasks.forEach((intervalId, name) => {
        clearInterval(intervalId);
    });
    tasks.clear();
}

module.exports = { createTask, stopTask, stopAllTasks };