"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongodb_1 = require("mongodb");
var siemensCtrl_1 = require("./controller/siemensCtrl");
var routes_1 = require("./routes");
var app = express();
exports.app = app;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var url = 'mongodb://localhost:27017';
var dbName = 'native_db';
var db;
exports.db = db;
var SCtrl;
exports.SCtrl = SCtrl;
var connectionFinished = new Promise(function (resolve) {
    mongodb_1.MongoClient.connect(url, function (err, client) {
        if (err)
            throw err;
        exports.db = db = client.db(dbName);
        // Start the application after the database connection is ready
        console.log("Listening on port 3000");
        resolve();
    });
});
connectionFinished.then(function () {
    exports.SCtrl = SCtrl = new siemensCtrl_1.SiemensCtrl();
    routes_1["default"](app);
});
app.listen(3000);
