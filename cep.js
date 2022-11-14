const cep = document.getElementById('cep');
cep.addEventListener('blur', (e) => {
    let Cep = document.getElementById('cep').value;
    let saerch = cep.value.replace("-", "") //replace = retorna uma nova string com algumas ou todas as correspondencias de um padrao substituidas por um determinado caractere.
    console.log(saerch)
    fetch(`https://viacep.com.br/ws/${saerch}/json/`)
        .then((response) => {
            response.json()
                .then(data => {
                    console.log(data);
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('ddd').value = data.ddd;
                    document.getElementById('ibge').value = data.ibge;
                    document.getElementById('localidade').value = data.localidade;
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('uf').value = data.uf;
                    document.getElementById('siafi').value = data.siafi;
                })
        })
})

function enviar() {
    let bairro = document.getElementById('bairro').value;
    let ddd = document.getElementById('ddd').value;
    let ibge = document.getElementById('ibge').value;
    let localidade = document.getElementById('localidade').value;
    let logradouro = document.getElementById('logradouro').value;
    let uf = document.getElementById('uf').value;
    let siafi = document.getElementById('siafi').value;

    let json =  {
        'bairro': bairro,
        'ddd': ddd,
        'ibge':ibge,
        'localidade': localidade,
        'logradouro': logradouro,
        'uf': uf,
        'siafi': siafi,
    }
    console.log(json)
};

