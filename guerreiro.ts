import { monstro } from "./mostro"
export class guerreiro{
    nome:string
    tipo: string
    ataque:number
    saude:number

    constructor(nome:string, tipo:string, ataque:number, saude:number){
        this.nome = nome
        this.tipo = tipo
        this.ataque = 50
        this.saude = 100
        }


        atacar(inimigo:monstro):void{
            inimigo.saude -= this.ataque
            console.log(`${this.nome} atacou com ${this.ataque}!`)
            console.log(this.ataque - inimigo.saude)
        }
        defender(inimigo:monstro):void{
            this.saude -= inimigo.forca
            console.log(`${this.nome} defendeu com ${this.saude}!`)
            console.log(this.saude - inimigo.forca)
        }
        status(){
            console.log(`nome: ${this.nome}, tipo: ${this.tipo}, ataque: ${
                this.ataque}, saude: ${this.saude}`)
        }

}