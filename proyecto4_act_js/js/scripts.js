import {Carrito} from './ClaseCarrito.js'

(()=>{

    const parrafo=document.querySelector('.contenedor-carrito p');
    const seccionOferta=document.querySelector('section.oferta');

    let carrito;
    let productos;

    document.addEventListener('DOMContentLoaded',pintarHtml);

    function pintarHtml(){
        
    const url='http://localhost:3000/products';

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            productos=data;
            //creo un carrito con los cinco productos que tengo en la api
            //carrito=new Carrito(data.products);
            
            //lo guardo en local-storage
            //localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

            //actualiza en el DOM el número de elementos del carrito
            //const numCarrito=carrito.obtenerCarrito()[1];
            

            if(localStorage.getItem('carritoAGoodShop')===null || localStorage.getItem('carritoAGoodShop')===undefined){
                const numCarrito=0
                parrafo.textContent=numCarrito;
                carrito=new Carrito();
            }else{
                const carritoString = localStorage.getItem('carritoAGoodShop');
                const carritoObj=JSON.parse(carritoString);
                carrito=new Carrito(carritoObj.products);
                const numCarrito=carrito.obtenerCarrito()[1];
                parrafo.textContent=numCarrito;
            }

            const botones=document.querySelectorAll('.boton-prod');
            botones[0].addEventListener('click',actualizarCarrito);
            botones[1].addEventListener('click',actualizarCarrito);
            botones[2].addEventListener('click',actualizarCarrito);
            botones[3].addEventListener('click',actualizarCarrito);
            botones[4].addEventListener('click',actualizarCarrito);
            
            const seccion0=document.querySelector('.oferta');
            const titulo0=seccion0.getElementsByTagName('H1');
            titulo0[0].textContent=data.products[0].title;

            const seccion1=document.querySelector('.prod1');
            const titulo1=seccion1.getElementsByTagName('H2');
            titulo1[0].textContent=data.products[1].title;

            const seccion2=document.querySelector('.prod2');
            const titulo2=seccion2.getElementsByTagName('H2');
            titulo2[0].textContent=data.products[2].title;

            const seccion3=document.querySelector('.prod3');
            const titulo3=seccion3.getElementsByTagName('H2');
            titulo3[0].textContent=data.products[3].title;

            const seccion4=document.querySelector('.prod4');
            const titulo4=seccion4.getElementsByTagName('H2');
            titulo4[0].textContent=data.products[4].title;

            const precio0=document.querySelector('span.precio');
            precio0.textContent=data.products[0].price + data.currency;

            const precios=document.querySelectorAll('span.precio-producto');
            precios[0].textContent=data.products[1].price + data.currency;
            precios[1].textContent=data.products[2].price + data.currency;
            precios[2].textContent=data.products[3].price + data.currency;
            precios[3].textContent=data.products[4].price + data.currency;
            
        })
        .catch(error=>console.log(error));
    }
     
    function actualizarCarrito(event){     
        const seccion=event.target.parentNode;
        let idProd=event.target.id;
        const producto=carrito.existeProducto(idProd);
        let cantidad=seccion.querySelector('input[type="number"]').value;
        
        if(producto){
            //si ya existe el producto en el carrito solo hemos de actualizar
            carrito.actualizaUnidades(idProd,cantidad);

        }else{
            //si no existe el producto en el carrito lo introducimos

            //primero extraemos los datos del producto escogido
            const producto=productos.products.filter(producto=>producto.SKU===idProd);

            //los productos del carrito son los que ya contenía más el producto escogido
            let products=[...carrito.products,...producto];

            carrito=new Carrito(products);

            if(cantidad>1){
                carrito.actualizaUnidades(idProd,cantidad-1);

            }  
        }

        //lo guardo en local-storage
        localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

        const numCarrito=carrito.obtenerCarrito()[1];
        parrafo.textContent=numCarrito;

        mensajeDeExito('Se ha añadido el/los produto/s al carrito');
        

    }
    function mensajeDeExito(mensaje){
        //Mensaje de éxito si ya existe previamente lo elimina
        if(document.querySelector('p.exito')){
            document.querySelector('p.exito').remove();
        }

        //Crea el párrafo con el mensaje de éxito
        const parrafoExito=document.createElement('P');
        parrafoExito.textContent=mensaje;
        parrafoExito.classList.add('exito');
        window.scrollTo(0, 0);
        seccionOferta.prepend(parrafoExito);

        //A los tres segundos elimina el mensaje de éxito
        setTimeout(()=>{
            parrafoExito.remove();
        },3000);
    }
  
})()