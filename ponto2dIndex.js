"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ponto2d_1 = require("./ponto2d");
var rl = require('readline-sync');
var pontoteste = new ponto2d_1.ponto2d();
var menu = true;
while (menu) {
    console.log("\n        0 - Finalizar\n        1 - get\n        2 - set x e y\n        3 - movimenta\u00E7\u00E3o  \n        4 - equals\n        5 - toString\n        6 - distancia\n        7 - clone     ");
    var option = rl.questionInt('Escolha:');
    switch (option) {
        case 1:
            console.log(pontoteste.getPonto2d());
            break;
        case 2:
            pontoteste.setPonto2d();
            break;
        case 3:
            pontoteste.mover();
            break;
        case 4:
            pontoteste.equal();
            break;
        case 5:
            console.log(pontoteste.toString());
            break;
        case 6:
            console.log(pontoteste.distancia(pontoteste));
            break;
        case 7:
            console.log(pontoteste.clone());
            break;
        case 0:
            process.exit(0);
        default:
            console.log('Opcao invalida');
            break;
    }
}
