import { Carrito } from './ClaseCarrito.js'

(() => {

  document.addEventListener('DOMContentLoaded', inicializarDom);

  const div = document.getElementById('resultado');
  const parrafo = document.querySelector('.contenedor-carrito p');

  function inicializarDom() {
    //obtener carrito del local-storage
    const carritoString = localStorage.getItem('carritoAGoodShop');
    //si el acarrito está vacío
    if (carritoString == null | carritoString === '{"products":[]}') {
      
      let carrito;
      carrito = new Carrito();
      async function obtenerDatosDeAPI() {
        let datosJSON;
        try {
          const response = await fetch('http://localhost:3000/products');
          const data = await response.json();
          datosJSON = data;
          

          return datosJSON;
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      }

      obtenerDatosDeAPI().then(data => {
        
        const divResultado = document.querySelector('#resultado');
        let textHtml = '';
        textHtml += `<div class="contenedor">
            <div class="info">Producto</div>
            <div class="cantidad">Cantidad</div>
            <div class="precio">Unidad</div>
            <div class="total">Total</div>
        </div>`;

        data.products.forEach(prod => {
          textHtml += `<div class="contenedor">
                    <div class="info">
                        <h2>${prod.title}</h2>
                        <p>Ref: ${prod.SKU}</p>
                    </div>
                    <div class="cantidad">
                        <p class="menos">-</p>
                        <p class="qty">0</p>
                        <p class="mas">+</p>
                    </div>
                    <div class="precio">
                        <p>${prod.price} €</p>
                    </div>
                    <div class="total">
                        <p>0 €</p>
                    </div>
                </div>`;
        });

        textHtml += `<div class="resumen">
                    <h2>Total</h2>
                    <div class="prod">
                    </div>
                    <div class="tot">
                        <p>TOTAL</p>
                        <p class="tot">0 €</p>
                    </div>
                </div>`;

        divResultado.innerHTML = textHtml;
        const divsMas = document.querySelectorAll('p.mas');
        const divsMenos = document.querySelectorAll('p.menos');
        
        divsMas.forEach(elem => {
          
          elem.addEventListener('click', function () {
            const divProd = document.querySelector('div.prod');
            const divParent = elem.parentElement.parentElement;
            const divTitle = divParent.querySelector('div.info h2');
            const divCantidad = divParent.querySelector('p.qty');
            const contenidoReferencia = divParent.querySelector('div.info p').textContent;
            const divPrice = divParent.querySelector('div.precio p');
            const divTotal = divParent.querySelector('div.total p');
            const longitud = divPrice.textContent.length;
            const precio = parseFloat(divPrice.textContent.substring(0, longitud - 2));
            let cantidad = divCantidad.textContent;

            if (cantidad == 0) {
              carrito.actualizaUnidadesPorPrimeraVez(contenidoReferencia.substring(5), 1);
              divCantidad.textContent = 1;
              divTotal.textContent = precio + ' €';

              //actualizar total
              const divInformacion = document.createElement('div');
              divInformacion.classList.add('informacion');
              const parrafoInformacion = document.createElement('p');
              parrafoInformacion.classList.add('informacion');
              parrafoInformacion.textContent = divTitle.textContent;
              const parrafoPrice = document.createElement('p');
              parrafoPrice.classList.add('price');
              parrafoPrice.textContent = divTotal.textContent;

              divInformacion.appendChild(parrafoInformacion);
              divInformacion.appendChild(parrafoPrice);

              divProd.appendChild(divInformacion);

              carrito.obtenerCarrito();

              //lo guardo en local-storage
              localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

            } else {
              console.log('entramos');
              carrito.incrementaUnidades(contenidoReferencia.substring(5));
              divCantidad.textContent = Number(cantidad) + 1;
              cantidad = divCantidad.textContent;
              divTotal.textContent = (Number(cantidad) * precio)+' €';

              //actualizar total
              const divsInfo = document.querySelectorAll('div.informacion');
              
              divsInfo.forEach(divInfo => {
             
                if (divInfo.querySelector('p.informacion').textContent === divTitle.textContent) {
                  
                  const divPrecio = divInfo.querySelector('p.price');
                  divPrecio.textContent = divTotal.textContent;
                }
              });

              //lo guardo en local-storage
              localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));
            }

            let sumatorio = 0;
            const arrayParrafoSubtotales = document.querySelectorAll('p.price');
            
            arrayParrafoSubtotales.forEach(parrafoSubtotal => {
              const pSub=parrafoSubtotal.textContent;
              const longitudPSub=pSub.length;
              const pSubNumber=pSub.substring(0,longitudPSub-2);
              console.log(pSubNumber);
              sumatorio += parseFloat(pSubNumber);
              

            });
            document.querySelector('p.tot').textContent = sumatorio + ' €';

          });

        });

        divsMenos.forEach(elem => {
          elem.addEventListener('click', function () {
            const divParent2 = elem.parentElement.parentElement;
            const divTitle2 = divParent2.querySelector('div.info h2');
            const divCantidad2 = divParent2.querySelector('p.qty');
            const contenidoReferencia2 = divParent2.querySelector('div.info p').textContent;
            const divPrice2 = divParent2.querySelector('div.precio p');
            const divTotal2 = divParent2.querySelector('div.total p');
            const longitud2 = divPrice2.textContent.length;
            const precio2 = parseFloat(divPrice2.textContent.substring(0, longitud2 - 2));
            let cantidad2 = divCantidad2.textContent;

            if (cantidad2 > 0) {
              carrito.decrementaUnidades(contenidoReferencia2.substring(5));
              divCantidad2.textContent = Number(cantidad2) - 1;
              cantidad2 = divCantidad2.textContent;
              divTotal2.textContent = (Number(cantidad2) * precio2)+' €';

              //actualizamos el total
              const divsInformacion = document.querySelectorAll('div.informacion');
              divsInformacion.forEach(divInfo => {
                
                if (divInfo.querySelector('p.informacion').textContent === divTitle2.textContent) {
                  
                  if (cantidad2 == 0) {
                    divInfo.remove();
                  } else {
                    divInfo.querySelector('p.price').textContent = divTotal2.textContent;
                  }

                }
              });

              //lo guardo en local-storage
              localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));
            }

            let sumatorio = 0;
            const arrayParrafoSubtotales = document.querySelectorAll('p.price');
            arrayParrafoSubtotales.forEach(parrafoSubtotal => {
              sumatorio += parseFloat(parrafoSubtotal.textContent);
              

            });
            document.querySelector('p.tot').textContent = sumatorio;

          });
        });
      });

    } else {
      //si el carrito está lleno
      const carritoObj = JSON.parse(carritoString);

      //pintar el número de elementos que contiene el carrito

      const carrito = new Carrito(carritoObj.products);

      parrafo.textContent = carrito.products.lenth;

      //pintar el contenido del carrito
      div.innerHTML += `
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
      <h2>${producto.title}</h2>
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
        const parrafoTotal = contenedor.querySelector('div.total p');

        parrafoMas.addEventListener('click', () => {
          carrito.incrementaUnidades(producto.SKU);

          //lo guardo en local-storage
          localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

          parrafoQty.textContent = producto.qty;
          parrafoTotal.textContent = (producto.qty * producto.price)+' €';

          //actualizamos el total
          const divsInformacion = document.querySelectorAll('div.informacion');

          if(producto.qty==1){
            //creamos una línea de subtotales
            const dProd=document.querySelector('div.prod');

            const dInf=document.createElement('div');
            dInf.classList.add('informacion');

            const pInf=document.createElement('p');
            pInf.classList.add('informacion');
            pInf.textContent=producto.title;

            const pPrice=document.createElement('p');
            pPrice.classList.add('price');
            pPrice.textContent=producto.price+' €';

            dInf.appendChild(pInf);
            dInf.appendChild(pPrice);

            dProd.appendChild(dInf);
            
          }else{
            //actualizamos la línea
            divsInformacion.forEach(info => {
            const ref = info.querySelector('p')?.textContent;
              const total = info.querySelector('p.price');

              if (ref === producto.title) {
                total.textContent = (producto.qty * producto.price)+' €';
              }
            
          });
          }

          

          const divTot = document.querySelector('p.tot');
          let total = carrito.obtenerCarrito()[2].toFixed(2);
          divTot.textContent = total;

        });

        parrafoMenos.addEventListener('click', () => {
          if (producto.qty > 0) {
            carrito.decrementaUnidades(producto.SKU);

            //lo guardo en local-storage
            localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

            parrafoQty.textContent = producto.qty;
            parrafoTotal.textContent = (producto.qty * producto.price)+' €';

            //actualizamos el total
            const divsInformacion = document.querySelectorAll('div.informacion');

            divsInformacion.forEach(info => {
              const parrafoReferencia=info.querySelector('p');
              const ref = parrafoReferencia?.textContent;
              const total = info.querySelector('p.price');

              if (ref === producto.title) {
                total.textContent = (producto.qty * producto.price)+' €';
              }
              
              if(producto.qty == 0){
                if(ref===producto.title){
                  parrafoReferencia.remove();
                total.remove();
                }
              }
            });
            
            const divTot = document.querySelector('p.tot');
            let total = carrito.obtenerCarrito()[2].toFixed(2);
            divTot.textContent = total;

            
          }
        });

        div.appendChild(contenedor);
      });

      let prods = carrito.obtenerCarrito()[1];
      let total = carrito.obtenerCarrito()[2].toFixed(2);

      const divResumen = document.createElement('div');
      divResumen.classList.add('resumen');

      const divH2 = document.createElement('h2');
      divH2.textContent = 'Total';
      divResumen.appendChild(divH2);

      const divProds = document.createElement('div');
      divProds.classList.add('prod');
      divResumen.appendChild(divProds);

      carrito.products.forEach(producto => {
        if (producto.qty > 0) {
          divProds.innerHTML += `
                        <div class='informacion'>
                            <p class='informacion'>${producto.title}</p>
                            <p class='price'>${(producto.price * producto.qty).toFixed(2)} €</p>
                        </div>
                      `;
        }

      });

      const divTot = document.createElement('div');
      divTot.classList.add('tot');
      divTot.innerHTML = `
                          <p>TOTAL</p>
                          <p class='tot'>${total} €</p>`;
      divResumen.appendChild(divTot);

      div.appendChild(divResumen);




    }



  }


})()