// 01
// var checaIdade = function(idade){
//     return new Promise(function(resolve, reject){
//         if(idade>=18){
//             setTimeout( () => resolve('Maior ou igual a 18 anos. '), 2000);
//         }else{
//             setTimeout( () => reject('Menor que 18 anos.'), 2000);
//         }
//     });
// }

// checaIdade(13)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error);
//     });

// 02
//selecionando os elementos
var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

//buscar o usuário ao clicar no botão
function buscarUser(){
    //inputElement pegará o nome do usuário
    axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
    //vai ser executado se chegar no resolve
    .then(function(response) {
        //pegar o tamanho do array e passar um for
        for(var i=0; i<response.data.length; i++){
            //criar o elemento <li>, e pegar o texto que aparecerá na posição do array 
            var liElement = document.createElement('li');
            var nameText = document.createTextNode(response.data[i].name);
            //colocar os valores dentro de <li> e <ul>
            liElement.appendChild(nameText);
            ulElement.appendChild(liElement);
        }

        console.log(response.data);
    })
    .catch(function(error) {
        console.warn(error);
    });
}