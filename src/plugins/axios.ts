/* eslint-disable dot-notation */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const createService = (
    baseURL?: string,
    contentType: string = 'application/json',
): AxiosInstance => {
    return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
    baseURL?: string,
    contentType: string = 'application/json',
): AxiosInstance => {
    const config: AxiosRequestConfig = baseConfig(baseURL, contentType);
    config.responseType = 'blob';
    return interceptAuth(config);
};

const baseConfig = (
    baseURL?: string,
    contentType: string = 'application/json',
) => {
    return {
        baseURL: baseURL,
        headers: {
            'Accept-Language': 'en-US',
            'Content-Type': contentType,
        },
    };
};

const interceptAuth = (config: AxiosRequestConfig) => {
    const instance = axios.create(config);
    instance.interceptors.request.use(
        (config: any) => {

            const token = localStorage.getItem('token')

            if (token) {
                config.headers['Authorization'] = `bearer ${token}`;
            }


            return config;
        },
        (error) => {
            Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response.status === 401) {


                window.location.href = '/login';

            } else if (error.response.status === 400) {
                if (error.response.data && error.response.data.code) {
                    switch (Number(error.response.data.code)) {
                        case 42:
                            window.location.href = '/page-not-found';
                            break;
                        default:
                            break;
                    }
                }
            }
            return Promise.reject(error);
        },
    );
    return instance;
};
