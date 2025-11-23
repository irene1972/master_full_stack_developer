export class Carrito{
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