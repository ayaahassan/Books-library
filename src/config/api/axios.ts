import axios, {AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})
axiosInstance.interceptors.request.use((config) => {
    const UserToken = localStorage.getItem('token');
    config.headers.Authorization = UserToken;

    return config;

})