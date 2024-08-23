"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var rl = require("readline-sync");
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function () {
        if (data1 == data2) {
            console.log("Data 1 e data 2 são iguais");
        }
        else {
            console.log("As datas são diferentes");
        }
    };
    Data.prototype.getDia = function () {
        console.log("O dia \u00E9 ".concat(this.dia));
    };
    Data.prototype.getMesN = function () {
        console.log("O m\u00EAs \u00E9 ".concat(this.mes));
    };
    Data.prototype.getMesEx = function () {
        switch (this.mes) {
            case 1:
                console.log("Janeiro");
                break;
            case 2:
                console.log("Fevereiro");
                break;
            case 3:
                console.log("Março");
                break;
            case 4:
                console.log("Abril");
                break;
            case 5:
                console.log("Maio");
                break;
            case 6:
                console.log("Junho");
                break;
            case 7:
                console.log("Julho");
                break;
            case 8:
                console.log("Agosto");
                break;
            case 9:
                console.log("Setembro");
                break;
            case 10:
                console.log("Outubro");
                break;
            case 11:
                console.log("Novembro");
                break;
            case 12:
                console.log("Dezembro");
                break;
            default:
                console.log("Mês invalido");
                break;
        }
    };
    Data.prototype.getAno = function () {
        console.log("O ano \u00E9 ".concat(this.ano));
    };
    Data.prototype.setData = function () {
        var diaNovo = Number(rl.question("Fale o novo dia"));
        var mesNovo = Number(rl.question("Fale o novo mes"));
        var anoNovo = Number(rl.question("Fale o novo ano"));
        this.dia = diaNovo;
        this.mes = mesNovo;
        this.ano = anoNovo;
    };
    Data.prototype.isBissexto = function () {
        if (this.ano % 400 == 0) {
            console.log("Ano bissexto");
        }
        else {
            console.log("Ano normal");
        }
    };
    Data.prototype.clone = function () {
        var novaData = new Data(this.dia, this.mes, this.ano);
        return novaData;
    };
    return Data;
}());
exports.Data = Data;
var data1 = new Data(4, 8, 2008);
var data2 = new Data(27, 7, 2009);
