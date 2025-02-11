import ApiService from './ApiService';
import jwt_decode from 'jwt-decode';
const ENDPOINTS = {
    LOGIN: 'token/obtain/',
    LOGOUT: '',
    INSTAGRAM: 'api/instagram/',
    PASSWORD_CHANGE: 'api/user/password/',
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
        this.addInstagramSession(data);
    
        return data;
    }

    deleteInstagram = async payload => {

        const {data} = await this.apiClient.delete(`${ENDPOINTS.INSTAGRAM}${payload}/`);
        return data;
    }


    getInstagramUser = () => {
        const ig = JSON.parse(localStorage.getItem('instagram'));
        if(ig){
            return ig.username;
        }
        
        const jwt = JSON.parse(localStorage.getItem('user'));
        let decoded;
        try {
            decoded = jwt_decode(jwt.access);

        } catch (error) {
            return null;
        }

        return decoded.instagram;
    }

    getInstagramPicture = () => {
        const ig = JSON.parse(localStorage.getItem('instagram'));
        if(ig){
            return ig.picture;
        }

        const jwt = JSON.parse(localStorage.getItem('user'));
        let decoded;
        try {
            decoded = jwt_decode(jwt.access);

        } catch (error) {
            return null;
        }

        return decoded.instagram_picture;
    }

    getEmail = () => {
        const jwt = JSON.parse(localStorage.getItem('user'));
        let decoded ;
        try {

            decoded = jwt_decode(jwt.access);

        } catch (error) {
            return null;
        }

        return decoded.email;
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
            'Authorization': `JWT  ${token}`,
            'Content-Type': 'application/json'
        });
    }
    destroySession = () => {
        localStorage.clear();
        this.api.removeHeaders(['Authorization']);
    }

    createSession = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.setAuthorizationHeader(user.access);
    }

    addInstagramSession = data => {
        localStorage.setItem('instagram', JSON.stringify(data));
    }

    login = async payload => {
        const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, payload);
        this.createSession(data);
        return data;
    }

    changePassword = async payload => {
        console.log("OVO SAM DOBIO DA SALJEM ", payload);
        const {data} = await this.apiClient.put(ENDPOINTS.PASSWORD_CHANGE, payload);
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