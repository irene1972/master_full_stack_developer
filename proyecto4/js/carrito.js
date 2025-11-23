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
    
    const numCarrito=carrito.obtenerCarrito()[1];
    parrafo.textContent=numCarrito;

    //pintar el contenido del carrito
    carrito.products.products.forEach(producto=>{
      div.innerHTML+=`
                    <p>SKU: ${producto.SKU}</p>
                    <h1>${producto.title}</h1>
                    <p>Precio: ${producto.price}${carrito.products.currency}</p>
                    <p class="cantidad">Cantidad: ${producto.qty}</p>
                    `;
    });
    div.innerHTML+=`
                    <h2 class="total">CANTIDAD TOTAL DE PRODUCTOS: ${carrito.obtenerCarrito()[1]}</h2">
                    <h2 class="total">CANTIDAD A PAGAR: ${carrito.obtenerCarrito()[2]} €</h2>
                  `;
    document.appendChild(div);
  }
        

})()