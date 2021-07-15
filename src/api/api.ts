import axios from "axios";

export const baseURL = "https://gateway.marvel.com/v1/public";

export const api = axios.create({
  baseURL,
  params: {
    ts: process.env.REACT_APP_TS,
    apikey: process.env.REACT_APP_APIKEY,
    hash: process.env.REACT_APP_HASH,
  },
});
