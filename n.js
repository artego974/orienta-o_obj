"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var Repositorin = /** @class */ (function () {
    function Repositorin() {
        this.commits = [];
        this.branchs = [];
        this.historicoDecommits = [];
    }
    Repositorin.prototype.index = function () {
        var verificacao = rl.question('Voce realmente quer adicionar o arquivo: \n1)Sim \n 2)Nao');
        if (verificacao == 1) {
            return true;
        }
        else if (verificacao == 2) {
            return false;
        }
        else {
            throw new Error("1 ou 2 apenas");
        }
    };
    Repositorin.prototype.indexz = function () {
        var verificacao = rl.question('Voce realmente quer adicionar o arquivo: Sim ou Nao');
        if (verificacao.toLowerCase() == 'sim') {
            return true;
        }
        else if (verificacao.toLowerCase() == 'nao') {
            return false;
        }
        else {
            throw new Error('Voce precisa responder sim ou nao !!');
        }
    };
    Repositorin.prototype.setcommits = function () {
        var frase = rl.question('O que voce quer adicionar dentro do arquivo? ');
        this.commits.push(frase);
        if (this.index()) {
            this.branchs.push(this.commits);
            this.historicoDecommits.push(this.branchs);
        }
    };
    Repositorin.prototype.uploadBranch = function () {
        var newRepositorio = new Repositorin();
        newRepositorio.commits = this.commits;
        newRepositorio.branchs = this.branchs;
        newRepositorio.historicoDecommits = this.historicoDecommits;
    };
    Repositorin.prototype.merge = function () {
        var somacommits = this.branchs[this.branchs.length - 1] + this.branchs[this.branchs.length - 2];
        console.log('os commits foram somados');
        this.branchs.push(somacommits);
        this.historicoDecommits.push(this.branchs);
    };
    Repositorin.prototype.head = function () {
        console.log(this.commits[this.commits.length - 1]);
    };
    Repositorin.prototype.removerBlob = function () {
        console.log(this.commits);
        var escolha = rl.questionInt('Qual arquivo quer remover ');
        this.commits.slice((escolha - 1), 1);
    };
    Repositorin.prototype.setBlob = function () {
        console.log(this.commits);
        var escolha = rl.questionInt("Qual arquivo você deseja modificar ?\n Fale o qual é");
        var frase = rl.question('O que voce quer modificar? ');
        this.commits[escolha - 1] = frase;
    };
    Repositorin.prototype.getBlod = function () {
        var escolha = rl.question('Qual blob você quer ver? ');
        console.log(this.commits[escolha - 1]);
    };
    Repositorin.prototype.getcommits = function () {
        console.log(this.commits);
    };
    return Repositorin;
}());
