'use strict';
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const validator = require('express-validator');
const helmet = require('helmet');
const morgan = require('morgan');
const responseTime = require('response-time');
const logger = require('../lib/logger');

const corsOptions = require('./corsOptions');
const morganOptions = require('./morganOptions')

const isProduction = process.env.NODE_ENV === 'production';
// const allowedOrigins = process.env.APP_URLS.split(',');

module.exports = (app) => {

    // set all the server things
    app.disable('x-powered-by');
    app.use(responseTime());
    app.use(helmet());
    app.use(cors(corsOptions));

    // Used to extract info and pass it to wiston
    app.use(morgan(morganOptions.format,morganOptions.options));
    app.use(compression());
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
    app.use(validator());
    app.use(cookieParser());
    app.use((req, res, next) => {
        if (isProduction && !(req.secure || req.headers['x-forwarded-proto'] === 'https')) {
            res.redirect(`https://${req.hostname}:${process.env.PORT_HTTPS}${req.url}`);
        } else {
            next();
        }
    });

    if (!isProduction) {
        app.use(errorHandler({log: errorNotification}));
    }

    function errorNotification(err, str, req) {
        const title = `Error in ${req.method} ${req.url}`;
        logger.error(title, str);
    }
};
