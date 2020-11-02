import ApiService from './ApiService';
import jwt_decode from 'jwt-decode';
const ENDPOINTS = {
    LOGIN: 'token/obtain/',
    LOGOUT: '',
    INSTAGRAM: 'api/instagram/',
}

class AuthService extends ApiService {
    constructor() {
        super();
        this.init();
    }

    init = () => {
        const token = this.getToken();
        if (token)
            this.setAuthorizationHeader(token);


    }

    isAuthenticated = () => {

        const jwt = JSON.parse(localStorage.getItem('user'));
        return jwt && jwt.access ? !this.isExpired(jwt) : false

    }

    addInstagram = async payload => {
        const { data } = await this.apiClient.post(ENDPOINTS.INSTAGRAM, payload);
        return data;
    }


    getInstagramUser = () => {
        const jwt = JSON.parse(localStorage.getItem('user'));
        let decoded;
        try {
            console.log("NOPEDEKORIDAN ", jwt);

            decoded = jwt_decode(jwt.access);
            console.log("DEKORIDAN ", decoded);

        } catch (error) {
            return null;
        }

        return decoded.instagram;
    }


    isExpired = ({ access }) => {
        if (!access)
            return null;

        const jwt = JSON.parse(atob(access.split('.')[1]));
        const exp = jwt && jwt.exp && jwt.exp * 1000;


        return Date.now() > exp;
    }

    setAuthorizationHeader = token => {
        this.api.attachHeaders({
            Authorization: `JWT  ${token}`,
            'content-type': 'application/json'
        });
    }
    destroySession = () => {
        localStorage.clear();
        this.api.removeHeaders(['Authorization']);
    }

    createSession = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.setAuthorizationHeader(user);
    }

    login = async payload => {
        const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, payload);
        this.createSession(data);
        return data;
    }

    logout = () => {
        this.destroySession();
        return { status: 'success' };
    }

    getToken = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user).access : undefined;
    }
}

const authService = new AuthService();
export default authService; 