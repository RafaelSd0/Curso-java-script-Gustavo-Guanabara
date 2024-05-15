let num = document.getElementById('numero');
        let list = document.getElementById('listNum');
        let res = document.getElementById('res');
        let arr = [];

        function verificarNumeroRepetido(numero, array) {
            return array.includes(numero);
        }

        function enviar(){
            if(num.value == 0){
                window.alert('Erro: digite um número por favor.');
            } else if(num.value < 1 || num.value > 100){
                window.alert('Erro: digite um número entre 1 e 100.');
            } else if(verificarNumeroRepetido(parseInt(num.value), arr)){
                window.alert('Erro: você digitou um número já existente.');
            } else {
                let item = document.createElement('option');
                item.textContent = "Número " + num.value + " adicionado";
                list.appendChild(item);
                add(parseInt(num.value));
            }
        }

        function add(numero){
            arr.push(numero);
        }

        function result(){
            let soma = 0;
            for (let i = 0; i < arr.length; i++) {
                soma += arr[i];
            }
            var media = soma / arr.length;

            var menor = Math.min(...arr);
            var maior = Math.max(...arr);

            res.innerHTML = `<p>A média dos valores é ${media}</p>`;
            res.innerHTML += `<p>O menor dos valores é ${menor}</p>`;
            res.innerHTML += `<p>O maior dos valores é ${maior}</p>`;
            res.innerHTML += `<p>Os valores são:</p>`;
            for (let i = 0; i < arr.length; i++) {
                res.innerHTML += `${arr[i]} `;
            }
        }
