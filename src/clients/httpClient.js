import ky from 'ky';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const httpClient =  ky.extend({
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