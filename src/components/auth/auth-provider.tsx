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
    console.log(data, "user")
    console.log(initialized.current, "initialized")

    if (!isLoading && data && !initialized.current) {
        setToken(token);
        setUser(data);
        initialized.current = true;
    }
    return null;
}