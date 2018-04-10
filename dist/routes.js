"use strict";
exports.__esModule = true;
var express = require("express");
var app_1 = require("./app");
function setRoutes(app) {
    var router = express.Router();
    router.route('/some').get(app_1.SCtrl.getAll);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports["default"] = setRoutes;
