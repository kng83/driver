"use strict";
exports.__esModule = true;
var express = require("express");
var app_1 = require("./app");
function setRoutes(app) {
    var router = express.Router();
    router.route('/getAll').get(app_1.SCtrl.getAll);
    router.route('/insert').get(app_1.SCtrl.insert.bind(app_1.SCtrl));
    router.route('/insertOne').get(app_1.SCtrl.insertOne);
    router.route('/findOne').get(app_1.SCtrl.findOne);
    router.route('/findMany').get(app_1.SCtrl.findMany);
    router.route('/test').post(app_1.SCtrl.test);
    router.route('/kot/:slow').get(function (req, res) {
        console.log(req.params.slow); //1 ,2 ,3
        res.send('ok');
    });
    router.route('/pies').get(function (req, res) {
        res.send('kkk');
    });
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports["default"] = setRoutes;
