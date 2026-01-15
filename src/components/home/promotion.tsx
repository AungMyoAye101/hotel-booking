'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const Promotion = () => {
    return (
        <section className='min-h-screen flex items-center justify-center'>
            <div className='flex bg-white rounded-lg shadow-xl max-w-4xl overflow-hidden border-2 border-slate-100'>
                <div>
                    <Image
                        src={'/hotel-hero.png'}
                        alt='hotel image'
                        width={400}
                        height={400}
                        className='aspect-square'
                    />
                </div>
                <div className='p-4 flex flex-col gap-6 justify-center items-center text-center'>
                    <h1 className='text-3xl font-semibold'>Exclusive member deals</h1>
                    <p className='text-balance font-medium text-black/90 bg-green-100 p-4 rounded-md  '>
                        Save up to <b>20%</b> on selected hotels.
                        Early access to seasonal discounts.

                    </p>
                    <Button variant='solid' color='primary' radius='sm' className='w-fit self-end'>Get early access</Button>
                </div>
            </div>

        </section>
    )
}

export default Promotion