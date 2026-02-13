"use client"
import { Button, Card, CardBody, } from '@heroui/react'
import { ArrowLeft, ArrowRight, MoveRight, Stars } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const DESTINATION_DATA = [
    {
        url: '/yangon.webp',
        name: 'yangon'
    },
    {
        url: '/mandalay.webp',
        name: 'mandalay'
    },
    {
        url: '/bagan.webp',
        name: 'bagan'
    },
    {
        url: '/bangkok.webp',
        name: 'bangkok'
    },
]

const Destination = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSlide = (isRight: boolean) => {
        const container = containerRef.current;
        if (container) {
            container.scrollBy({
                left: isRight ? 400 : -400,
                behavior: 'smooth'
            })
        }

    }
    return (
        <section className=' py-12 space-y-6 '>
            <h1 className='head-1 text-black'>Popular destinations</h1>


            <div
                ref={containerRef}
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  '>
                {
                    DESTINATION_DATA.map((item) => (
                        <Card
                            key={item.name}
                            radius='sm'
                            shadow='sm'
                            className='border border-slate-300 p-0 overflow-hidden'>
                            <CardBody className='p-0'>
                                <div className='relative w-full aspect-square'>

                                    <Image
                                        src={item.url}
                                        alt='hotel image'
                                        fill
                                        className=' object-cover rounded-none'
                                    />
                                </div>
                                <div className='flex flex-col gap-1 p-4'>
                                    <h1 className='text-lg font-bold capitalize'>{item.name}</h1>

                                    <Button
                                        as={Link}
                                        href={`/search?destination=${item.name}`}
                                        variant='bordered'
                                        className='text-primary border-primary bg-blue-50'>
                                        Explore stays   <ArrowRight />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>

                    ))
                }
            </div>


        </section>
    )
}

export default Destination