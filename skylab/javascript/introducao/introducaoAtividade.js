//01
var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 1293,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
};

console.log('O usuário mora em '+endereco.cidade+' / '+endereco.uf+' no bairro '+endereco.bairro+', na rua "'+endereco.rua+'" com número '+endereco.numero+'.\n');

//02
function pares(x, y){
    while(x <= y){
        if(x % 2 == 0){
            console.log(x);
        }
        x++;
    }
}

pares(0, 20);

//03
function temHabilidade(skills){
    var a = skills.indexOf('Node') ? true : false;
    console.log(a);
}

var skills = ['JS', 'React', 'Node'];
temHabilidade(skills);

//04
function experiencia(anos){
    if(anos === 0 || anos === 1){
        console.log('Iniciante');
    }else if(anos === 2 || anos === 3){
        console.log('Intermediário');
    }else if(anos === 4 || anos === 5 || anos === 6){
        console.log('Avançado');
    }else{
        console.log('Jedi Master');
    }
}

var anoEstudo = 1;
experiencia(anoEstudo)

//05
function exibirUsuarios(usuarios){
    for(var i=0; i<usuarios.length; i++){
        console.log('O '+usuarios[i].nome+' possui as habilidades: '+usuarios[i].habilidades.join(', '));
    }
}

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

exibirUsuarios(usuarios)