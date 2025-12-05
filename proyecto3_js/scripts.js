//metodos con arrays
const numeros=[2,11,4,40,100,8,101];
const as=numeros.map(elemento=>elemento*2);
const encontrar=numeros.find((elemento)=>elemento===100);
const encuentra=numeros.indexOf(100);
const filtrar=numeros.filter(elemento => {
    return elemento%2===0;
});
const filtra=numeros.filter(function(elemento){
    return elemento%2 === 1;
});
const ordenar=numeros.sort((a,b)=>a-b);
const sumar=numeros.reduce((acc,elemento)=>acc+elemento);
//console.log(sumar);

//consultas a una API con fetch
fetch('https://swapi.dev/api/people')
    .then(response=>response.json())
    .then(data=>{
        console.log(data.results);
        const soloNombres=data.results.map(persona=>persona.name);
        console.log(soloNombres);
        const edadTotal=data.results.reduce((acc,persona)=>acc+parseInt(persona.height),1000);
        console.log(edadTotal);
        /*
        soloNombres=[];
        console.log(data.results);
        data.results.forEach(persona=>{
            soloNombres.push(persona.name);
        });
        console.log(soloNombres);
        */
    });

(()=>{

    document.addEventListener('DOMContentLoaded',function(){
        const boton=document.getElementById('boton');
        boton.addEventListener('click',aviso);
        function aviso(event){
            console.log('Boton pulsado');
        }
        //******************************** EJERCICIO 1 *********************************** */
        /*
        const nombre=prompt('Hola, ¿Cómo te llamas?');
        const respuesta1=prompt(`${nombre}, ¿Cuál es la capital de Italia?`);
        
        if(respuesta1.toLowerCase()==='roma'){
            const respuesta2=prompt(`${nombre}, ¿Cuál es la capital de España?`);
            if(respuesta2.toLowerCase()==='madrid'){
                const respuesta3=prompt(`${nombre}, ¿Cuál es la capital de Francia?`);
                if(respuesta3.toLowerCase()==='paris'){
                    confirm(`Felicidades ${nombre}, todas las respuestas son correctas`);
                }else{
                    const h2Dom=document.querySelector('h2');
                    h2Dom.textContent=`${nombre} fallaste, ¡vuelve a intentarlo!`;
                }
            }else{
                confirm(`${nombre}, tienes que estudiar más`);
            }
        }else{
            confirm(`${nombre} fallaste, ¡vuelve a intentarlo!`);
        }
        */
       //************************************** EJERCICIO 2 *************************************** */
        /*
       const divDom=document.querySelector('div');
       const numero1=Number(prompt('Introducir el número 1'));
       const numero2=Number(prompt('Introducir el número 2'));

       if(numero1>numero2){
        divDom.textContent=`El número 1 (${numero1}) es MAYOR que el número 2 (${numero2})`;
       }else if(numero1<numero2){
        divDom.textContent=`El número 1 (${numero1}) es MENOR que el número 2 (${numero2})`;
       }else{
        divDom.textContent=`El número 1 (${numero1}) es IGUAL al número 2 (${numero2})`;
       }
       */
        //**************************************** EJERCICIO 2 MEJORADO ********************************************* */
        /*
        const divDom=document.querySelector('div');
        const input1Dom=document.querySelector('#numero1');
        const input2Dom=document.querySelector('#numero2');
        const btnDom=document.querySelector('#btn');

        btnDom.addEventListener('click',evaluar);
        function evaluar(){
            const numero1=input1Dom.value;
            const numero2=input2Dom.value;
            console.log(numero1,numero2);

            if(numero1>numero2){
        divDom.textContent=`El número 1 (${numero1}) es MAYOR que el número 2 (${numero2})`;
       }else if(numero1<numero2){
        divDom.textContent=`El número 1 (${numero1}) es MENOR que el número 2 (${numero2})`;
       }else{
        divDom.textContent=`El número 1 (${numero1}) es IGUAL al número 2 (${numero2})`;
       }
        }
        */
        //************************************ EJERCICIO 3 ************************************** */
        const divDom=document.querySelector('div');
        const inputDom=document.querySelector('#numero');
        const btnDom=document.querySelector('#calc');

        btnDom.addEventListener('click',calcular);

        function calcular(){
            const numero=inputDom.value;
            if(!numero){
                divDom.classList.add('rojo');
                divDom.textContent='No hay número introducido';
            }else if(Number(numero)===0){
                divDom.classList.remove('rojo');
                divDom.classList.add('amarillo');
                divDom.textContent='ES CERO!';
            }else if(Number(numero)%2===1){
                divDom.classList.remove('rojo');
                divDom.classList.remove('amarillo');
                divDom.classList.add('azul');

                if(Number(numero)%3>0){
                    divDom.textContent=`El ${numero} es IMPAR y no es múltiplo de 3`;
                }else{
                    divDom.textContent=`El ${numero} es IMPAR y es múltiplo de 3`;
                }
            }else{
                divDom.classList.remove('rojo');
                divDom.classList.remove('amarillo');
                divDom.classList.remove('azul');
                divDom.classList.add('verde');

                if(Number(numero)%3>0){
                    divDom.textContent=`El ${numero} es PAR y no es múltiplo de 3`;
                }else{
                    divDom.textContent=`El ${numero} es PAR y es múltiplo de 3`;
                }
            }
        }

    })

})()
