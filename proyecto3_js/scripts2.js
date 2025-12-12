(()=>{

    document.addEventListener('DOMContentLoaded',function(){
        const boton=document.getElementById('btn');
        const numero1Dom=document.getElementById('numero1');
        const numero2Dom=document.getElementById('numero2');
        boton.addEventListener('click',operar);
        
        function operar(e){
            const numero1=Number(numero1Dom.value);
            const numero2=Number(numero2Dom.value);

            let acumulador=0;

            for(i=numero1;i<=numero2;i++){

                if(i%2===1){
                    acumulador += i;
                }
            }
            console.log(acumulador);
            pintar(numero1,numero2,acumulador);
        }

        function pintar(n1,n2,acum){
            const resultDom=document.querySelector('#result');
            resultDom.innerHTML=`<h2>La suma de números impares entre el número ${n1} y el número ${n2} es de ${acum}</h2>`;
        }

    })

})()