"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("./base");
var app_1 = require("../app");
var SiemensCtrl = /** @class */ (function (_super) {
    __extends(SiemensCtrl, _super);
    function SiemensCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collection = app_1.db.collection('nat_driver');
        return _this;
    }
    return SiemensCtrl;
}(base_1.Base));
exports.SiemensCtrl = SiemensCtrl;
