'use client'

import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { LucideQuote, MessageSquareQuote, Quote, Star, TextQuote } from 'lucide-react'
import React from 'react'

const Testmonial = () => {
    return (
        <section className='py-20 px-4 flex flex-col items-center  justify-center'>
            <h1 className='head-1'>Trusted by thousands of travelers</h1>
            <p>
                Real reviews from verified bookings
            </p>
            <div className='flex flex-wrap items-center justify-center gap-6 my-10'>
                {
                    Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className='hover:shadow-xl min-w-xs max-w-sm '>

                            <CardBody className='space-y-2' >
                                <div className='flex '>
                                    <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                                    <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />

                                    <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                                    <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                                    <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                                </div>


                                <p className='text-balance'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Numquam vero neque mollitia blanditiis quibusdam temporibus,
                                    eligendi in voluptas iure? Veritatis blanditiis,
                                    quas quam magnam quidem nam quos tempora officiis sed?

                                </p>
                            </CardBody>
                            <CardFooter className='flex gap-2 items-center'>
                                <Avatar />
                                <h2 className='text-lg font-semibold '>John Doe</h2>

                            </CardFooter>
                        </Card>
                    ))
                }
            </div>

        </section>
    )
}

export default Testmonial