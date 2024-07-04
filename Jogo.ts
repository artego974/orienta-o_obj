let rl = require("readline-sync")
class Jogo {
    public titulo:string
    protected genero:string
    protected classificacao:number
    constructor(titulo:string,genero:string,classificacao:number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        
    }
    get():void{
        console.log(`o titulo do jogo é ${this.titulo} e o genero é ${this.genero} e sua classificação é de ${this.classificacao} anos.`)
    }
}

class jogoEletronico extends Jogo{
     private plataforma:string
    super(titulo:string, genero:string, classificacao:number,plataforma:string){
    }
    public geteletronico():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua platamorma é ${this.plataforma}`)
    }
}
class jogoTabauleiro extends Jogo{
    private numeroJogadores: number
    super(titulo:string, genero:string, classificacao:number,numeroJogadores:number){
    }
    public gettabuleiro():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua qntd de jogadores é ${this.numeroJogadores}`)
    }
}

class bibliotecaDeJogos {
    jogos: Jogo[]

   
    addJogo(jogo):void{
        this.jogos.push(jogo)
    }
    rmJogo(jogo):void{
        this.getJogos()
        let nomeremovido = rl.question("qual jogo deseja remover")
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== nomeremovido)
    }
    getJogos():void{
        for(let jogo of this.jogos){
            jogo.get()
            }
        }
    }