import { contador } from "./contador";
let rl = require("readline-sync")

let newcontador = new contador(0)

let is = true
while(is == true){
    let escolha = rl.questionInt("---MENU---\n 1)zerar \n 2)incrementar \n 3)valor \n 0)para parar\n")
    switch (escolha) {
        case 1:
            newcontador.zerar()
            break;
        case 2:
            newcontador.incrementar()
            break;
        case 3:
            newcontador.valor()
            break;
        
        case 0:
            is = false
            break;
        default:
            break;
    }

}