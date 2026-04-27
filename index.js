const { readTasks } = require('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('taskmaster CLI - usa: node index.js <comando>');
}