function Estudiante(nombre, curso, nota) {
  this.nombre = nombre;
  this.curso = curso;
  this.nota = nota;
  this.aprobado = nota >= 3.0;

  this.mostrarResultado = function () {
    if (this.aprobado) {
      console.log(`${this.nombre} aprobó ${this.curso} con nota ${this.nota}.`);
    } else {
      console.log(`${this.nombre} reprobó ${this.curso} con nota ${this.nota}.`);
    }
  };
}

const estudiante1 = new Estudiante("Ana", "JavaScript", 4.5);
const estudiante2 = new Estudiante("Luis", "JavaScript", 2.8);
const estudiante3 = new Estudiante("Sara", "JavaScript", 3.0);
const estudiante4 = new Estudiante("Mateo", "JavaScript", 1.9);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();