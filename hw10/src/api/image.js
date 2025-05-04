import axios from 'axios';

const catData = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search'
});

export const getCat = async () => {
    const { data } = await catData.get();
    return data;
}