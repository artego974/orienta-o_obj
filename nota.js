var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaProva2 = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var med = (this.notaProva1 + this.notaProva2) / 2;
        return med;
    };
    Aluno.prototype.final = function () {
        var ntFinal = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
        return ntFinal;
    };
    return Aluno;
}());
var alunin = new Aluno(91, 'pedrin', 1, 10, 7);
console.log(alunin);
