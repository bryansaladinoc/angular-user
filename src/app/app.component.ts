import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-user';
  hayError = false;
  size = false;
  mostrarDiv = true;
  valorSwitch = 'valor3';
  valor: string = '<Prueba de interpolación>';
  urlImagen = 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_RedUSERS.jpg';
  miClase = true;
  miClase2 = true;
  pNombre = '';
  pApellido = '';

  guardarCambios() {
    console.log('Cambios guardados');
  }

  verDatos() {
    console.log('Nombre', this.pNombre);
    console.log('Apellido', this.pApellido);
  }

  cargarDatos() {
    this.pNombre = 'José';
    this.pApellido = 'Sanchez';
  }
}
