'use client';
import { Button } from '@heroui/react'
import { LogIn, LogInIcon, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';


const Header = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false)

    const navBackground = isScroll ? "bg-blue-800" : "bg-blue-800/20"

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setIsScroll(scroll > 100)

        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`${navBackground} w-full z-50 fixed top-0 left-0 right-0 px-4 py-2`}>
            <nav
                className=' flex justify-between items-center  max-w-7xl mx-auto'
            >
                <div>
                    <Link href="/" className='flex items-center gap-4 '>
                        <Image
                            src="/brand-logo.svg"
                            alt="Logo"
                            width={60}
                            height={60}
                            className='bg-white rounded-full'

                        />
                        <h1 className='text-2xl font-bold text-white uppercase'>Booking</h1>
                    </Link>
                </div>

                <div className='hidden sm:flex'>
                    <Button variant='solid' color='primary' href='/login' radius='sm' >

                        Signup
                        <LogInIcon />

                    </Button>
                </div>
                <div className='sm:hidden'>
                    <Button variant='solid' radius='full' isIconOnly>
                        <Menu />
                    </Button>
                </div>
            </nav >
        </header>
    )
}

export default Header