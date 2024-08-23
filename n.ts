import { log } from "console"

let rl = require("readline-sync")

class Repositorin {
    commits: Array<string> = []
    branchs: Array<any> = []
    historicoDecommits: Array<any> = []
    
    index(): boolean{
        let verificacao = rl.question('Voce realmente quer adicionar o arquivo: \n1)Sim \n 2)Nao')
        if(verificacao == 1){
            return true
        }else if(verificacao == 2){
            return false
        }else{
            throw new Error("1 ou 2 apenas")
        }
    }
    //criar o metodo que insere o blob no commit
    
    //setBranches
    setcommits(): void {
        let frase = rl.question('O que voce quer adicionar dentro do arquivo? ')
        this.commits.push(frase)
         if(this.index()){
                this.branchs.push(this.commits)
                this.historicoDecommits.push(this.branchs)
        }
    }
    uploadBranch(): void{
        let newRepositorio = new Repositorin()
    
        newRepositorio.commits = this.commits
        newRepositorio.branchs = this.branchs
        newRepositorio.historicoDecommits = this.historicoDecommits
    }
    merge(): void{

        let somacommits: Array<any> = this.branchs[this.branchs.length - 1] + this.branchs[this.branchs.length - 2]
        console.log('os commits foram somados');

        this.branchs.push(somacommits)
        this.historicoDecommits.push(this.branchs)
         
    }
    head(): void{
        console.log(this.commits[this.commits.length - 1]);
        
    }
    removerBlob(): void{
        
        console.log(this.commits);
        
        let escolha = rl.questionInt('Qual arquivo quer remover ')

        this.commits.slice((escolha - 1),1)
    }
    setBlob(): void{
        
        console.log(this.commits);
        
        let escolha = rl.questionInt("Qual arquivo você deseja modificar ?\n Fale o qual é")
        let frase = rl.question('O que voce quer modificar? ')
        this.commits[escolha - 1] = frase
    }
    getBlod(): void{
        let escolha = rl.question('Qual blob você quer ver? ')
        console.log(this.commits[escolha - 1])
    } 
    getcommits(): void{
        console.log(this.commits);        
    }
}