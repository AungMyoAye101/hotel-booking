'use client'

import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { Star } from 'lucide-react'
import React from 'react'

const Testmonial = () => {
    return (
        <section className='py-20 px-4 flex flex-col items-center  justify-center'>
            <h1 className='head-1'>Trusted by thousands of travelers</h1>
            <p>
                Real reviews from verified bookings
            </p>
            <div className='flex gap-6 my-10'>

                <Card>

                    <CardBody>
                        <div className='flex '>
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />

                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero neque mollitia blanditiis quibusdam temporibus, eligendi in voluptas iure? Veritatis blanditiis, quas quam magnam quidem nam quos tempora officiis sed?
                    </CardBody>
                    <CardFooter>
                        <Avatar />
                        <h2 className='text-lg font-semibold '>John Doe</h2>

                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <div className='flex '>
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />

                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero neque mollitia blanditiis quibusdam temporibus, eligendi in voluptas iure? Veritatis blanditiis, quas quam magnam quidem nam quos tempora officiis sed?
                    </CardBody>
                    <CardFooter>
                        <Avatar />
                        <h2 className='text-lg font-semibold '>John Doe</h2>

                    </CardFooter>
                </Card>
                <Card>

                    <CardBody>
                        <div className='flex '>
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />

                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                            <Star fill='oklch(79.5% 0.184 86.047)' strokeWidth={0} size={20} />
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero neque mollitia blanditiis quibusdam temporibus, eligendi in voluptas iure? Veritatis blanditiis, quas quam magnam quidem nam quos tempora officiis sed?
                    </CardBody>
                    <CardFooter>
                        <Avatar />
                        <h2 className='text-lg font-semibold '>John Doe</h2>

                    </CardFooter>
                </Card>
            </div>

        </section>
    )
}

export default Testmonial