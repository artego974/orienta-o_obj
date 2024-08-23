class animal {
    nome: string
    constructor(nome:string) {
        this.nome = nome
    }
    barulin():void{

    }
}
class catolo  extends animal{

    barulin(): void {
        console.log(`${this.nome} faz: auuuuuuuuuu auuuuuuuuuuuu `)
    }
}
let newcatolo = new catolo ("argos")
newcatolo.barulin() 