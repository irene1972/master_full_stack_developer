import {Carrito} from './ClaseCarrito.js'

(()=>{

    const parrafo=document.querySelector('.contenedor-carrito p');

    let productos='{"currency": "€","products": [{"SKU": "0K3QOSOV4V","title": "iFhone 13 Pro","price": "938.99","qty":"1"},{"SKU": "TGD5XORY1L","title": "Cargador","price": "49.99","qty":"1"},{"SKU": "IOKW9BQ9F3","title": "Funda de piel","price": "79.99","qty":"1"},{"SKU": "GJH765JL9I","title": "Base de carga inalámbrica","price": "85.23","qty":"1"},{"SKU": "LER971GH3P","title": "Pantalla plana 10 pulgadas","price": "105.72","qty":"1"}]}';
    let productosObj=JSON.parse(productos);
    //console.log(productosObj);

    /*
    class Carrito{
        constructor(productos){
            this.products=productos;
        }
        actualizaUnidades(sku,unidades){
            const prod=this.products.products.forEach(producto=>{
                if(producto.SKU===sku){
                    producto.qty=parseInt(unidades)+parseInt(producto.qty);
                }
            });

        }
        obtenerInformacionProducto(sku){
            const info=this.products.filter(producto=>producto.SKU===sku);
            return info;
        }
        
        obtenerCarrito(){
            const total=this.products.products.reduce((acc,producto)=>acc+parseInt(producto.qty),0);
            const arrayCarrito=[this.products,total];
            return arrayCarrito;
        }
        
    }
    */
    let carrito=new Carrito(productosObj);

    document.addEventListener('DOMContentLoaded',inicializarDom);
    function inicializarDom(){
        
        //actualiza en el DOM el número de elementos del carrito
        const numCarrito=carrito.obtenerCarrito()[1];
        parrafo.textContent=numCarrito;

        //inicializar el DOM del index.html
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

        //Add evento en cart para que se guarde la variable carrito en local-storage
        localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));
    }

    function actualizarCarrito(event){
        const seccion=event.target.parentNode;
        carrito.actualizaUnidades(event.target.id,seccion.querySelector('input[type="number"]').value);
        localStorage.setItem('carritoAGoodShop', JSON.stringify(carrito));
        const numCarrito=carrito.obtenerCarrito()[1];
        parrafo.textContent=numCarrito;
    }
    //let carrito=new Carrito(productosObj);
    //console.log(carrito);
    //carrito.actualizaUnidades('TGD5XORY1L',3);
    //console.log(carrito);
    //let producto=carrito.obtenerInformacionProducto('TGD5XORY1L');
    //console.log(producto);
    //const totalCarrito=carrito.obtenerCarrito();
    //console.log(totalCarrito);

})()