(()=>{

    document.addEventListener('DOMContentLoaded',function(){
        
        const botonDom=document.querySelector('#botonTodos');
        const botonTierraDom=document.querySelector('#botonTierra');
        const botonAguaDom=document.querySelector('#botonAgua');
        const botonFuegoDom=document.querySelector('#botonFuego');
        const dialogoDom=document.querySelector('#miDialogo');
        const xDom=document.querySelector('#miDialogo p');
        const arrayTierraDom=document.querySelectorAll('.tierra');
        const arrayAguaDom=document.querySelectorAll('.agua');
        const arrayFuegoDom=document.querySelectorAll('.fuego');
        const arrayImagenes=document.querySelectorAll('.imagen');

        botonDom.addEventListener('click',mostrarTodas);
        botonTierraDom.addEventListener('click',mostrarImgsTierra);
        botonAguaDom.addEventListener('click',mostrarImgsAgua);
        botonFuegoDom.addEventListener('click',mostrarImgsFuego);
        xDom.addEventListener('click',cerrarModal);
        
        for(let imagen of arrayImagenes){
            imagen.addEventListener('click',abrirModal);
        }

        function abrirModal(event){
            dialogoDom.showModal();
            console.log(event.target.src);
            const imagenDialogoDom=dialogoDom.querySelector('img');
            imagenDialogoDom.src=event.target.src;

        }
        function cerrarModal(){
            dialogoDom.close();
        }
        function mostrarTodas(){
            location.reload();
        }
        function mostrarImgsTierra(){
            
            arrayTierraDom[0].style.visibility='show';
        
            for(let agua of arrayAguaDom){
                agua.style.visibility='hidden';
            }
            
            for(let fuego of arrayFuegoDom){
                fuego.style.visibility='hidden';
            }
        
            
        }
        function mostrarImgsAgua(){
            //reload();
            arrayTierraDom[0].style.visibility='hidden';
            
            for(let agua of arrayAguaDom){
                agua.style.visibility='show';
            }
            
            for(let fuego of arrayFuegoDom){
                fuego.style.visibility='hidden';
            }
        }
        function mostrarImgsFuego(){
            //reload();
            arrayTierraDom[0].style.visibility='hidden';
            
            for(let agua of arrayAguaDom){
                agua.style.visibility='hidden';
            }
            
            for(let fuego of arrayFuegoDom){
                fuego.style.visibility='show';
            }
        }
    })

})()