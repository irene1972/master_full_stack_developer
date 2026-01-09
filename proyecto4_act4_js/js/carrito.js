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
    
    parrafo.textContent=carrito.products.lenth;

    //pintar el contenido del carrito
    div.innerHTML+=`
                    <div class='contenedor'>
                      <div class='info'>Producto</div>
                      <div class='cantidad'>Cantidad</div>
                      <div class='precio'>Unidad</div>
                      <div class='total'>Total</div>
                    </div>
                    `;
    carrito.products.forEach(producto => {

  const contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');

  contenedor.innerHTML = `
    <div class='info'>
      <h1>${producto.title}</h1>
      <p>Ref: ${producto.SKU}</p>
    </div>
    <div class='cantidad'>
      <p class='menos'>-</p>
      <p class='qty'>${producto.qty}</p>
      <p class='mas'>+</p>
    </div>
    <div class='precio'>
      <p>${producto.price} €</p>
    </div>
    <div class='total'>
      <p>${(producto.price * producto.qty).toFixed(2)} €</p>
    </div>
  `;

  const parrafoMas = contenedor.querySelector('.mas');
  const parrafoMenos = contenedor.querySelector('.menos');
  const parrafoQty = contenedor.querySelector('.qty');
  const parrafoTotal=contenedor.querySelector('div.total p');

  parrafoMas.addEventListener('click', () => {
    carrito.incrementaUnidades(producto.SKU);

    //lo guardo en local-storage
    localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

    parrafoQty.textContent=producto.qty;
    parrafoTotal.textContent=producto.qty*producto.price;

    //actualizamos el total
    const divsInformacion=document.querySelectorAll('div.informacion');
    
    divsInformacion.forEach(info=>{
      const ref=info.querySelector('p').textContent;
      const total=info.querySelector('p.price');
      
      if(ref===producto.title){
        total.textContent=producto.qty*producto.price;
      }
    });

    const divTot=document.querySelector('p.tot');
    let total=carrito.obtenerCarrito()[2].toFixed(2);
    divTot.textContent=total;

  });

  parrafoMenos.addEventListener('click', () => {
    if (producto.qty > 0) {
      carrito.decrementaUnidades(producto.SKU);

      //lo guardo en local-storage
      localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

      parrafoQty.textContent=producto.qty;
      parrafoTotal.textContent=producto.qty*producto.price;

      //actualizamos el total
      const divsInformacion=document.querySelectorAll('div.informacion');
      
      divsInformacion.forEach(info=>{
      const ref=info.querySelector('p').textContent;
      const total=info.querySelector('p.price');
      
      if(ref===producto.title){
        total.textContent=producto.qty*producto.price;
      }
    });
    const divTot=document.querySelector('p.tot');
    let total=carrito.obtenerCarrito()[2].toFixed(2);
    divTot.textContent=total;
    }
  });

  div.appendChild(contenedor);
});

    let prods=carrito.obtenerCarrito()[1];
    let total=carrito.obtenerCarrito()[2].toFixed(2);

    const divResumen= document.createElement('div');
    divResumen.classList.add('resumen');

    const divH2=document.createElement('h2');
    divH2.textContent='Total';
    divResumen.appendChild(divH2);

    const divProds=document.createElement('div');
    divProds.classList.add('prod');
    divResumen.appendChild(divProds);

    carrito.products.forEach(producto=>{ 
        if(producto.qty > 0){
          divProds.innerHTML+=`
                        <div class='informacion'>
                            <p class='informacion'>${producto.title}</p>
                            <p class='price'>${(producto.price * producto.qty).toFixed(2)} €</p>
                        </div>
                      `;
        }
        
        });

    const divTot=document.createElement('div');
    divTot.classList.add('tot');
    divTot.innerHTML=`
                          <p>TOTAL</p>
                          <p class='tot'>${total} €</p>`;
    divResumen.appendChild(divTot);

    div.appendChild(divResumen);

  

    

  }
        

})()