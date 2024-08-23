var rll = require("readline-sync");
var Produt = /** @class */ (function () {
    function Produt(nome, preco, marca) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
    }
    Produt.prototype.lucro = function () {
        return (this.preco * 0.2);
    };
    Produt.prototype.getprod = function () {
        console.log("O produto ".concat(this.nome, " da marca ").concat(this.marca, " custa ").concat(this.preco, " e o lucro \u00E9 ").concat(this.lucro()));
    };
    Produt.prototype.Setprod = function () {
        this.nome = rll.question("qual o nome do produto\n");
        this.preco = rll.questionInt("qual o valor\n");
        this.marca = rll.question("qual a marca\n");
    };
    return Produt;
}());
var Vend = /** @class */ (function () {
    function Vend(produto, quantidade, valor, data) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor = valor;
        this.data = data;
    }
    Vend.prototype.valortotal = function () {
        return this.quantidade * this.valor;
    };
    Vend.prototype.descont = function () {
        return this.valortotal() / 2;
    };
    Vend.prototype.getvend = function () {
        console.log("O produto ".concat(this.produto.nome, " da marca ").concat(this.produto.marca, " custa \n        ").concat(this.produto.preco, " e o lucro \u00E9 ").concat(this.produto, "lO valor total da venda \u00E9 ").concat(this.valortotal(), "e o desconto \u00E9 ").concat(this.descont()));
    };
    Vend.prototype.Setprod = function () {
        this.produto = rll.question("qual o nome do produto\n");
        this.quantidade = rll.questionInt("qual o quantos tu comprou\n");
        this.valor = rll.question("qual o valor\n");
        this.data = rll.question("qual a data\n");
    };
    return Vend;
}());
var Loja = /** @class */ (function () {
    function Loja(produto, vendas, total) {
        this.produto = produto;
        this.vendas = vendas;
        this.total = total;
    }
    Loja.prototype.mostrarTudo = function () {
        console.log("O produto ".concat(this.produto.nome, " da marca ").concat(this.produto.marca, " custa ").concat(this.produto.preco, " \nE o lucro \u00E9 ").concat(this.produto.preco, " \nO valor total da venda \u00E9 ").concat(this.vendas.valortotal(), "\nE o desconto \u00E9 ").concat(this.vendas.descont()));
    };
    return Loja;
}());
var prod = new Produt("tv 24 polegada", 3000, "lg");
var vend = new Vend(prod, 2, 3000, "10/10/2020");
var loja = new Loja(prod, vend, 10000);
loja.mostrarTudo();
