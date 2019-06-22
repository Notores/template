const logger = require('@notores/core/logger')(module);

logger.info('Starting app');

process.on('unhandledRejection', (reason, p) => {
    logger.error(`UnhandledRejection at: ${p}, for reason: ${reason}, ${reason.stack}`);
});

process.on('uncaughtException', (err) => {
    logger.error(`UncaughtException error: ${err}, ${err.stack}`);
});

process.on('warning', (warning) => {
    logger.warn(`Process Warning. Name: ${warning.name} | Message: ${warning.message} | Stack: ${warning.stack}`);
});

// eslint-disable-next-line no-console
console.table({...process.versions, ...{NODE_ENV: process.env.NODE_ENV}});

require('dotenv').config();
const server = require('@notores/core/server');
const database = require('@notores/core/database');
const ModuleHandler = require('@notores/core/ModuleHandler');

database.connect()
    .then(server.createServer)
    .then(ModuleHandler.loadModules)
    .then(() => console.table(ModuleHandler.getModulesList()))
    .then(() => server.startServer(3000));
