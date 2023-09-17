import axios from "axios";
import {baseURL} from "../constans";

const token = process.env.REACT_APP_API_READ_ACCESS_TOKEN;
// const apiKey = process.env.REACT_APP_API_KEY;

const apiService = axios.create({baseURL});

apiService.interceptors.request.use( config => {
    config.headers.Accept = 'application/json';
    config.headers.Authorization = `Bearer ${token}`;
    // config.headers.Authorization = `Bearer ${access}`;
    return config;

});

export {
    apiService
}