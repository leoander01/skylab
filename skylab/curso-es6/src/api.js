import axios from 'axios';
//criar uma configuração do axios
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;