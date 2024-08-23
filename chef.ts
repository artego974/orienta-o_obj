let rll = require("readline-sync")
class cz {
    nome: string
    idade:number
    ano_xp:number
    constructor(nome:string, idade:number,ano_xp:number) {
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
        
    }
    getcz():void{
        console.log("sou o ", this.nome," tenho ",this.idade," e tenho ",this.ano_xp," de experiencia")
    }
    setcz():void{
        let nomeN = rll.question("novo nome")
        let idadeN = parseInt(rll.question("nova idade"))
        let ano_xpN = parseInt(rll.question("novo ano de experiencia"))
        this.nome = nomeN
        this.idade = idadeN
        this.ano_xp = ano_xpN
    }
}


class res{
    cozin:cz
    nome:string
    endereco:string
    num_end:number
    constructor(cozin:cz,nome:string,endereco:string,num_end:number){
        this.cozin = cozin
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end


    }
    getres():void{
    console.log("sou o restaurante ",this.nome," localizado em ",this.endereco,"numero ",this.num_end," e tenho o cozinheiro ",this.cozin.nome)
    }
    setres():void{
        this.cozin.setcz()
        let nomeN = rll.question("novo nome do restaurante")
        let enderecoN = rll.question("novo endereco do restaurante")
        let num_endN = (rll.questionInt("novo numero do endereco do restaurante"))
        this.nome = nomeN
        this.endereco = enderecoN
        this.num_end = num_endN
        this.cozin.setcz()
        }
}

let chefcorn = new cz("ela me ama",19,8)
let divina = new res (chefcorn, "divina","casa do krl",666)

console.log(divina)

let chefnovin = new cz("corno2", 50,20)

chefnovin.getcz()
chefnovin.setcz()
chefnovin.getcz()

