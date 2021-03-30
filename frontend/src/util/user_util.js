import axios from 'axios';

export const getCurrentUserInfo  = () => {
    return axios.get('api/users/current')
}