import { Data } from "./calendario";
let rl = require("readline-sync")
let menu = true
let novaData = new Data(0,0,0)
let n = false
while (menu == true ){
    let men = Number(rl.question(`
    1)Criar a data
    2)Comparar datas
    3)Print do Dia / Mês / Ano
    4)Verificar se é bissexto
    5)Clonar Data
    `))
    switch (men) {
        case 1:
            
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