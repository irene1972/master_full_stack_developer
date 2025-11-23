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
    })

})()
