const { default: ApiService } = require("./ApiService");


const ENDPOINTS = {
    POST: 'api/post/',
    POST_USER: 'api/post/user/',
}
class PostService extends ApiService {


    getPosts = async params => {
        const { data } = await this.apiClient.get(`${ENDPOINTS.POST_USER}${params}`);
        return data;
    }

    deletePost = async params => {
        const { data } = await this.apiClient.delete(`${ENDPOINTS.POST}${params}`);
        return data;
    }
}

const postService = new PostService();
export default postService;