"use client";
import { BASE_URL } from "@/lib";
import { useAuth } from "@/stores/auth-store";
import { APIResponse } from "@/types";
import axios from "axios";



export const apiClient = axios.create({
    baseURL: BASE_URL || "http://localhost:5000/api/v1",
    withCredentials: true
});

apiClient.interceptors.request.use(config => {
    const token = useAuth.getState().token;
    console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
    error => {
        return Promise.reject(error)
    })

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original_request = error.config;
        if (error.response.status === 401 && !original_request._retry) {
            original_request._retry = true;
            try {

                const { data } = await axios.post<APIResponse<{ token: string }>>(`${BASE_URL}/auth/refresh`, "", {
                    withCredentials: true
                })
                const token = data.result.token;
                useAuth.getState().setToken(token);
                //set heaser with new token
                original_request.headers.Authorization = `Bearer ${token}`;
                return apiClient(original_request)

            } catch (refreshError) {
                console.warn(refreshError)
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

