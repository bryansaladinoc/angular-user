import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  personaModel = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellido: new FormControl(),
    edad: new FormControl()
  });
  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.personaModel.value)
    console.log(this.cNombre);
  }

  get cNombre() {
    return this.personaModel.get('nombre');
  }

}
