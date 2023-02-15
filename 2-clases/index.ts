import { Circulo } from "./Formas";

// 1 - Introduccion a clases 
let circuloRojo = new Circulo("rojo", 5);
let circuloVerde = new Circulo("verde", 10);

//circuloRojo.imprimirDatos();
//circuloVerde.imprimirDatos();

// 2 - Herencia
import { Animal, Ave, Perro } from "./Animales";
const animal = new Animal('Animal');
//animal.imprimirDatos();

const perro = new Perro('Ovejero');
//perro.ladrar();
//perro.imprimirDatos();

const ave = new Ave('Gallina', false);
//ave.volar();
//ave.imprimirDatos();

// 3 - Interfaces
import { Empleado } from "./Interfaces";
const empleado: Empleado = {
  id: 1,
  nombre: "mATIAS",
  departamento: {
    id: 1232,
    nombre: 'IT',
    sector: 'adas'
  }
}

import { Rectangulo } from "./Formas";
  const rect = new Rectangulo("azul", 10, 10);
  const rectArea = rect.calcularArea();
  //console.log(rectArea);

  const circuloRojoArea = circuloRojo.calcularArea();
  //console.log(circuloRojoArea);

  // 4 - Clases Abstractas
  import { Cliente } from "./Usuarios";
import { TarjetaCredito, TarjetaDebidto } from "./MetodosDePago";
  const cliente = new Cliente("1","matias@example.com","123456");
  
  const tarjetaCredito = new TarjetaCredito('VISA', 1000);
  const tarjetaDebito = new TarjetaDebidto('BBVA', 5000);
  
  
  cliente.cargarSaldo(1000, tarjetaDebito);
  //const usuario1 = new Usuario("1","email@example.com", "123456");
  //usuario1.email = "matiasgoogle.com";
  //console.log(usuario1.email);