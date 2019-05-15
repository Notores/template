require('./dotenv');
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

(async function () {
    const CONSTANTS = require("./constants/constants");

    const server = require('@notores/core/server');
    const database = require('@notores/core/database');

    await database.connect();

    server.createServer();

    require('./Server')();

    const ModuleHandler = require('@notores/core/ModuleHandler');
    ModuleHandler.loadModules();

    console.log('Modules');
    console.table(ModuleHandler.getModulesList());

    // TODO: Do something with the moduleloader

    const {main} = server.getServers();

    main.set(CONSTANTS.ROOT_DIR, __dirname);

    main.set('view engine', 'ejs');
    main.set('views', './public/themes');

    server.startServer();
})();

