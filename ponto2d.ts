let rl = require("readline-sync")
export class ponto2d {
    x: number
    y:number
    constructor() {
      this.x = 0
      this.y = 0
    }
    getPonto2d():void{
        console.log(`o seu x é ${this.x} e seu y é ${this.y}`)
    }

    setPonto2d():void{
        this.x = rl.questionInt("fale o valor do x\n")
        this.y = rl.questionInt("fale o valor do y\n")
    }
    mover():number{
        this.x = rl.questionInt("fale o valor do x\n")
        this.y = rl.questionInt("fale o valor do y\n")
        return this.x,this.y
    }
    equal():boolean{
        if(this.x == this.y){
            return true
        }else{
            return false
        }
    }
    toString():string{
        return `x:${this.x} y:${this.y}`
    }
    distancia(outroPonto: ponto2d): number{
        return Math.sqrt((outroPonto.x - this.x) * 2 + (outroPonto.y - this.y)*2)
    }
    clone():void{
        let ponto2dNovo = new ponto2d()
    }
}
class PontoD2comcoordenadas extends ponto2d {
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
    }

    getPontoD2comcoordenadas(): void {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")")
    }

    setPontoD2comcoordenadas(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    mover2(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }
}
class PontoD2comcoordenadas2 extends ponto2d {
    constructor(outroPonto: ponto2d) {
        super();
        this.x = outroPonto.x;
    }
    getPontoD2comcoordenadas2(): void {
        console.log("Ponto2Dcomcoordenadas: (" + this.x + ", " + this.y + ")")
    }

    setPontoD2comcoordenadas2(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }

    mover3(): void {
        this.x = rl.questionInt("Digite o valor de x: ");
        this.y = rl.questionInt("Digite o valor de y: ");
    }


}