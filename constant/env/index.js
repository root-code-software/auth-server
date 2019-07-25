'use strict';
const dotenv = require('dotenv').config({path: `./constant/env/.env.${process.env.NODE_ENV || 'local'}`});
const _ = require('lodash');
const logger = require('../lib/logger');

if (dotenv.error) {
  throw dotenv.error;
}
const env = process.env.NODE_ENV || 'local';
const envConfig = require('./' + env);
let defaultConfig = {
  env,
  dotenv
};
  
logger.info(`NODE_ENV used ${env}`);

module.exports = _.merge(defaultConfig, envConfig);