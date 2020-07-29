const { default: ApiService } = require("./ApiService");

const ENDPOINTS = {
    FRIEND: 'api/friend/',

}

class FriendService extends ApiService {

    postFriend = async payload => {
        const { data } = await this.apiClient.post(ENDPOINTS.FRIEND, payload);

        return data;
    }

    getFriends = async () => {
        const { data } = await this.apiClient.get(ENDPOINTS.FRIEND);
        console.log(" PRIJATELJI ", data);
        return data;
    }

    deleteFriend = async payload => {
        const { data } = await this.apiClient.delete(`${ENDPOINTS.FRIEND}${payload}/`);
        return data;
    }

}

const friendService = new FriendService();
export default friendService;