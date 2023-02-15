function sumar (a: number, b: number): number {
  return a + b
}

function imprimir (val: number): void {
  console.log(val);
}

function imprimirSuma(a: number, b: number, print: (val: number) => void) {
  let resultado = sumar(a, b);
  print(resultado);
}

imprimirSuma(1,2,imprimir)


// Arrow Function
let sumaFlecha: (a: number, b: number) => number;
sumaFlecha = (a: number, b: number): number => a + b;