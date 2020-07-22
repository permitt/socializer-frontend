import axios from 'axios'

class HttpService {
    constructor(options = {}) {
        this.client = axios.create(options);

    }


}

const options = { baseURL: 'http://localhost:8000' };
const httpService = new HttpService(options);

export default httpService;