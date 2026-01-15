'use client'
import { Input } from '@heroui/react'
import { Facebook, FacebookIcon, Instagram, Phone, Twitter } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-slate-800 '>

            <section className='px-4 py-6 max-w-7xl mx-auto grid grid-cols-1 sm:grod-cols-2 md:grid-cols-3 gap-12 text-white'>
                <div className='space-y-4'>

                    <Image
                        src="/brand-logo.svg"
                        alt="Logo"
                        width={80}
                        height={80}
                        className=' rounded-full bg-white'
                    />


                    <h2 className='font-semibold text-lg '>Booking</h2>
                    <p className='text-sm text-white/80 text-balance'>We are committed to providing the best hotel booking experience. Our platform offers a wide range of hotels to choose from, ensuring you find the perfect stay for your needs.</p>


                    <div className='flex gap-4 items-center'>
                        <Phone />
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='font-semibold  '>CONTACT US</h2>
                    <Link href={'/'} className='block mb-2 text-white/90 hover:underline'>Home</Link>
                    <Link href={'/'} className='block mb-2 text-white/90 hover:underline'>Destinations</Link>
                    <Link href={'/'} className='block mb-2 text-white/90 hover:underline'>Hotels</Link>
                    <Link href={'/'} className='block mb-2 text-white/90 hover:underline'>About Us</Link>
                </div>
                <div className='space-y-4'>
                    <h1 className='font-semibold'>STAY UPDATED</h1>
                    <p className='text-sm text-balance'>Subscribe to our newsletter for travel inspiration and special offers.</p>
                    <Input type='email' placeholder='your email' radius='sm' size='sm' />
                </div>
            </section>
        </footer>
    )
}

export default Footer