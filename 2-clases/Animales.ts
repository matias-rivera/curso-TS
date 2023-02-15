export class Animal {
  protected name: string;

  constructor( name: string) {
    this.name = name;
  }

  imprimirDatos() {
    console.log(`El nombre es: ${this.name}`);
  }
}

export class Perro extends Animal {
  ladrar() {
    console.log(`${this.name} ladra...`)
  }
}

export class Ave extends Animal {
  private esVoladora: boolean;

  constructor( name: string, esVoladora: boolean ) {
    super(name);
    this.esVoladora = esVoladora;
  }

  volar() {
    if(this.esVoladora) {
      console.log('volar...')
    } else {
      console.log('no es una ave voladora')
    }
  }

  imprimirDatos(): void {
    console.log(`El nombre es ${this.name} y es un ave ${this.esVoladora ? "voladora" : "no voladora"}`);
  }
}