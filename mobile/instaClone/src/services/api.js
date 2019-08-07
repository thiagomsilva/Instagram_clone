import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' //Se for emulação via USB tem que colocar o IP da rede local ex: http://192.168.0.3/3333
})

export default api;