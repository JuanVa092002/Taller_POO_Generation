// Usando funcion flecha para crear objetos - Prueba de concepto
// const Computador = (marca, procesador, ram, precio) => ({
//   marca,
//   procesador,
//   ram,
//   precio,
// });

function Computador(marca, procesador, ram, precio) {
  this.marca = marca;
  this.procesador = procesador;
  this.ram = ram;
  this.precio = precio;
}

const pc1 = Computador("Lenovo", "Intel i5", 8, 2200000);
const pc2 = Computador("HP", "Ryzen 7", 16, 3100000);
const pc3 = Computador("Dell", "Intel i7", 32, 4200000);

console.log(pc1);
console.log(pc2);
console.log(pc3);