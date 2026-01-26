// components/AuthInitializer.tsx
"use client";


import { useGetMe } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';

import { useEffect, useRef } from 'react';

export default function AuthInitializer({ token }: { token?: string }) {
    const initialized = useRef(false);
    const setToken = useAuth(state => state.setToken);
    const setUser = useAuth(state => state.setUser);
    const { data, isLoading } = useGetMe();

    useEffect(() => {
        if (!token) return;
        if (isLoading) return;
        if (!data) return;
        if (initialized.current) return;


        setToken(token);
        setUser(data);
        initialized.current = true;

    }, [token, isLoading, data, setToken, setUser])


    return null;
}