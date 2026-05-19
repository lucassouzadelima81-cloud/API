const botao = document.querySelector("#buscaCotacao")
const resultado = document.querySelector("#resultado")
const valorDolarInput = document.querySelector("#valorDolar")
function buscaCotacao() {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (dados) {
            const valorDolar = Number(dados.USDBRL.bid)
            const valorFormato = valorDolar.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })
            const valorDolar = Number(valorDolarInput.value)
            const valorReal = valorDolar * valorDolar
            const valorRealFormato = valorReal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
            })

            resultado.textContent = 'valor do dólar: ' + valorDolar +
                ' / valor em reais: ' + valorRealFormato
        })
}

botao.addEventListener("click", () => buscaCotacao())