
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND
});

axiosInterceptorInstance.interceptors.request.use(
    (config) => {
        // Handle request headers here
        console.table(
            config.data
        )
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

axiosInterceptorInstance.interceptors.response.use(
    (response) => {
        console.table({
            data: response.data,
            url: response.config.url,
            status: response.status,
        });
        return response;
    },
    (error) => {
        console.table(
            {
                url: error.config.url,
                status: error.response.status,
            }
        )
        return Promise.reject(error);
    }
);


export default axiosInterceptorInstance;
