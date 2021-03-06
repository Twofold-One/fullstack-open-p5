import axios from 'axios';
const baseUrl = '/api/login';

interface loginT {
    username: string;
    password: string;
}

const login = async (credentials: loginT) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
};

export default { login };
