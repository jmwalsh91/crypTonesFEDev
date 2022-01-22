import axios from "axios";
const localUrl = 'http://127.0.0.1:4000/'
const remoteUrl = 'https://cryptonesbackend1.herokuapp.com/' 


export const axiosDataAV = axios.create({
        baseURL: remoteUrl,
        timeout: 10000,
      });
    

export const axiosUser = axios.create({
    baseURL: remoteUrl + 'user',
    timeout: 10000
  });

  