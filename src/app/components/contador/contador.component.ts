import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

const unseg:Observable<number> = interval(1000);

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  
  @Input() title:string = "defecto";
  @Input() id:number = 0;  
  @Input() inicio:number = 0;  
  @Input() valor:number = 0;

  @Output() msgPadre = new EventEmitter<string>();


  obs?: Subscription;

  constructor() {
    console.log("Creo el Contador en constructor")
    this.initContador()
  }

  
  ngOnInit(): void {
    this.valor = this.inicio;
    console.log("ngOnInit elemento")
  }
  ngOnDestroy() {
    console.log("ngOnDestroy elemento")
    this.obs?.unsubscribe();
  }

  initContador(){
    this.obs = unseg.subscribe(
      (x)=>{ 
        this.valor++;
        this.msgPadre.emit(`Papa: soy ${this.id} con el valor ${this.valor} ` );
      }      
    )
  }

 

  resetContador(){
    console.log("estoy en resetContador")
    this.valor = this.inicio
  }

  pararContador(){
    console.log("estoy en pararContador")
    this.obs?.unsubscribe()
  }

  iniciarContador(){
    this.initContador()
  }
}
