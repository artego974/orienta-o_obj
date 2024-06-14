"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monstro = void 0;
var monstro = /** @class */ (function () {
    function monstro(nome) {
        this.nome = "bundão";
        this.forca = 50;
        this.saude = 10;
    }
    monstro.prototype.atacar = function (heroi) {
        heroi.saude -= this.forca;
        console.log("O monstro " + this.nome + " atacou com força ");
        console.log(this.forca - heroi.saude);
    };
    monstro.prototype.defender = function (heroi) {
        this.saude -= heroi.ataque;
        console.log("O monstro " + this.nome + " defendeu e sofreu dano");
        console.log(this.saude - heroi.ataque);
    };
    monstro.prototype.status = function () {
        console.log("O monstro " + this.nome + " tem " + this.saude +
            " de saúde e " + this.forca + " de força");
    };
    return monstro;
}());
exports.monstro = monstro;
