// components/AuthInitializer.tsx
"use client";



import api from '@/hooks/axios-api';
import { useAuth } from '@/stores/auth-store';
import { APIResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';


import { useEffect, useRef } from 'react';

export default function AuthInitializer() {
    // const initialized = useRef(false);
    // const setToken = useAuth(state => state.setToken);
    // const setUser = useAuth(state => state.setUser);
    // const { data, isLoading, error } = useQuery({
    //     queryKey: ['refresh'],
    //     queryFn: async () => {
    //         const { data } = await api.post<APIResponse<any>>('/auth/refresh');
    //         return data.result;
    //     },
    //     retry: 1
    // })

    // console.log(data, isLoading, error)
    // useEffect(() => {
    //     if (!token) return;
    //     if (isLoading) return;
    //     if (!data) return;
    //     if (initialized.current) return;


    //     setToken(token);
    //     setUser(data);
    //     initialized.current = true;

    // }, [token, isLoading, data, setToken, setUser])


    return null;
}