var xhr  = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/leoander01');
xhr.send(null);

xhr.onreadystatechange = function(){
    //se a variável voltou pra gente
    if(xhr.readyState === 4) {
        //JSON porque o retorno é um JSON, então temos qe fazer a conversão 
        console.log(JSON.parse(xhr.responseText));
    }
}