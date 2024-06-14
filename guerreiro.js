"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guerreiro = void 0;
var guerreiro = /** @class */ (function () {
    function guerreiro(nome, tipo, ataque, saude) {
        this.nome = nome;
        this.tipo = tipo;
        this.ataque = 50;
        this.saude = 100;
    }
    guerreiro.prototype.atacar = function (inimigo) {
        inimigo.saude -= this.ataque;
        console.log("".concat(this.nome, " atacou com ").concat(this.ataque, "!"));
        console.log(this.ataque - inimigo.saude);
    };
    guerreiro.prototype.defender = function (inimigo) {
        this.saude -= inimigo.forca;
        console.log("".concat(this.nome, " defendeu com ").concat(this.saude, "!"));
        console.log(this.saude - inimigo.forca);
    };
    guerreiro.prototype.status = function () {
        console.log("nome: ".concat(this.nome, ", tipo: ").concat(this.tipo, ", ataque: ").concat(this.ataque, ", saude: ").concat(this.saude));
    };
    return guerreiro;
}());
exports.guerreiro = guerreiro;
