import { Aluno } from "./nota";
let rl = require("readline-sync")
let menu = true
let alunoNovo = new Aluno(0, '', 0,0,0)
let n = false
while (menu == true) {
    let men = Number(rl.question(`
    1)cadastrar aluno
    2)cadastrar notas
    3)verificar media 
    4)verificar nota final
    escolha: `))
    switch (men) {
        case 1:
            let nomeAluno = rl.question("nome aluno")
            let matriculaAluno = rl.questionInt("numero da matricula")
            alunoNovo = inserirNotas(nomeAluno,matriculaAluno)
            n = true
            break;
        case 2:
            if(n == true){
                alunoNovo = inserirNotas(nomeAluno,matriculaAluno)
            }else{
                throw new Error("deve fazer cadastrar o aluno primeiro")
            }
            break;
        case 3:
            if(n == true){
                alunoNovo.media()
            }
            break;
        case 4:
            if(n == true){
                alunoNovo.final()
            }
            break;
    
        default:
            break;
            alunoNovo = inserirNotas(nomeAluno,matriculaAluno)
    }
}
function inserirNotas(nome: string,matricula:number): Aluno {
    let prova1 = rl.questionInt("Digite a sua Nota 1: ")
    let prova2 = rl.questionInt("Digite a sua Nota 2: ")
    let trabalho = rl.questionInt("Digite a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula,nome,prova1,prova2,trabalho)
    return alunoNovo

}