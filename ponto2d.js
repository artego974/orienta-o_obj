"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ponto2d = void 0;
var rl = require("readline-sync");
var ponto2d = /** @class */ (function () {
    function ponto2d() {
        this.x = 0;
        this.y = 0;
    }
    ponto2d.prototype.getPonto2d = function () {
        console.log("o seu x \u00E9 ".concat(this.x, " e seu y \u00E9 ").concat(this.y));
    };
    ponto2d.prototype.setPonto2d = function () {
        this.x = rl.questionInt("fale o valor do x");
        this.y = rl.questionInt("fale o valor do y");
    };
    ponto2d.prototype.mover = function () {
        this.x = rl.questionInt("fale o valor do x");
        this.y = rl.questionInt("fale o valor do y");
        return this.x, this.y;
    };
    ponto2d.prototype.equal = function () {
        if (this.x == this.y) {
            return true;
        }
        else {
            return false;
        }
    };
    ponto2d.prototype.toString = function () {
        return "x:".concat(this.x, " y:").concat(this.y);
    };
    ponto2d.prototype.distancia = function (outroPonto) {
        return Math.sqrt((outroPonto.x - this.x) * 2 + (outroPonto.y - this.y) * 2);
    };
    ponto2d.prototype.clone = function () {
        var ponto2dNovo = new ponto2d();
    };
    return ponto2d;
}());
exports.ponto2d = ponto2d;
var PontoD2comcoordenadas = /** @class */ (function (_super) {
    __extends(PontoD2comcoordenadas, _super);
    function PontoD2comcoordenadas(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    PontoD2comcoordenadas.prototype.getPontoD2comcoordenadas = function () {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")");
    };
    PontoD2comcoordenadas.prototype.setPontoD2comcoordenadas = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    PontoD2comcoordenadas.prototype.mover2 = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    return PontoD2comcoordenadas;
}(ponto2d));
var PontoD2comcoordenadas2 = /** @class */ (function (_super) {
    __extends(PontoD2comcoordenadas2, _super);
    function PontoD2comcoordenadas2(outroPonto) {
        var _this = _super.call(this) || this;
        _this.x = outroPonto.x;
        return _this;
    }
    PontoD2comcoordenadas2.prototype.getPontoD2comcoordenadas2 = function () {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")");
    };
    PontoD2comcoordenadas2.prototype.setPontoD2comcoordenadas2 = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    PontoD2comcoordenadas2.prototype.mover3 = function () {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    };
    return PontoD2comcoordenadas2;
}(ponto2d));
