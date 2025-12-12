(()=>{

    document.addEventListener('DOMContentLoaded',function(){
        const tablaDom=document.querySelector('#tablas');

        let str_html=``;

        for(let j=1;j<10;j++){
            str_html+=`<div class='tabla'><ul>`;
            for(let i=0;i<10;i++){
                str_html+=`
                <li>${j} x ${i} = ${i*j}</li>    
                `;
            }
            str_html+=`</ul></div>`;
        }

        tablaDom.innerHTML=str_html;
    })

})()