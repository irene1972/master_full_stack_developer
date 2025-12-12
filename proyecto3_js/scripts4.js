(()=>{

    document.addEventListener('DOMContentLoaded',function(){
        const boton=document.querySelector('#bot');
        const resulDom=document.querySelector('#resul');
        boton.addEventListener('click',obtenerDatos);
        function obtenerDatos(){
            const inputRadio=document.querySelector('#radio');
            const radio=Number(inputRadio.value);
            
            function diametro(r){
                return 2*r;
            }

            function perimetro(r){
                return 2*Math.PI*r;
            }

            function area(r){
                return Math.PI*(r**2);
            }
            console.log('diam:',diametro(radio));
            console.log('perim:',perimetro(radio));
            console.log('area:',area(radio));
            resulDom.innerHTML=`
                                <h1>El radio es: ${radio}</h1>
                                <h2>El diámetro es: ${diametro(radio)}</h2>
                                <h2>El perímetro es: ${perimetro(radio)}</h2>
                                <h2>El área es: ${area(radio)}</h2>
                                `;
        }
    })

})()