const fs = require('fs');
const PATH = './data/task.json';

function readTasks() {
    return JSON.parse(fs.readFileSync(PATH, 'utf-8'));
}

function writeTasks(tasks) {
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}

module.exports = {
    readTasks,
    writeTasks
};