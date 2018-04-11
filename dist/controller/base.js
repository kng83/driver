"use strict";
/*Funkcje tutaj musza wystapic jak wlasciwosci poniewaz po utworzeniu egzemplarza klasy
* trafiaja do konstruktora. Dzieki temu przekazywanie funkcji jako referencji np someFunck(base.getAll) bedzie
* prawidlowo wiazalo this. Inaczej trzeba uzyc bind*/
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
        this.insertOne = function (req, res) {
            _this.collection.insertOne(req.query, function (err, doc) {
                // doc.ops to  potwierdzenie z ID i wartoscia
                console.log(doc.ops);
                console.log(doc.ops[0]._id);
                res.send(doc);
            });
        };
        this.findOne = function (req, res) {
            _this.collection.findOne({ name: 'pawel' }, function (err, doc) {
                console.log(doc);
                res.send(doc._id);
            });
        };
        this.findMany = function (req, res) {
            var arr = [];
            _this.collection.find({ name: req.query.name }).forEach(function (doc) {
                arr.push(doc);
            }, function () {
                res.send(arr);
            });
        };
        this.test = function (req, res) {
            console.log(req.body);
            res.send(req.body);
        };
    }
    Base.prototype.insert = function (req, res) {
        this.collection.insertOne({ 'a': Math.random() * 100 }, function (err, doc) {
            res.send(doc);
        });
    };
    ;
    return Base;
}());
exports.Base = Base;
