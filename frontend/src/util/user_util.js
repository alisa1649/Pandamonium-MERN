import axios from 'axios';

export const getCurrentUserInfo  = () => {
    return axios.get('/api/users/current')
}

export const editCurrentUserInfo = (newInfo) => {
    return axios.patch('/api/users/current', newInfo)
}