interface Identificador {
  id: number;
  nombre: string;
}

export interface Departamento extends Identificador {
  sector: string;
}

export interface Empleado extends Identificador {
  departamento: Departamento;
}

export interface Forma {
  color: string;
  calcularArea: () => number;
}

export interface MetodoDePago {
  name: string;
  validar: (monto: number) => boolean;
}