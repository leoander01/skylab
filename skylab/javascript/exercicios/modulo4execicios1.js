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
var h1Element = document.querySelector('#app h1');

//buscar o usuário ao clicar no botão
function buscarUser(){
    //tudo oq estiver dentro de <h1> ficará como vazio
    h1Element.innerHTML = '';
    //tudo oq estiver dentro da <ul> ficará como vazio
    ulElement.innerHTML = '';
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
        //mensagem de erro, caso não encontre nenhum usuário
        var errorMessage = document.createTextNode('ERROR 404! User '+inputElement.value+' not found!  :(' );
        //adiciona a mensagem dentro do h1Element
        h1Element.append(errorMessage);
        console.warn(error);
    });
}