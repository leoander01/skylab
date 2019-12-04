import api from './api';

class App {
    constructor() {
        this.repositories = [];
        //pegando o elemento repo-form (formulário)
        this.formEl = document.getElementById('repo-form');
        //pegando o elemento repo-list (lista)
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');
        //registrar os eventos
        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = (event) => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        //caso o input não tenha nenhum elemento, ele ira parar a função
        if(repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);
            
            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            //limpar o input
            this.inputEl.value = '';

            this.render();
        } catch(err) {
            alert('O repositório não existe!!');
        }
        this.setLoading(false);
    }
    
    //apagar conteúdo da lista e renderizar do zero.
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo =>  {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();