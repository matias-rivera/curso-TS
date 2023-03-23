// Type Annotation
let titulo: string;

// Type Inference
let frutas = ['manzana'];
frutas.forEach(fruta => console.log(fruta));

function sumarDosValores(a: number, b: number): number {
  return a + b;
}

// Type Assertion
let texto: any = 'texto';
let textoString: string = texto as string;
let textoStringDos: string = <string> texto;

let helados: any = ['vainilla', 'frutilla'];
(helados as string[]).push('chocolate');
console.log(helados);

// Type Aliasses
type transaccion = {
  id: string;
  descripcion: string;
  monto: number;
  fecha: string;
  empresa: {
    id: string;
    nombre: string;
  }
}

let trx1: transaccion = {
  descripcion: '222',
  id: '2122asda',
  monto: 2000,
  fecha: '23/12/2022',
  empresa: {
    id: '3223a',
    nombre: 'PagoFacil'
  }
}

let trx2: transaccion = {
  descripcion: 'aaa',
  id: '2122asda',
  monto: 2000,
  fecha: '23/12/2022',
  empresa: {
    id: '3223a',
    nombre: 'PagoFacil'
  }
}

// Type Guards
type usuario = {
  id: number,
  nombre: string
}


function imprimirUsuarios(usuario: usuario | usuario[]): void {
  
  if(usuario instanceof Array) {
    usuario.forEach(usuario => console.log(usuario));
    return;
  }

  console.log(usuario);
}

imprimirUsuarios({id: 1, nombre: 'nombre'})
