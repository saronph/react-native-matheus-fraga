import axios from 'axios';

// convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

const api = axios.create({
  // baseURL: 'https://sujeitoprogramador.com/', filmes
  baseURL: 'https://free.currencyconverterapi.com/api/v5/',
});

export default api;
