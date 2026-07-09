function Libro(titulo, autor, paginas, genero) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.genero = genero;
  this.prestado = false;

  this.prestar = function () {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" fue prestado.`);
    } else {
      console.log(`Alerta: el libro "${this.titulo}" ya estaba prestado.`);
    }
  };

  this.devolver = function () {
    if (this.prestado) {
      this.prestado = false;
      console.log(`El libro "${this.titulo}" fue devuelto.`);
    } else {
      console.log(`Alerta: no se puede devolver "${this.titulo}" porque no estaba prestado.`);
    }
  };
}

const libro1 = new Libro("Cien años de soledad", "García Márquez", 417, "Novela");

libro1.prestar();
libro1.prestar();
libro1.devolver();
libro1.devolver();