var minhaPromise = function(){
    //Promise = class, resolve e reject são funções, resolve = sucesso, reject = s/ sucesso.
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/leoander01');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //se o status for 200 (sucesso)
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

minhaPromise()
    //vai ser executado se chegar no resolve
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });