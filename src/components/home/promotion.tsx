'use client'
import { Button } from '@heroui/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Promotion = () => {
    return (
        <section className='py-20 px-4 flex items-center justify-center'>
            <div className='flex  rounded-lg shadow-xl max-w-4xl overflow-hidden border border-gray-200'>
                <div>
                    <Image
                        src={'/hotel-hero.png'}
                        alt='hotel image'
                        width={300}
                        height={300}
                        className='aspect-square object-cover'

                    />
                </div>
                <div className='flex flex-col gap-4 justify-center p-4'>
                    <h1 className='text-3xl font-semibold'>Exclusive member deals</h1>
                    <p className='text-balance text-lg font-medium text-black/90 bg-green-100 p-4 rounded-md  '>
                        Save up to <b>20%</b> on selected hotels.<br />
                        Early access to seasonal discounts.

                    </p>
                    <Button variant='solid' color='primary' radius='full' className='w-fit'>Get early access <ArrowRight /></Button>
                </div>
            </div>

        </section>
    )
}

export default Promotion