function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("erro verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("sex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img= document.createElement('img')
        if (fsex[0].checked){
            genero = "Homem"
            if (idade > 0 && idade <10){
                //crianca
                img.setAttribute('src', 'imagens_ex1/hkid.jpg')
            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'imagens_ex1/hjov.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens_ex1/hadult.jpg')

            }else{
                //idoso
                img.setAttribute('src', 'imagens_ex1/hido.jpg')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade > 0 && idade <10){
                //crianca
                img.setAttribute('src', 'imagens_ex1/mkid.jpg')

            }else if (idade < 20){
                //jovem
                img.setAttribute('src', 'imagens_ex1/mjov.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens_ex1/madult.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens_ex1/mido.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}