const {NotoresModule, getModule, middlewareForRouter} = require('@notores/core');
const logger = require('@notores/core/logger')(module);

class StaticServeModulesModule extends NotoresModule {
    init() {
        super.init();

        this.addMiddleware();
    }

    addMiddleware() {
        const ThemeModule = getModule('@notores/theme');
        if (!ThemeModule.installed)
            return logger.error('Error in StaticServeModulesModule: Module ThemeModule is not installed');

        const express = require('express');

        middlewareForRouter(
            express.static('./node_modules'),
        );
    }
}

module.exports = new StaticServeModulesModule();