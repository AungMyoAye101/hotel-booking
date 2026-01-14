'use client';
import { Button } from '@heroui/react'
import { LogIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    return (
        <nav
            className='z-50 absolute top-6 left-0 right-0 flex justify-between items-center bg-transparent max-w-7xl mx-auto'
        >
            <div>
                <Link href="/" className='flex items-center gap-4 '>
                    <Image
                        src="/booking-logo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className='bg-white rounded-full'

                    />
                    <h1 className='text-2xl font-bold text-white'>Booking</h1>
                </Link>
            </div>

            <div>
                <Button variant='solid' color='primary' className='text-sm'>
                    <Link href="/login" className='flex items-center gap-2'>

                        Signup <LogIn />
                    </Link>
                </Button>
            </div>
        </nav >
    )
}

export default Header