const express = require('express');
const sessions = require('client-sessions');
const crypto = require('crypto');
const passport = require('passport');
const {middlewareForRouter} = require('@notores/core');

module.exports = () => {
    console.log('applying middlewares')
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

    middlewareForRouter(sessions({
        cookieName: 'notores', // cookie name dictates the key name added to the request object
        requestKey: 'session', // changes the session key from req.cookieName to this (req.session)
        secret: process.env.COOKIE_SECRET, // should be a large unguessable string
        duration: 20 * 7 * 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
        activeDuration: 20 * 7 * 24 * 60 * 60 * 1000, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
        cookie: {
            httpOnly: true, // when true, cookie is not accessible from javascript
        }
    }));

    middlewareForRouter((req, res, next) => {
        if (!req.session.id) {
            const buf = crypto.randomBytes(16);
            req.notores.id = buf.toString('hex');
            // console.log(req.wsSession);
        }
        next();
    });

    middlewareForRouter(passport.initialize());
    middlewareForRouter(passport.session());
};

