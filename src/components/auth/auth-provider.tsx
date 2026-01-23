// components/AuthInitializer.tsx
"use client";


import { useGetMe } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';

import { useEffect, useRef } from 'react';

export default function AuthInitializer({ token }: { token?: string }) {
    const initialized = useRef(false);
    const setToken = useAuth(state => state.setToken);
    const setUser = useAuth(state => state.setUser);
    if (!token) return null;
    const { data, isLoading } = useGetMe();

    useEffect(() => {
        if (!initialized.current && token) {

            setToken(token); // Set the token in Zustand memory
            setUser(data!); // Set the user data in Zustand memory
            initialized.current = true;
            console.log("AuthInitializer set token:", token);
        }
    }, [token, data, isLoading, setToken]);

    return null;
}