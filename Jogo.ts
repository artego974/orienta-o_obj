let rl = require("readline-sync")
export interface jogointer{
    titulo:string
    genero:string
    classificacao:number
    get():void
    set():void
}
export class Jogo implements jogointer {
    public titulo:string
     genero:string
     classificacao:number
    constructor(titulo:string,genero:string,classificacao:number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        
    }
    get():void{
        console.log(`o titulo do jogo é ${this.titulo} e o genero é ${this.genero} e sua classificação é de ${this.classificacao} anos.`)
    }
    set():void{
        this.titulo = rl.question("qual o titulo do jogo? ")
        this.genero = rl.question("qual o genero do jogo?")
        this.classificacao = Number(rl.question("qual a classificação do jogo? "))
    }
}
export class jogoEletronico extends Jogo{
     private plataforma:string
    super(titulo:string, genero:string, classificacao:number,plataforma:string){
    }
    public geteletronico():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua platamorma é ${this.plataforma}`)
    }
}
export class jogoTabauleiro extends Jogo{
    private numeroJogadores: number
    super(titulo:string, genero:string, classificacao:number,numeroJogadores:number){
    }
    public gettabuleiro():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua qntd de jogadores é ${this.numeroJogadores}`)
    }
}

