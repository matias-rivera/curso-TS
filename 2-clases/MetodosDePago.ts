import { MetodoDePago } from "./Interfaces";

export class TarjetaCredito implements MetodoDePago {
  constructor(public name: string, private limite: number) {}

  validar(monto:number) {
    return true;
  }
}

export class TarjetaDebidto implements MetodoDePago {
  constructor(public name: string, private saldo: number) {}

  validar(monto:number) {
    return false;
  }
}