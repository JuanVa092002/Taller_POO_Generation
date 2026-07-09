function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.peso = peso;

  this.presentarse = function () {
    return `Hola, soy ${this.nombre}, un ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;
  };
}

const mascota1 = new Mascota("Luna", "perro", 3, 12);
const mascota2 = new Mascota("Milo", "gato", 2, 5);
const mascota3 = new Mascota("Coco", "conejo", 1, 2);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());