// Genéricos - Interfaces

interface FuncionIdentidad {
  <T>(arg: T): T
}

let identidad: FuncionIdentidad = function <T>(arg: T): T {
  return arg;
}

const valor = identidad<string[]>(["2"]);

// Genéricos - Funciones
function imprimirCadenasDeTexto(textos: string[]): void {
  textos.forEach(texto => console.log(texto));
}

function imprimirNumeros(numeros: number[]): void {
  numeros.forEach(numero => console.log(numero));
}

function imprimirArray<T>(items: T[]): void {
  items.forEach(item => console.log(item));
}

imprimirArray<string>(["1","2"])


// Genéricos - Clases
class ColeccionDeCadenasDeTexto {
  constructor(public coleccion: string[]){}

  get(index: number): string {
    return this.coleccion[index];
  }
}

class ColeccionDeNumeros {
  constructor(public coleccion: number[]){}

  get(index: number): number {
    return this.coleccion[index];
  }
}

class ColeccionDeItems<T> {
  constructor(public coleccion: T[]){}
  get(index: number): T {
    return this.coleccion[index];
  }
}

// Genericos - Restricciones

class TarjetaDeCredito {
  validar() {
    console.log("Se ha validado la TDC")
  }
}

class TarjetaDeDebito {
  validar() {
    console.log("Se ha validado la TDD")
  }
}

interface Validable {
  validar(): void;
}

function pagar<T extends Validable>(metodoDePago: T): void {
  metodoDePago.validar();
}

pagar<TarjetaDeCredito>(new TarjetaDeCredito);
pagar<TarjetaDeDebito>(new TarjetaDeDebito);