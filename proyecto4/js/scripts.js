import {Carrito} from './ClaseCarrito.js'

(()=>{

    const parrafo=document.querySelector('.contenedor-carrito p');
    const seccionOferta=document.querySelector('section.oferta');

    let carrito;

    const url='http://localhost:3000/products';
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            //carrito=new Carrito(data);
            
            //Se guardan los productos en local-storage para poder recuperarlos y pintarlos
            localStorage.setItem('productosAGoodShop', JSON.stringify(data));
            
        })
        .catch(error=>console.log(error));
    
    document.addEventListener('DOMContentLoaded',inicializarDom);

    //obtener los productos del local storage
    let productosString = localStorage.getItem('productosAGoodShop');
    let productosObj=JSON.parse(productosString);
    
    function inicializarDom(e){

        //pintar el número de elementos que contiene el carrito
        carrito=new Carrito(productosObj.products);

        //actualiza en el DOM el número de elementos del carrito
        const numCarrito=carrito.obtenerCarrito()[1];
        //const numCarrito=0;
        parrafo.textContent=numCarrito;

        //Se guarda la variable carrito en local-storage
        localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));

        //inicializar el DOM de index.html con los productos de JSON que he guardado en local-storage
        const botones=document.querySelectorAll('.boton-prod');
        botones[0].addEventListener('click',actualizarCarrito);
        botones[1].addEventListener('click',actualizarCarrito);
        botones[2].addEventListener('click',actualizarCarrito);
        botones[3].addEventListener('click',actualizarCarrito);
        botones[4].addEventListener('click',actualizarCarrito);

        const seccion0=document.querySelector('.oferta');
        const titulo0=seccion0.getElementsByTagName('H1');
        titulo0[0].textContent=productosObj.products[0].title;

        const seccion1=document.querySelector('.prod1');
        const titulo1=seccion1.getElementsByTagName('H2');
        titulo1[0].textContent=productosObj.products[1].title;

        const seccion2=document.querySelector('.prod2');
        const titulo2=seccion2.getElementsByTagName('H2');
        titulo2[0].textContent=productosObj.products[2].title;

        const seccion3=document.querySelector('.prod3');
        const titulo3=seccion3.getElementsByTagName('H2');
        titulo3[0].textContent=productosObj.products[3].title;

        const seccion4=document.querySelector('.prod4');
        const titulo4=seccion4.getElementsByTagName('H2');
        titulo4[0].textContent=productosObj.products[4].title;

        const precio0=document.querySelector('span.precio');
        precio0.textContent=productosObj.products[0].price + productosObj.currency;

        const precios=document.querySelectorAll('span.precio-producto');
        precios[0].textContent=productosObj.products[1].price + productosObj.currency;
        precios[1].textContent=productosObj.products[2].price + productosObj.currency;
        precios[2].textContent=productosObj.products[3].price + productosObj.currency;
        precios[3].textContent=productosObj.products[4].price + productosObj.currency;

        
}    
    function actualizarCarrito(event){
        /*
        let carrito=new Carrito(productosObj.products.filter(producto=>producto.SKU===event.target.id));
        console.log(carrito);
        totalCarrito={...totalCarrito,...carrito.products}
        */

        const seccion=event.target.parentNode;
        console.log(carrito);
        console.log(event.target.id);
        console.log(seccion.querySelector('input[type="number"]').value);
        carrito.actualizaUnidades(event.target.id,seccion.querySelector('input[type="number"]').value);
        localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));
        const numCarrito=carrito.obtenerCarrito()[1];
        parrafo.textContent=numCarrito;

        //Mensaje de éxito si ya existe previamente lo elimina
        if(document.querySelector('p.exito')){
            document.querySelector('p.exito').remove();
        }

        //Crea el párrafo con el mensaje de éxito
        const parrafoExito=document.createElement('P');
        parrafoExito.textContent='Se ha añadido el/los produto/s al carrito';
        parrafoExito.classList.add('exito');
        window.scrollTo(0, 0);
        seccionOferta.prepend(parrafoExito);

        //A los tres segundos elimina el mensaje de éxito
        setTimeout(()=>{
            parrafoExito.remove();
        },3000);
        

    }
  
})()