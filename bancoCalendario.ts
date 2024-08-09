import { Data } from "./calendario";

export class BancoDatas{
    public datas: Data[] = []

    public addData(data:Data):void{
        this.datas.push(data)
    }

}
let novaData =new Data(10,11,1999)
let bancoDatas = new BancoDatas()

bancoDatas.addData(novaData)