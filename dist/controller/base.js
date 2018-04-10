"use strict";
exports.__esModule = true;
var Base = /** @class */ (function () {
    function Base() {
        var _this = this;
        this.getAll = function (req, res) {
            var ansArr = [];
            _this.collection.find({}).forEach(function (docs) {
                console.log(docs);
                ansArr.push(docs);
            }, function () { return res.send(ansArr); });
        };
        this.insert = function (req, res) {
            _this.collection
                .insertOne({ 'a': Math.random() * 100 }, function (err, doc) {
                console.log('here', err, doc);
                res.send(doc);
            });
        };
    }
    return Base;
}());
exports.Base = Base;
