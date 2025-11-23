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
    console.log(carrito);
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
    document.appendChild(div);
  }
        

})()