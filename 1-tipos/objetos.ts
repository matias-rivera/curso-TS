let post: {
  id: number;
  titulo: string;
  descripcion: string;
  tags: string[];
  autor: {
    id: number;
    nombre: string;
  }
};

post = {
  id: 1,
  titulo: "Titulo del Post",
  descripcion: "Lorem ipsum lorem ipsum",
  tags: ['tag1', 'tag2'],
  autor: {
    id: 1,
    nombre: 'Matias'
  } 
}