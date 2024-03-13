import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoteriaService {
  participantes=[
    {id:1, nombre:"Usuario 1", ganados:0},
    {id:2, nombre:"Usuario 2", ganados:1  },
    {id:3, nombre:"Usuario 3", ganados:4  },
    {id:4, nombre:"Usuario 4", ganados:5  }
  ]

  constructor() { }
  getMaxId(){
    let oMax= this.participantes.reduce( (prev, current)=> (prev && prev.id > current.id) ? prev : current)
    console.log("oMax es ", oMax )
    let nRet = oMax.id +1 ;
    return nRet;
  }

  addParticipante(name:string){

    console.log("antes del add" , JSON.stringify(this.participantes) )

    this.participantes.push(
      {
        id:this.getMaxId(),
        nombre:name, 
        ganados:0
      }
    )
    console.log("despues del add" , JSON.stringify(this.participantes) )


  }

  juego(){
    let nWin = Math.floor(Math.random() * this.participantes.length);
    console.log("el aleatorio es ", nWin)
    this.participantes[nWin]["ganados"] = this.participantes[nWin]["ganados"] + 1;
  }

}
