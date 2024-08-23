"use strict";
// 1. Contador
Object.defineProperty(exports, "__esModule", { value: true });
exports.contador = void 0;
// Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:
// a) `zerar()`: Reseta o valor do contador para zero.
// b) `incrementar()`: Incrementa o valor do contador em uma unidade.
// c) `valor(): number`: Um método que retorna o valor atual do contador.
var contador = /** @class */ (function () {
    function contador(i) {
        this.i = i;
    }
    contador.prototype.zerar = function () {
        this.i = 0;
        console.log("contador esta em ".concat(this.i));
    };
    contador.prototype.incrementar = function () {
        this.i += 1;
    };
    contador.prototype.valor = function () {
        console.log("o contador está em " + this.i);
    };
    return contador;
}());
exports.contador = contador;
var newcontador = new contador(0);
