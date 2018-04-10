"use strict";
exports.__esModule = true;
var app_1 = require("../app");
function routeHandler() {
    app_1.app.get("/insert", function (req, res) {
        app_1.db.collection("nat_driver")
            .insertOne({ 'a': Math.random() * 100 }, function (err, doc) {
            console.log('here', err, doc);
            res.send(doc);
        });
    });
    // Reuse database object in request handlers
    app_1.app.get("/takeAll", function (req, res) {
        var ansArr = [];
        app_1.db.collection('nat_driver').find({})
            .forEach(function (docs) {
            console.log(docs);
            ansArr.push(docs);
        }, function () {
            res.send(ansArr);
        });
    });
}
exports.routeHandler = routeHandler;
