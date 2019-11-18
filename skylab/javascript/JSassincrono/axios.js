axios.get('https://api.github.com/users/leoander01')
    //vai ser executado se chegar no resolve
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });