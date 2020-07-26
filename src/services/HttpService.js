import axios from 'axios';

class HttpService {
    constructor(options = {}) {
        this.client = axios.create(options);
        this.client.interceptors.response.use(this.handleSuccessResponse, this.handleErrorResponse);

    }
    handleSuccessResponse(response) {
        return response;
    }

    handleErrorResponse(error) {
        const { status } = error.response;

        switch (status) {
            case 401: {
                this.unauthorizedCallback();
                break;
            }
            default:
                break;
        }

        return Promise.reject(error);
    }
    attachHeaders = headers => {
        Object.assign(this.client.defaults.headers, headers);
    }

    removeHeaders = headers => {
        headers.forEach(head => delete this.client.defaults.headers[head]);
    }
}

const options = { baseURL: 'http://localhost:8000' };
const httpService = new HttpService(options);

export default httpService;