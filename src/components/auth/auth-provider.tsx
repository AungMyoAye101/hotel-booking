// components/AuthInitializer.tsx
"use client";



import api from '@/hooks/axios-api';
import { useGetMe } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';
import { APIResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';



export default function AuthInitializer({ token }: { token: string | undefined }) {
    const { setUser } = useAuth(s => s)
    const { data: user, error } = useGetMe()

    useEffect(() => {
        if (user) {
            setUser(user)
        }
    }, [token, user])
    if (error) {
        console.warn(error)
    }
    return null;
}