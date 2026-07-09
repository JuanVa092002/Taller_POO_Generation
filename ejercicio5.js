const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, color, precio, disponible) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.precio = precio;
  this.disponible = disponible;

  this.mostrarInfo = function () {
    console.log(`${this.marca} ${this.modelo} - Color: ${this.color} - Precio: $${this.precio} - Disponible: ${this.disponible}`);
  };

  this.vender = function () {
    if (this.disponible) {
      this.disponible = false;
      console.log(`${this.marca} ${this.modelo} ha sido vendido.`);
    } else {
      console.log(`${this.marca} ${this.modelo} ya no esta disponible.`);
    }
  };

  this.actualizarPrecio = function (nuevoPrecio) {
    this.precio = nuevoPrecio;
    console.log(`Nuevo precio de ${this.marca} ${this.modelo}: $${this.precio}`);
  };
}

const vehiculos = [];

for (let i = 1; i <= 3; i++) {
  console.log(`\nVehículo ${i}`);

  const marca = prompt("Marca: ");
  const modelo = prompt("Modelo: ");
  const color = prompt("Color: ");
  const precio = Number(prompt("Precio: "));
  const disponible = prompt("Disponible (true/false): ") === "true";

  const vehiculo = new Vehiculo(marca, modelo, color, precio, disponible);
  vehiculos.push(vehiculo);
}

for (const vehiculo of vehiculos) {
  vehiculo.mostrarInfo();
}

vehiculos[0].vender();
vehiculos[1].actualizarPrecio(85000000);
vehiculos[2].mostrarInfo();