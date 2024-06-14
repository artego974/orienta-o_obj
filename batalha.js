"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerreiro_1 = require("./guerreiro");
var mostro_1 = require("./mostro");
var myguerreiro = new guerreiro_1.guerreiro("blau", "humano", 100, 100);
var mymonster = new mostro_1.monstro("henrique");
mymonster.status();
myguerreiro.atacar(mymonster);
mymonster.status();
