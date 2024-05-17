function medidas(){
    const contador1 = document.getElementById("contador")
    let valor1=0;
    let tempo1 =setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML =`+ ${valor1}`;

        if(valor1 ==52){
            clearInterval(tempo1)
        }
    })
}