// components/AuthInitializer.tsx
"use client";

import { useAuth } from '@/stores/auth-store';
import { useEffect, useRef } from 'react';

export default function AuthInitializer({ token }: { token?: string }) {
    const initialized = useRef(false);
    const setToken = useAuth(state => state.setToken);

    if (!initialized.current && token) {
        setToken(token); // Set the token in Zustand memory
        initialized.current = true;
        console.log("AuthInitializer set token:", token);
    }

    return null;
}