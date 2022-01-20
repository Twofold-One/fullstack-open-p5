import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const setToken = (newToken: string) => {
    token = `bearer ${newToken}`;
};

// TODO deal with Authorization header in request later
export const config = {
    headers: { Authorization: token },
};

const getAll = async () => {
    const request = await axios.get(baseUrl);
    return request.data;
};

export default {
    getAll,
    setToken,
};
