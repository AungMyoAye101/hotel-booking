'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import dynamic from 'next/dynamic';

const ThemeProvider = dynamic(() => import("next-themes").then(mod => mod.ThemeProvider), { ssr: false })


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme='light'>
            <HeroUIProvider>
                <ToastProvider />
                {children}
            </HeroUIProvider>
        </ThemeProvider>
    )
}