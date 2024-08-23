type Gabarito = Array<string> 
interface Prova {
    constructor(gabarito: Gabarito);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

 class Prova implements Prova{
    private gabarito: Gabarito
    private repostasAluno: Array<string>
    constructor(gabarito:Gabarito){
        if(gabarito.length != 15){
            throw new Error(`O gabarito deve ter 15 respostas`)
        }
        this.gabarito = gabarito
        this.repostasAluno = Array(15).fill(' ')
    }

    public respostaAluno(resposta: string): void {
        if(this.repostasAluno.length >= 15){
            throw new Error(`Não é possivel add mais respostas`)
            this.repostasAluno.push(resposta)
        }

    }
    public acertos(): number {
        let acertos
        for(let i = 0; i<15; i++){
            if(this.repostasAluno[i] == this.gabarito[i]){
                acertos++
            }
        }
        return acertos
    }
    nota(): number {
        let nota = 0
        for(let i = 0; i<10; i++){
            if(this.repostasAluno[i] == this.gabarito[i]){
                nota = nota + 0.5
            }
        }
        for(let i = 10; i <15; i++){
            if(this.repostasAluno[i] == this.gabarito[i]){
                nota = nota + 1
            }
        }
        return nota
    }
    public maior(outraProva: Prova): number{
        return Math.max(this.nota(), outraProva.nota())
    }
}