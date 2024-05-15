function carregar(){
    var mensagen = window.document.getElementById("msg")
    var imagen = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
   
    mensagen.innerHTML = `<h2>Agora são ${hora} horas.</h2>`
    if(hora >= 0 && hora < 5){
        //madrugada
        imagen.src = "imagens_ex1/pexels-irina-iriser-1083807.jpg"
        document.body.style.backgroundColor = "black"
    } else if(hora >= 5 && hora <12){
        //manha
        imagen.src = "imagens_ex1/pexels-nadezhda-moryak-4630004.jpg"
        document.body.style.backgroundColor = "bisque"
    }else if(hora >= 12 && hora < 19){
        //tarde
        imagen.src = "imagens_ex1/pexels-guillaume-hankenne-2792070.jpg"
        document.body.style.backgroundColor = "lightblue"

    }else{
        //noite
        imagen.src = "imagens_ex1/pexels-reynaldo-brigworkz-brigantty-771883.jpg"
        document.body.style.backgroundColor = "gray"
    }

}