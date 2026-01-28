export class Carrito{
        constructor(productos=[]){
            this.products=productos;
        }
        existeProducto(sku){
            return this.products.find(producto=>producto.SKU===sku);
        }
        actualizaUnidades(sku,unidades){
            this.products.forEach(producto=>{
                if(producto.SKU===sku){
                    producto.qty=parseInt(unidades)+parseInt(producto.qty);
                }
            });

        }
        actualizaUnidadesPorPrimeraVez(sku,unidades){
            this.products.forEach(producto=>{
                if(producto.SKU===sku){
                    producto.qty=parseInt(unidades);
                }
            });

        }

        incrementaUnidades(sku){
            this.products.forEach(producto=>{
                if(producto.SKU===sku){
                    producto.qty=Number(producto.qty)+1;
                }
            });

        }
        decrementaUnidades(sku){
            this.products.forEach(producto=>{
                if(producto.SKU===sku){
                    producto.qty-=1;
                }
            });
        }
        obtenerInformacionProducto(sku){
            const info=this.products.filter(producto=>producto.SKU===sku);
            return info;
        }
        
        obtenerCarrito(){
            const totalQty=this.products.reduce((acc,producto)=>acc+parseInt(producto.qty),0);
            const totalEuros=this.products.reduce((acc,producto)=>acc+(parseFloat(producto.price)*parseInt(producto.qty)),0);
            const arrayCarrito=[this.products,totalQty,totalEuros];
            return arrayCarrito;
        }
        
    }