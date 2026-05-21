const inputCep = document.querySelector('#cep')
const btnBuscaCep = document.querySelector('#busca-cep')
const resultado = document.querySelector('.resultado')

function getValueInput() {
    const cep = inputCep.value
    getCep(cep)
}

function renderizaData(data) {
    const { city, address, district, state } = data
    resultado.innerHTML = `
        <p>cidade: ${city} - ${state}</p>
        <p>bairro: ${district}</p>
        <p>rua: ${address}</p>
    `
}

async function getCep(cep) {
    const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    const data = await resposta.json()
    renderizaData(data)
}

btnBuscaCep.addEventListener("click", getValueInput)