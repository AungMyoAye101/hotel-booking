"use client"
import { Button, Card, CardBody, Image, Link } from '@heroui/react'
import { ArrowRight, MoveRight, Stars } from 'lucide-react'

const Destination = () => {
    return (
        <section className=' py-12 px-4 space-y-6 '>
            <h1 className='text-2xl font-semibold text-black'>Popular destinations</h1>
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
                                <div className='flex justify-between items-center p-4'>
                                    <p className='font-semibold'>Yangon</p>
                                    <Link href="#" className='bg-white rounded-full shadow border'>
                                        <ArrowRight />
                                    </Link>
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