function contar(){
    var inicio = document.getElementById("inicio");
    var final = document.getElementById("final");
    var passo = document.getElementById("passo");
    let res = document.getElementById("res");

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert("Preencha todos os dados");
    } else {
        let i = Number(inicio.value);
        let o = Number(final.value);
        let k = Number(passo.value);
        for(var c = i; c <= o; c+=k){
            res.innerHTML += `${c} `;
        }
        res.innerHTML += 'fim';
    }
}
