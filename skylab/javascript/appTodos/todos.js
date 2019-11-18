var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    //tudo oq estiver dentro da <ul> ficará como vazio
    listElement.innerHTML = '';

    //passa por todos os txts qe estão no array todos.
    for(todo of todos){
        //cria o elemento <li> e coloca o txt qe está localizado no todo
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //criando opção de excluir
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        //procura o índice que está no array e retorna a posição
        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

        //adiciona o texto dentro do elemento <li> e depois adiciona o elemento <li> no elemento <ul>
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    //valor do input
    var todoText = inputElement.value;

    //adiciona na última posiçao do array
    todos.push(todoText);

    //apagar texto atual no input
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(posicao){
    //remove baseado na posiçao que passar
    todos.splice(posicao, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //setar o valor no localStorage e convertendo para string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}