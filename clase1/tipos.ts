// number
let entero: number = 1;
let flotante: number = 1.22;

// string
let email: string;
email = "matias@example.com";

// boolean
let isLoading: boolean;
isLoading = true;

// array
let listaNumeros: Array<number> = [1,2,3];
let listaColores: string[] = ['rojo', 'verde', 'azul'];

// tuple
let caracteristicas: [string, number, boolean];
caracteristicas = ['Matias', 29, true];

// Enum
enum Rol {
  Usuario,
  Moderador,
  Admin
}

let rol: Rol = Rol.Usuario;

// Union
function printId(id: number | string) {
  console.log("Tu ID es: " + id);
}
printId(11);
printId("232");

// Literal
let fruta: "manzana" | "banana";
fruta = "banana";

// Any
let numero: any;
numero = [1];

// Never
function generarError(mensaje: string): never {
  throw new Error(mensaje);
}