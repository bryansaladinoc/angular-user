import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  personaModel: Persona;

  constructor() {
    this.personaModel = new Persona();
  }

  ngOnInit(): void {
  }

  guardar(formulario: any) {
    console.log(formulario)
  }

}
