import ApiService from './ApiService';

const ENDPOINTS = {
    LOGIN: 'token/obtain/',
    LOGOUT: '',
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
        console.log(jwt);
        return jwt && jwt.access ? !this.isExpired(jwt) : false

    }

    isExpired = ({ access }) => {
        if (!access)
            return null;

        const jwt = JSON.parse(atob(access.split('.')[1]));
        console.log('isExp ,', jwt);
        console.log("A OVO JE REZ ", jwt && jwt.exp && jwt.exp * 1000);
        const exp = jwt && jwt.exp && jwt.exp * 1000;


        return Date.now() > exp;
    }

    setAuthorizationHeader = token => {
        this.api.attachHeaders({
            JWT: `JWT ${token}`
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
        console.log("WOO payload ", payload);
        const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, payload);
        console.log("ODGOVOR WOO ", data);
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