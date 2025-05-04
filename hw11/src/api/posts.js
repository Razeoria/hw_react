import axios from 'axios';

const postsInstance = axios.create({
    baseURL: 'https://67e3b7d12ae442db76d13f32.mockapi.io/api/posts'
})

export const getPosts = async () => {
    const { data } = await postsInstance.get('/');
    return data;
}

export const getSinglePostById = async id => {
    const { data } = await postsInstance.get(`/${id}`);
    return data;
}