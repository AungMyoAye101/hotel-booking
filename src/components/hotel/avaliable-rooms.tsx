'use client'
import { Button, Card, CardBody, DatePicker, Input } from '@heroui/react'
import { BedDouble, Check, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AvaliableRooms = () => {
    return (
        <section className='py-4 space-y-4 mb-6'>
            <h1 className='head-1'>Avaliable Rooms</h1>
            <div className='flex items-center rounded-lg overflow-hidden bg-white shadow border border-slate-300'>
                <DatePicker radius='none' />
                <DatePicker radius='none' />
                <Input type='number' placeholder='guest' radius='none' />
                <Button variant='solid' color='primary' radius='sm' className='mx-1'>Apply</Button>
            </div>
            {/* Room */}
            <div className='flex flex-col gap-4'>
                {
                    Array(10).fill(0).map((_, i) => (
                        <Card key={i}>
                            <CardBody className='p-2'>
                                <div className='flex gap-4 '>

                                    <div className='relative'>


                                        <Image
                                            src={'/hotel-hero.png'}
                                            alt='room photo'
                                            width={320}
                                            height={300}
                                            className='aspect-video rounded-lg w-full h-full'
                                        />
                                        <div className='absolute left-0 bottom-0 z-10 bg-yellow-100 p-1 px-2 flex '> <Check className='text-green-500' /> Free Cancellation</div>
                                    </div>
                                    <div className='space-y-4 p-4 flex-1'>
                                        <h1 className='head-1'>Room title</h1>
                                        <div className='flex'>

                                            {
                                                Array(5).fill(0).map((_, i) => (
                                                    <Star fill="yellow" strokeWidth={1} key={i} />
                                                ))
                                            }
                                            (123) reviews
                                        </div>
                                        <p className='flex'>
                                            <BedDouble /> Double size
                                        </p>
                                        <p>max peoplel :    2 guests</p>
                                        <div className='flex justify-between'>
                                            <div>
                                                <span className='text-lg'>


                                                    From <span className='text-xl font-semibold'>$ 120 </span>/ night
                                                </span>
                                                <p >includes taxes and fees</p>
                                            </div>
                                            <Button
                                                as={Link}
                                                href={'/booking'}
                                                variant='solid'
                                                color='primary'
                                                radius='sm'>Reserve</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>))
                }

            </div>
        </section>
    )
}

export default AvaliableRooms