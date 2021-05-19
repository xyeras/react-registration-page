import axios from 'axios';

const instance = axios.create({
    baseURL: "",
    headers: {
        "Content-type": "application/json",
    }
});

export default instance;