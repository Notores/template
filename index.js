const cluster = require('cluster');
const logger = require('@notores/core/logger')(module);

if (cluster.isMaster) {
    let worker;
    let rebooting = false;

    // eslint-disable-next-line no-inner-declarations
    function createSlave() {
        worker = cluster.fork();
        logger.info('Worker created');
        worker.on('message', (msg) => {
            if (msg.cmd === 'reboot')
                rebooting = true;
        });

        worker.on('exit', () => {
            logger.warning('slave exited');
            if (rebooting) {
                logger.warning('Slave rebooting');
                rebooting = false;
                createSlave();
            }
        })
    }

    createSlave();
} else {
    logger.info('Worker starting app');
    require('./app');
}
