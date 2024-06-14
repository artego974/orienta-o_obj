import { guerreiro } from "./guerreiro"
    export class monstro {
    nome:string
    forca: number
    saude: number
    constructor(nome:string ) {
        this.nome = "bundão"
        this.forca = 50
        this.saude = 10
    }
    atacar(heroi:guerreiro){
        heroi.saude -= this.forca
        console.log("O monstro " + this.nome + " atacou com força ")
        console.log(this.forca - heroi.saude)
    }
    defender(heroi:guerreiro){
        this.saude -= heroi.ataque
        console.log("O monstro " + this.nome + " defendeu e sofreu dano")
        console.log(this.saude - heroi.ataque)
    }
    status(){
        console.log("O monstro " + this.nome + " tem " + this.saude +
        " de saúde e " + this.forca + " de força")
    }
}