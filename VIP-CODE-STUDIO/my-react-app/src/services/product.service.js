import axios from 'axios';

export const getProducts = async (callback) => {
    axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
            callback(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
