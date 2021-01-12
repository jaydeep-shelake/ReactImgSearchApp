import axios from 'axios';

export default axios.create({
    baseURL:`https://api.unsplash.com`,
    headers:{
        Authorization:'Client-ID v8ZKJAGdPlYY07jiIUAP6BRoj8xbbk4zpk0sL6DICgc'
       }
});