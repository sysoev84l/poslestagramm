import {GetItemsType, instance, APIResponseType} from "./api";



export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data) as Promise<APIResponseType>
    },
    follow(userId: number) {
        return instance.post<APIResponseType>(`follow/${userId}`, {})
            .then(res => res.data)
    }
}