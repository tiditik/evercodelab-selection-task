const logger = require('./modules/logger');

// init
const tasks = new Map();

logger('Файл scheduler.js запущен');

function createTask(name, interval, task) {
    const intervalId = setInterval(() => {
        logger(`Выполняется задача ${name}`);
        task();
    }, interval);

    tasks.set(name, intervalId);
    logger(`Задача ${name} создана с интервалом ${interval}`);
}

function stopTask(name) {
    const intervalId = tasks.get(name);
    if (intervalId) {
        clearInterval(intervalId);
        tasks.delete(name);
        logger(`Задача ${name} остановлена`);
        return true;
    }
    logger(`Задача ${name} не найдена`);
    return false;
}

function stopAllTasks() {
    tasks.forEach((intervalId, name) => {
        clearInterval(intervalId);
        logger(`Задача ${name} остановлена`);
    });
    tasks.clear();
    logger('Все задачи были остановлены');
}

module.exports = { createTask, stopTask, stopAllTasks };