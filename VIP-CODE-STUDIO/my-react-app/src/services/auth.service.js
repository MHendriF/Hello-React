import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const login = (data, callback) => {
    axios
        .post('https://fakestoreapi.com/auth/login', data)
        .then((response) => {
            callback(true, response.data.token);
            console.log(response);
        })
        .catch((error) => {
            callback(false, error);
        });
};

export const getUsername = (token) => {
    const decoded = jwtDecode(token);
    console.log(decoded);
    return decoded.user;
};

const verifyToken = (token) => {
    console.log(jwtDecode(token));
};

export default { verifyToken };
