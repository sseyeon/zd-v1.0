import axios from "axios";

const API = axios.get({
    baseURL: "https://jeeolzzps5.execute-api.us-east-1.amazonaws.com/dev/docs/",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

export default API;