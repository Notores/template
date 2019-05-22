const express = require('express');
const logger = require('@notores/core/logger')(module);
const {middlewareForRouter} = require('@notores/core');

module.exports = () => {
    logger.info('applying middlewares');
    middlewareForRouter(
        express.static('./public/bower'),
        '/components',
    );
    middlewareForRouter(
        express.static('./public/themes'),
        '/themes',
    );
    middlewareForRouter(
        express.static('./public/uploads'),
        '/uploads',
    );
};

