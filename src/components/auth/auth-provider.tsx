// components/AuthInitializer.tsx
"use client";



import api from '@/hooks/axios-api';
import { useGetMe } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';
import { APIResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';



export default function AuthInitializer() {
    const { setUser, logout } = useAuth(s => s)
    const { data: user, isSuccess, isError } = useGetMe()


    useEffect(() => {
        if (isSuccess) {
            if (user) {
                setUser(user)
            }
        }
        if (isError) {
            logout()
        }

    }, [isSuccess, isError])

    return null;
}