var rl = require('readline-sync');
var aluno = /** @class */ (function () {
    function aluno(nome) {
        this.nome = nome;
        this.notas = [];
    }
    aluno.prototype.registro = function () {
        var nota1 = rl.questionInt("fala tua primeira nota");
        var nota2 = rl.questionInt("fala tua segunda nota");
        this.notas.push(nota1, nota2);
    };
    aluno.prototype.cacularMedia = function () {
        var media = (this.notas[0] + this.notas[1]) / 2;
        console.log(media);
    };
    return aluno;
}());
var nome = rl.question("qual teu nome patrao ");
var aluno1 = new aluno(nome);
aluno1.registro();
aluno1.cacularMedia();
