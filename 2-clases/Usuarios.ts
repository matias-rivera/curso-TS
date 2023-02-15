import { MetodoDePago } from "./Interfaces";

export abstract class Usuario {
  constructor(protected _id: string, protected _email: string, protected _password: string) {
  }

  login(): void {
    console.log('Login exitoso!');
  }

  get email() {
    return this._email;
  }

  set email(input: string) {
    if(input.includes("@")) {
      this._email = input;
    } else {
      console.log('Email no es valido')
    }
  }
}

export class Cliente extends Usuario {
  public saldo: number;

  constructor(id: string, email: string, password: string, saldo?: number) {
    super(id, email, password);
    this.saldo = saldo ? saldo : 0;
  }

  cargarSaldo(monto: number, metodoDePago: MetodoDePago){
    if(metodoDePago.validar(monto)) {
      this.saldo = this.saldo + monto;
      console.log(`se cargó, nuevo Saldo: ${this.saldo}`)
    }
  }
}