import axios from 'axios';
import ky from 'ky';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const httpKyClient =  ky.extend({
    prefixUrl : baseUrl,
    hooks:{
        "header":{
            'Content-Type': 'application/json'
        }
    },
    afterRequest : (response)=>{ console.log(response);},
    retry : {
        limit: 2,
        statusCodes: [401]
    }
})

export const httpAxiosClient = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: 'http://localhost:3000/',
    afterRequest: (response)=>{ console.log(response);},
    retry: {
        limit: 2,
        statusCodes: [401]
    },
})