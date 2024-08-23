import { ponto2d } from "./ponto2d";
let rl = require('readline-sync')
let pontoteste = new ponto2d()
let menu: boolean = true

while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - get
        2 - set x e y
        3 - movimentação  
        4 - equals
        5 - toString
        6 - distancia
        7 - clone     `
    );

    let option = rl.questionInt('Escolha:')

    switch (option) {
        case 1:
            console.log(pontoteste.getPonto2d())
            break
        case 2:
            pontoteste.setPonto2d()
            break
        case 3:
            pontoteste.mover()
            break
        case 4:
            pontoteste.equal()
            break
        case 5:
            console.log(pontoteste.toString())
            break
        case 6:
            console.log(pontoteste.distancia(pontoteste))
            break
        
        case 7:
            console.log(pontoteste.clone())
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opcao invalida');
            break
    }


}