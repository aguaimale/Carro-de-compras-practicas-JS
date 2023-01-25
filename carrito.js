let carrito = [];


let productosDisponibles = [
  {nombre: "Camisa", precio: 25},
  {nombre: "Pantalón", precio: 35},
  {nombre: "Zapatos", precio: 50},
  {nombre: "Gorra", precio: 15},
];

// añadir un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
}


function mostrarCarrito() {
  console.log("Productos en el carrito:");
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre + " - $" + carrito[i].precio);
  }
}


agregarAlCarrito(productosDisponibles[0]);


mostrarCarrito();
