"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calendario_1 = require("./calendario");
var rl = require("readline-sync");
var menu = true;
var novaData = new calendario_1.Data(0, 0, 0);
while (menu == true) {
    var men = Number(rl.question("\n    1)Criar a data\n    2)Comparar datas\n    3)Print do Dia / M\u00EAs / Ano\n    4)Verificar se \u00E9 bissexto\n    5)Clonar Data\n    "));
    switch (men) {
        case 1:
            calendario_1.Data.setData();
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
}
