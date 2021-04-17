import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "0dc94dac-47e1-48e2-bb52-a9e489fbe156"
    }
})
export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            });
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})

    }
}


export const authAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            });
    }
}



