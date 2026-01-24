'use client'
import { useGetAvaliableRoom } from '@/hooks/use-hotel'
import { Button, Card, CardBody, DatePicker, Input } from '@heroui/react'
import { BedDouble, Check, Group, Star, UserRound, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import RoomCardLoading from '../loading/room-loading'


type Props = {
    hotelId: string;
}


const AvaliableRooms = ({ hotelId }: Props) => {
    const { data: rooms, isError } = useGetAvaliableRoom(hotelId, { page: 1, limit: 10 })
    const isLoading = true;
    if (isError) return <div>Error loading rooms</div>
    return (
        <section className='py-4 space-y-4 mb-6'>
            <h1 className='head-1'>Avaliable Rooms</h1>
            <div
                className='flex flex-col md:flex-row items-center rounded-lg overflow-hidden bg-white shadow border border-slate-300'>
                <DatePicker
                    radius='none'
                    aria-label={"check-in date"} />
                <DatePicker
                    radius='none'
                    aria-label={"check-out date"} />
                <Input
                    type='number'
                    placeholder='guest'
                    radius='none'
                    aria-label='guest'
                    startContent={<UsersRound size={16} />} />
                <Button
                    variant='solid'
                    color='primary'
                    radius='sm'
                    className='mx-1'
                    fullWidth >Apply</Button>
            </div>
            {/* Room */}
            <div className='flex flex-col gap-4'>
                {
                    isLoading ? <RoomCardLoading /> :
                        rooms?.map((room) => (
                            <Card key={room._id}>
                                <CardBody className='p-2'>
                                    <div className='flex flex-col sm:flex-row gap-4 '>
                                        <div className='relative'>
                                            <Image
                                                src={room.photo?.secure_url || '/hotel-hero.png'}
                                                alt='room photo'
                                                width={320}
                                                height={300}
                                                className='aspect-video rounded-lg w-full h-full'
                                            />
                                            <div className='absolute left-1 bottom-1 rounded-sm z-10 bg-yellow-100 p-1 px-2 flex '> <Check className='text-green-500' /> Free Cancellation</div>
                                        </div>
                                        <div className='space-y-2 p-4 flex-1'>
                                            <h1 className='head-1 truncate'>{room.name}</h1>
                                            <div className='flex items-center gap-4'>

                                                <p className='flex items-center gap-2 '>
                                                    <BedDouble size={16} /> {room.bedTypes} Bed
                                                </p>
                                                <p className='flex items-center gap-2'>
                                                    <UsersRound size={16} />
                                                    {room.maxPeople} guests
                                                </p>
                                            </div>
                                            <p className='text-danger'>{room.totalRooms} rooms left</p>
                                            <div className='flex justify-between'>
                                                <div>
                                                    <span className='text-base sm:text-lg'>
                                                        From <span className='text-xl font-semibold'>$ {room.price} </span>/ night
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