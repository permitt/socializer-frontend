const { default: ApiService } = require("./ApiService");

const ENDPOINTS = {
    FRIEND: 'api/friend/',

}

class FriendService extends ApiService {

    postFriend = async payload => {
        const { data } = await this.apiClient.post(ENDPOINTS.FRIEND, payload);

        return data;
    }

}

const friendService = new FriendService();
export default friendService;