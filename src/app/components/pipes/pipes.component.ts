import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  fecha = new Date();
  cadena: string = "hola mundo";
  numero: number = 123.45;

  constructor() { }

  ngOnInit(): void {
  }

}
