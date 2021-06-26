import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: process.env.REACT_APP_TS,
    apikey: process.env.REACT_APP_APIKEY,
    hash: process.env.REACT_APP_HASH,
  }
})