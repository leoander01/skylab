const arr = [1, 3, 4, 5, 8, 9];
// //map percorrer cada item do vetor
const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);
//pega o valor de retorna e soma com o próximo
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);
// //filtrar os itens a serem removidos
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);
//encontrar informação dentro do array
const find = arr.find(item => item === 4);
console.log(find);
const teste = () => ({ nome: 'Diego' });
console.log(teste());

//REST = pegar o resto das propriedades
const usuario = {
    nome: 'Leo',
    idade: 20,
    empresa: 'SysBit'
}

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

function soma(...params) {
    return params.reduce((total, next) => total+next);
}
console.log(soma(1, 3, 4));

//SPREAD = propagar/repassar objetos
const arr = [1, 2, 3];
const arr1 = [4, 5, 6];
const arr2 = [...arr, ...arr1]
console.log(arr2);
const usuario = {
    nome: 'Leo',
    idade: 20,
    empresa: 'SysBit'
}
const usuario1 = {...usuario, nome: 'Teste'}
console.log(usuario1);

//TEMPLATE LITERALS
const nome = 'Leo';
const idade = 20;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Object Short Syntax
const nome = 'Leo';
const idade = 20;

const usuario = {
    nome,
    idade,
    empresa: 'SysBit'
};
console.log(usuario);

//Webpack Server
import { soma, sub } from './funcoes';
console.log(soma(1, 4));
console.log(sub(1, 4));

//ASYNC
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();

//AXIOS
import axios from 'axios';
class Api {
    static async getUserInfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err) {
            console.warn('Erro na API.');
        }
    }
}

Api.getUserInfo('leoander01');
Api.getUserInfo('leoander01asda');