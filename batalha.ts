import { guerreiro } from "./guerreiro";
import { monstro } from "./mostro";

const myguerreiro : guerreiro = new guerreiro("blau","humano",100,100)
const mymonster: monstro = new monstro("henrique")



mymonster.status()

myguerreiro.atacar(mymonster)

mymonster.status()    