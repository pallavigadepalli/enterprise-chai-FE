
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND
});

axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // Handle request headers here
        console.log(config)
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);



export default axiosInterceptorInstance;
