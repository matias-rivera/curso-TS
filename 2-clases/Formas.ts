import { Forma } from "./Interfaces";


// Clase: es un plantilla para crear objetos
export class Circulo implements Forma{
  // Propiedades o Atributos: caracteristicas de los objetos 
  color: string;
  radio: number;

  // Constructor: función especial que se ejecuta al instanciar la clase
  constructor (color: string, radio: number) {
    this.color = color;
    this.radio = radio;
  }

  // Metodos: comportamientos o acciones de los objetos
  imprimirDatos() {
    console.log(`color: ${this.color}, radio: ${this.radio}`);
  }

  calcularArea() {
    return 3.14 * (Math.pow(this.radio, 2));
  };
}

export class Rectangulo implements Forma {
  constructor(public color: string, public base: number, public altura: number){}

  calcularArea(){
    return this.base * this.altura;
  };
}