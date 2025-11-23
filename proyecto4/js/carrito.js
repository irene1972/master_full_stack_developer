import {Carrito} from './ClaseCarrito.js'

(()=>{

  document.addEventListener('DOMContentLoaded',inicializarDom);

  const div=document.getElementById('resultado');
  const parrafo=document.querySelector('.contenedor-carrito p');

  function inicializarDom(){
    //obtener carrito del local-storage
    const carritoString = localStorage.getItem('carritoAGoodShop');
    const carritoObj=JSON.parse(carritoString);

    //pintar el número de elementos que contiene el carrito
    
    const carrito=new Carrito(carritoObj.products);
    
    try {
      parrafo.textContent=carrito.products.lenth;
    } catch (error) {
      parrafo.textContent=carrito.products.products.lenth;
    }

    /*
    try {
      let numProductos=carrito.obtenerCarrito()[1];
      let totalPagar=carrito.obtenerCarrito()[2];
    } catch (error) {
      let numProductos=carrito.obtenerCarrito2()[1];
      let totalPagar=carrito.obtenerCarrito2()[2];
    }
    */
    //pintar el contenido del carrito
    try {
      carrito.products.forEach(producto=>{
      div.innerHTML+=`
                    <p>SKU: ${producto.SKU}</p>
                    <h1>${producto.title}</h1>
                    <p>Precio: ${producto.price} €</p>
                    <p class="cantidad">Cantidad: ${producto.qty}</p>
                    `;
    });
    } catch (error) {
      carrito.products.products.forEach(producto=>{
      div.innerHTML+=`
                    <p>SKU: ${producto.SKU}</p>
                    <h1>${producto.title}</h1>
                    <p>Precio: ${producto.price} €</p>
                    <p class="cantidad">Cantidad: ${producto.qty}</p>
                    `;
    });
    }

    let prods=carrito.obtenerCarrito2()[1];
    let total=carrito.obtenerCarrito2()[2];
    
    div.innerHTML+=`
                    <h2 class="total">CANTIDAD TOTAL DE PRODUCTOS: ${prods}</h2">
                    <h2 class="total">CANTIDAD A PAGAR: ${total} €</h2>
                  `;
    document.appendChild(div);
  }
        

})()