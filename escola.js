var r = require("readline-sync");
var prof = /** @class */ (function () {
    function prof(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    prof.prototype.getpf = function () {
        console.log("sou o ", this.nome, " tenho ", this.idade, " e tenho ", this.ano_xp, " de experiencia");
    };
    prof.prototype.setpf = function () {
        var nomeN = r.question("novo nome");
        var idadeN = parseInt(r.question("nova idade"));
        var ano_xpN = parseInt(r.question("novo ano de experiencia"));
        this.nome = nomeN;
        this.idade = idadeN;
        this.ano_xp = ano_xpN;
    };
    return prof;
}());
var school = /** @class */ (function () {
    function school(profer, nome, endereco, num_end) {
        this.profer = profer;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    school.prototype.getesc = function () {
        console.log("sou a escola ", this.nome, " localizado em ", this.endereco, "numero ", this.num_end, " e tenho o prof ", this.profer.nome);
    };
    school.prototype.setesc = function () {
        this.profer.setpf();
        var nomeN = r.question("novo nome da escola");
        var enderecoN = r.question("novo endereco da escola");
        var num_endN = (r.questionInt("novo numero do endereco da escola"));
        this.nome = nomeN;
        this.endereco = enderecoN;
        this.num_end = num_endN;
        this.profer.setpf();
    };
    return school;
}());
var profc = new prof("", 0, 0);
var mal = new school(profc, "", "", 0);
console.log(mal);
profc.getpf();
profc.setpf();
profc.getpf();
var n = true;
var NovProf = [];
var NovEsc = [];
var contarEscola = 0;
var contarProf = 0;
while (n != false) {
    var opc = r.questionInt("qual a opção? \n[1]criar professor\n[2]criar nova escola\n[3]mudar prof\n[4]mudar escola\n[5]ver prof\n[6]ver escola\n[7]sair\n");
    switch (opc) {
        case 1:
            profc.setpf();
            NovProf.push(profc);
            contarProf++;
            break;
        case 2:
            mal.setesc();
            NovEsc.push(mal);
            contarEscola++;
            break;
        case 3:
            console.log(NovProf, contarProf);
            var prof_1 = r.questionInt("qual o prof?") - 1;
            NovProf[prof_1].setpf();
            break;
        case 4:
            var escola = r.questionInt("qual a escola?") - 1;
            NovEsc[escola].setesc();
            break;
        case 5:
            console.log(NovProf, contarProf);
            break;
        case 6:
            console.log(NovEsc, contarEscola);
            break;
        case 7:
            n = false;
            break;
        default:
            console.log("invalido essa opção");
            break;
    }
}
