let rl = require("readline-sync")

import { Jogo } from "./Jogo"
class bibliotecaDeJogos {
    jogos: Jogo[]

   
    addJogo(jogo):void{
        this.jogos.push(jogo)
    }
    rmJogo(jogo):void{
        this.getJogos()
        let nomeremovido = rl.question("qual jogo deseja remover")
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== nomeremovido)
    }
    getJogos():void{
        for(let jogo of this.jogos){
            jogo.get()
            }
        }
    }
    