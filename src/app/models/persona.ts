export class Persona {
  nombre: string | undefined;
  apellido: string | undefined;
  edad: number | undefined;

  constructor(nombre?: string, apellido?: string, edad?: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}
