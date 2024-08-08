interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): void;
    getMes(): void;
    getMesExtenso(): void;
    getAno(): void;
    isBissexto(): void;
    clone(): void;
}

class Data implements Data{
    dia: number
    mes: number
    ano: number;
   
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
        
    }
    compara():void{
        if(data1 == data2){
            console.log("data 1 e data 2 são iguais")
        }else{
            console.log("as datas são diferentes")
        }
    }
    getDia():void{
        console.log(`O dia é ${this.dia}`)
    }
    getMesN():void{
        console.log(` o mês é ${this.mes}`)
    }
    getMesEx():void{
        switch (this.mes) {
                case 1:
                console.log("janeiro")
                break;
                case 2:
                console.log("fevereiro")
                break;
                case 3:
                console.log("março")
                break;
                case 4:
                console.log("abril")
                break;
                case 5:
                console.log("maio")
                break;
                case 6:
                console.log("junho")
                break;
                case 7:
                console.log("julho")
                break;
                case 8:
                console.log("agosto")
                break;
                case 9:
                console.log("setembro")
                break;
                case 10:
                console.log("outubro")
                break;
                case 11:
                console.log("novembro")
                break;
                case 12:
                console.log("dezembro")
                break;
        
            default:
                console.log("mês invalido")
                break;
        }
    }
    getAno():void{
        console.log(`o ano é ${this.ano}`)
    }
    isBissexto(): void{
        if (this.ano%400 == 0){
            console.log("ano bissexto")
        }else{
            console.log("ano normal")
        }
    }
    clone(): Data{
        let novaData = new Data(this.dia,this.mes,this.ano)
        return novaData
    }
}
let data1 = new Data(4,8,2008)
let data2 = new Data(27,7,2009)
