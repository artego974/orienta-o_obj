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
var animal = /** @class */ (function () {
    function animal(nome) {
        this.nome = nome;
    }
    animal.prototype.barulin = function () {
    };
    return animal;
}());
var catolo = /** @class */ (function (_super) {
    __extends(catolo, _super);
    function catolo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    catolo.prototype.barulin = function () {
        console.log("".concat(this.nome, "faz: auuuuuuuuuu auuuuuuuuuuuu "));
    };
    return catolo;
}(animal));
var newcatolo = new catolo("argos");
newcatolo.barulin();
