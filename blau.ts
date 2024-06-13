/* 
transpilar --> typescript
interpetar --> javascript
complar --> java
*/
var rl = require('readline-sync')


class Carro{

    rodas: number 
    motor: number 
    cor: string 
    modelo:string 
    marca:string 
    km:number 
    constructor(rodas:number,motor:number,cor:string,modelo:string,marca:string,km:number){
        this.rodas = rodas
        this.motor = motor
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
        this.km = km
    }
    acelerar(){
        console.log("vrummmmmmm")
    }
    embreagem(){
        console.log("troca de marcha")
    }
    frear(){
        console.log("freia")
    }


}
/*
var pecas = ['rodas', 'motor', 'cor', 'modelo', 'marca', 'km']
var peçacompleta=[6]
for (let i = 0; i<=6; i++) {
    var peças = rl.question(`Insira ${pecas[i]}`)
    peçacompleta[i] = peças
}*/
var rodasa = rl.question('Insira o número de rodas: ')
var motora = rl.question('Insira o tipo de motor: ')
var cora = rl.question('Insira a cor do carro: ')
var modeloa = rl.question('Insira o modelo do carro: ')
var marcaa = rl.question('Insira a marca do carro: ')
var kma = rl.question('Insira o km do carro: ')

var carronovin =new Carro(rodasa,motora,cora,modeloa,marcaa,kma)
/*ca.acelerar()
meuCarro.embreagem()
meuCarro.frear()
*/
console.log(carronovin)