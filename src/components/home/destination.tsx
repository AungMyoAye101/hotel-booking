"use client"
import { Button, Card, CardBody, Image, Link } from '@heroui/react'
import { ArrowRight, MoveRight, Stars } from 'lucide-react'

const Destination = () => {
    return (
        <section className=' py-12 space-y-6 '>
            <h1 className='head-1 text-black'>Popular destinations</h1>
            <div className='flex gap-4'>
                {
                    Array(4).fill(null).map((_, i) => (
                        <Card key={i} radius='sm'>
                            <CardBody className='p-0'>
                                <Image
                                    src={'/hotel-bg.png'}
                                    alt='hotel image'
                                    width={300}
                                    height={240}
                                    className='aspect-video rounded-md'
                                />
                                <div className='flex flex-col gap-2 p-4'>
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
        </section>
    )
}

export default Destination