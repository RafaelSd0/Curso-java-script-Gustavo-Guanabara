function gerador(){
    var num = document.getElementById("numero");

    let res = document.getElementById("res");

    if(num.value.length == 0){
        window.alert("Preencha todos os dados");
    } else {
        let r = Number(num.value);
       
        for(var i = 1; i <= 10; i++){
            var tab = i * r;
            let item = document.createElement('option')
            item.text += `${i} * ${r} = ${tab} `
            res.appendChild(item)
        }
    }
}
