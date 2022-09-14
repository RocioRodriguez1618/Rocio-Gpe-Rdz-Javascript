//*ARRAY
const PRODUCTOS = [{
  "id": 1,
  "nombre": "Rub Rojo",
  "precio": 99,
  "cantidad": 1
},
{
  "id": 2,
  "nombre": "Sal Ahumada Original",
  "precio": 135,
  "cantidad": 1
},
{
  "id": 3,
  "nombre": "Salsa de Ajo",
  "precio": 99,
  "cantidad": 1
},
{
  "id": 4,
  "nombre": "Salsa de Serrano",
  "precio": 99,
  "cantidad": 1
},
{
  "id": 5,
  "nombre": "Rub del norte",
  "precio": 99,
  "cantidad": 1
},
{
  "id": 6,
  "nombre": "Rub de la costa",
  "precio": 99,
  "cantidad": 1
},
{
  "id": 7,
  "nombre": "Chicharron de habanero",
  "precio": 145,
  "cantidad": 1
},
{
  "id": 8,
  "nombre": "Salsa de Aguachile",
  "precio": 99,
  "cantidad": 1
}
]

//* Array para generar el carrito
const CARRITO = [];

let compra = prompt("Desea comprar algo");

if (compra == null) { // si 'let comprar = "" ' y da cancelar
  alert(`
  Haz dado click en Cancelar
  Gracias por visitarnos, vuelva cuando quiera`);
}
if (compra == "") {
  alert("No has seleccionado ningún producto"); // si 'let comprar = "" ' y da aceptar
}


if (compra.toLowerCase() == "si") { // si 'let compra = si' => pregunta filtro

  let filtrar = prompt(`
  Deseas filtrar por precio? Si/No
`).toLowerCase();

  if (filtrar == "si") { // si 'let filtrar = si' => ingrese precio a filtrar.

    let precio = Number(
      prompt(`Ingrese el precio (MXN) que desea filtrar: `)
    );

    const productosFiltrados = filtrarPrecio(precio);
    // funcion 'filtrarPrecio' y almaceno en una variable const

    alert("Filtro precios mayores a MXN" + precio + "\nContinue para ver los Productos");


    let eleccionFiltrados;

    while (eleccionFiltrados != 0) {

      eleccionFiltrados = prompt(`
            ${VerFiltro(productosFiltrados)}
            A continuación seleccione el producto por su ID
       `);


      if (eleccionFiltrados == null) {
        alert("Gracias por visitarnos, vuelva cuando quiera");
        break;
      }

      if (eleccionFiltrados == 0) {
        break;
      }

      agregarProductosAlCarrito(productosFiltrados, parseInt(eleccionFiltrados));
      console.log(sumarTotal());


    }


    let eliminar = prompt(`
  Deseas eliminar algun producto del carrito?
  Si / No
  `).toLowerCase();

    if (eliminar == "si") {
      console.log(CARRITO);

      eliminarProductoCarrito();

      alert(`
       La suma total del carrito es: MXN ${sumarTotal(CARRITO)}
       `)
      // FINAL COMPRANDO CON FILTRO ELIMINANDO PROD. DEL CARRITO



    } else {

      alert(`
       La suma total del carrito es: MXN${sumarTotal(CARRITO)}
       `)
      // FINAL COMPRANDO CON FILTRO SIN ELIMINAR PROD. DEL CARRITO

    }




  } else { // si 'let filtrar = no' => muestro productos.

    let eleccionProductos = "";

    while (eleccionProductos != "no") {
      eleccionProductos = prompt(`
       ¿Que productos deseas agregar al carrito?
       Para dejar de comprar, escribir NO
       
       Ingresa 1 para comprar: Rub Rojo
       Ingresa 2 para comprar: Sal Ahumada Original
       Ingresa 3 para comprar: Salsa de Ajo
       Ingresa 4 para comprar: Salsa de Serrano
       Ingresa 5 para comprar: Rub del norte
       Ingresa 6 para comprar: Rub de la Costa
       Ingresa 7 para comprar: Chihcarron de habanero
       Ingresa 8 para comprar: Salsa de Aguachile

       `).toLowerCase()

      if (eleccionProductos == null) {
        alert("Gracias parrillero, el fuego nos une");
        break;
      }

      if (eleccionProductos == "no") {
        break;
      }

      agregarProductosAlCarrito(PRODUCTOS, parseInt(eleccionProductos));

      console.log(sumarTotal()); // muestro el total de carrito al añadir productos.
    }

    let eliminar = prompt(`
       Deseas eliminar algun producto del carrito?
       Si / No
       `).toLowerCase();


    if (eliminar == "si") {
      console.log(CARRITO);

      eliminarProductoCarrito();

      alert(`
       La suma total del carrito es: MXN ${sumarTotal(CARRITO)}
       `)
      // FINAL COMPRANDO SIN FILTRO ELIMINANDO PROD. DEL CARRITO

    } else {

      alert(`
       La suma total del carrito es: MXN${sumarTotal(CARRITO)};
       `)
      // FINAL COMPRANDO SIN FILTRO SIN ELIMINAR PROD. DEL CARRITO

    }
  }



} else {
  alert("Gracias Parrillero, el fuego nos une");
  // FINAL DIRECTO SIN COMPRAR
}


























//* FUNCIONES UTILIZADAS

// FILTRO DE PRECIO
function filtrarPrecio(precio) {

  let filtrados = PRODUCTOS.filter(producto => producto.precio >= precio);

  return filtrados;
}



// VER PRODUCTOS FILTRADOS
function VerFiltro(productosFiltrados) {
  let verProdFiltrados = "Para terminar digite el número 0 (cero)\n\nProductos filtrados: \n"

  productosFiltrados.forEach((producto) => verProdFiltrados += `
  ID: ${producto.id} - ${producto.nombre}  -  MXN ${producto.precio}
  `);
  return (verProdFiltrados);
};







// AGREGAR PRODUCTOS AL CARRITO
function agregarProductosAlCarrito(array, id) {

  let producto = array.find(producto => producto.id === id);

  let productoEnCarrito = CARRITO.find(producto => producto.id === id);


  if (productoEnCarrito) {

    productoEnCarrito.cantidad++; // Si esta en el carrito aumenta cantidad en +1
    console.log(CARRITO);

  } else { // Si no esta en el carrito, lo agrego con .push

    producto.cantidad = 1;
    CARRITO.push(producto);
    console.log(CARRITO);
  }

}


// ELIMINAR PRODUCTOS DEL CARRITO
function eliminarProductoCarrito() {

  let id = Number(prompt("Ingresa el producto que deseas agregar"));

  let productoEnCarrito = CARRITO.find(producto => producto.id === id); // busco el ID en carrito.


  if (productoEnCarrito) { // Si existe coincidencia => resto cantidad o elimino totalmente

    if (productoEnCarrito.cantidad > 1) { // si la cantidad es >1 resto cantidad en -1

      productoEnCarrito.cantidad--;
      console.log(CARRITO);

    } else {

      CARRITO.splice(CARRITO.indexOf(productoEnCarrito), 1);
      // splice buscará desde la coincidencia estricta de indexOf y elminará el total del objeto del array CARRITO

      console.log(CARRITO);
    }


  } else {

    alert("Ups parrillero el prodcuto no existe en el carrito")
  }
}






// SUMAR TOTAL (precio) DEL CARRITO 
function sumarTotal() {

  let total = 0;

  CARRITO.forEach(producto => {

    total += producto.cantidad * producto.precio;
  })

  return total;
}