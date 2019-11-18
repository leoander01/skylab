var peoples = [{
        "nome": "Rodrigo Davi Oliveira",
        "idade": 53,
        "cpf": "19059054598",
        "rg": "331273536",
        "data_nasc": "15\/08\/1966",
        "signo": "Leão",
        "mae": "Sophie Lívia Gabriela",
        "pai": "Ricardo Mateus Gael Oliveira",
        "email": "rodrigodavioliveira__rodrigodavioliveira@megasurgical.com.br",
        "senha": "TzdYU848df"
    },
    {
        "nome": "Rafael Murilo Sérgio Monteiro",
        "idade": 66,
        "cpf": "12713245710",
        "rg": "404132662",
        "data_nasc": "12\/05\/1953",
        "signo": "Touro",
        "mae": "Ana Raimunda",
        "pai": "Fábio Enrico Monteiro",
        "email": "rafaelmurilosergiomonteiro..rafaelmurilosergiomonteiro@badauy.com",
        "senha": "CH9yRWGq64",
    },
    {
        "nome": "Larissa Eduarda Costa",
        "idade": 70,
        "cpf": "57555414180",
        "rg": "120118178",
        "data_nasc": "04\/08\/1949",
        "signo": "Leão",
        "mae": "Lavínia Hadassa",
        "pai": "Otávio Noah Costa",
        "email": "larissaeduardacosta..larissaeduardacosta@br.rhodia.com",
        "senha": "W2Lg4EDDng",
    },
    {
        "nome": "Stefany Rafaela Rodrigues",
        "idade": 44,
        "cpf": "97462688212",
        "rg": "177454052",
        "data_nasc": "10\/09\/1975",
        "signo": "Virgem",
        "mae": "Isabela Larissa",
        "pai": "Martin Samuel Mateus Rodrigues",
        "email": "sstefanyrafaelarodrigues@iega.com.br",
        "senha": "xr5PWH2L9F",
    },
    {
        "nome": "Sophia Lívia Souza",
        "idade": 25,
        "cpf": "81872360513",
        "rg": "287344769",
        "data_nasc": "13\/11\/1994",
        "signo": "Escorpião",
        "mae": "Eduarda Fabiana Vanessa",
        "pai": "Vicente Augusto Renan Souza",
        "email": "ssophialiviasouza@ortovip.com.br",
        "senha": "Hj3BTGW9I4",
        "cep": "49700970",
        "endereco": "Praça Manoel Cardoso Souza 25",
        "numero": 187,
        "bairro": "Centro",
        "cidade": "Capela",
        "estado": "SE",
        "telefone_fixo": "7938256631",
        "celular": "79997158277",
        "altura": "1,84",
        "peso": 52,
        "tipo_sanguineo": "A-",
        "cor": "roxo"
    }
]; 

console.log(peoples.length);

function renderPeoples(){
    for(i=0; i<peoples.length; i++){
        console.log(peoples[i].nome);
    }
}

renderPeoples();