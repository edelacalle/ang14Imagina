import { Component, OnInit } from '@angular/core';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  styleUrls: ['./loteria.component.css']
})
export class LoteriaComponent implements OnInit {
  auxPersona="";
  constructor(public loto:LoteriaService) { }

  ngOnInit(): void {
  }

  envia(){
    console.log("aux persona es", this.auxPersona)
    this.loto.addParticipante(this.auxPersona)
    
  }

}
