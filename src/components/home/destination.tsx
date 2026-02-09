"use client"
import { Button, Card, CardBody, Image, Link } from '@heroui/react'
import { ArrowLeft, ArrowRight, MoveRight, Stars } from 'lucide-react'
import { useRef } from 'react';

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
            <div className='relative'>
                <Button isIconOnly
                    variant='solid'
                    radius="full"
                    className="absolute left-0 top-1/2 bottom-1/2 z-20"
                    onPress={() => handleSlide(false)}
                ><ArrowLeft /></Button>

                <div
                    ref={containerRef}
                    className='flex gap-4 overflow-hidden overflow-x-scroll no-scrollbar px-4'>
                    {
                        Array(4).fill(null).map((_, i) => (
                            <Card key={i} radius='sm' shadow='sm' className='min-w-xs border border-slate-300'>
                                <CardBody className='p-0'>
                                    <Image
                                        src={'/hotel-bg.png'}
                                        alt='hotel image'
                                        width={400}
                                        height={260}
                                        className=' rounded-md w-full object-cover '
                                    />
                                    <div className='flex flex-col gap-1 p-4'>
                                        <h1 className='text-lg font-bold'>Yangon</h1>
                                        <p className=''>120 + hotels</p>
                                        <Button variant='bordered' className='text-primary border-primary bg-blue-50'>
                                            Explore stays   <ArrowRight />
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>

                        ))
                    }
                </div>
                <Button
                    isIconOnly
                    variant='solid'
                    radius="full"
                    className="absolute right-0 top-1/2 bottom-1/2 z-10"
                    onPress={() => handleSlide(true)}
                ><ArrowRight /></Button>
            </div>
        </section>
    )
}

export default Destination