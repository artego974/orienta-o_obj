"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contador_1 = require("./contador");
var rl = require("readline-sync");
var newcontador = new contador_1.contador(0);
var is = true;
while (is == true) {
    var escolha = rl.questionInt("---MENU---\n 1)zerar \n 2)incrementar \n 3)valor \n 0)para parar\n");
    switch (escolha) {
        case 1:
            newcontador.zerar();
            break;
        case 2:
            newcontador.incrementar();
            break;
        case 3:
            newcontador.valor();
            break;
        case 0:
            is = false;
            break;
        default:
            break;
    }
}
