import { Carro } from "./carro";
var leitor = require('readline-sync')

class Carro2 extends Carro {

setCarro2():void {
    let modelo = leitor.question('Qual o nome do Carro? ')
    let tanque = leitor.questionint('Qual a Quantidade de gasolina que ele gasta? ')
    let km = leitor.questionint('Quanto voce quer andar np carro (KM)? ')
    this.Marca = modelo
    this.Tanque = tanque
    this.KM = km
}
}