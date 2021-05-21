import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3003",
    headers: {
        "Content-type": "application/json",
    }
});

export default instance;