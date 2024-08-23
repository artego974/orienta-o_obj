// 1. Contador

// Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

// a) `zerar()`: Reseta o valor do contador para zero.

// b) `incrementar()`: Incrementa o valor do contador em uma unidade.

// c) `valor(): number`: Um método que retorna o valor atual do contador.

export class contador {
    public i : number
    constructor(i:number) {
        this.i = i
        
    }
    zerar():void{
        this.i = 0
        console.log(`contador esta em ${this.i}`)
    }
    incrementar():void{
        this.i += 1
    }
    valor():void{
        console.log("o contador está em "+ this.i)
    }
}
let newcontador = new contador(0)