let slides = ['./src/assets/slide1.png', './src/assets/slide2.jpg', './src/assets/slide3.jpg', './src/assets/slide4.jpg'];
let index = 0;
let delay = 4000;

function slideshow(){
    document.getElementById("imgBanner").src=slides[index];
    index++;

    if (index == slides.length){
        index = 0;
    }
    setTimeout('slideshow()', delay);
}

slideshow();

//Contador
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

//Enviar contato
function enviar_contato(){
    var email = document.getElementById("E-mail_contato").value
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email != ""){
        if (regex.test(email)) {
            alert("Contato enviado com sucesso!! ✅")
        } else {
            alert("Contato inválido ❌");
        }
    } else {
        alert("Existem campos não preenchidos")
    }
}
