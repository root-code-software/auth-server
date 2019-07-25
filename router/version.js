const express = require('express');
let versionRouter = express.Router();
const v0Controller = require('./v0');

versionRouter.use('/v0', v0Controller)

module.exports = versionRouter;