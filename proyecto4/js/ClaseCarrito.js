export class Carrito{
        constructor(productos){
            this.products=productos;
        }
        actualizaUnidades(sku,unidades){
            const prod=this.products.forEach(producto=>{
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
            const totalQty=this.products.reduce((acc,producto)=>acc+parseInt(producto.qty),0);
            const totalEuros=this.products.reduce((acc,producto)=>acc+parseInt(producto.price),0);
            const arrayCarrito=[this.products,totalQty,totalEuros];
            return arrayCarrito;
        }
        
    }