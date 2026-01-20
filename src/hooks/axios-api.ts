"use client";
import { BASE_URL } from "@/lib";
import { useAuth } from "@/stores/auth-store";
import axios from "axios";


export const apiClient = axios.create({
    baseURL: BASE_URL || "http://localhost:5000/api/v1",
    withCredentials: true
});

apiClient.interceptors.request.use(config => {
    const token = useAuth(s => s.token)
    if (token) {
        config.headers.Authorization = `Barer ${token}`
    }
    return config;
},
    error => {
        return Promise.reject(error)
    })

