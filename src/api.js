import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4e1aa96a568add36e8e3cbc4274fd907",
        language: "ko-KR"
    }
});

export default api;
