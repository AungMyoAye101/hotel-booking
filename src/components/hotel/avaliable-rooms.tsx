'use client'

import { useMemo, useState, useCallback, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import {
    Button,
    Card,
    CardBody,
    DateRangePicker,
    Input,
    Select,
    SelectItem,
    Tooltip
} from '@heroui/react'

import { BedDouble, Check, UsersRound } from 'lucide-react'
import { parseDate, CalendarDate, getLocalTimeZone } from '@internationalized/date'

import { useGetAvaliableRoom } from '@/hooks/use-hotel'
import { useCreateBooking } from '@/hooks/use-booking'
import { useAuth } from '@/stores/auth-store'

import RoomCardLoading from '../loading/room-loading'
import Empty from '../empty'
import { BookingStatus } from '@/types'
import { useUpdateParams } from '@/hooks/use-params'


/* ---------------------------------- types --------------------------------- */

type Props = {
    hotelId: string
}

type DateRange = {
    start: CalendarDate | null
    end: CalendarDate | null
}



const AvaliableRooms = ({ hotelId }: Props) => {
    const { updateParams, searchParams } = useUpdateParams();

    const todayISO = useMemo(
        () => new Date().toISOString().split('T')[0],
        []
    )

    const tomorrowISO = useMemo(() => {
        const d = new Date()
        d.setDate(d.getDate() + 1)
        return d.toISOString().split('T')[0]
    }, [])

    const checkIn = searchParams.get('checkIn') ?? todayISO;
    const checkOut = searchParams.get('checkOut') ?? tomorrowISO;



    const [value, setValue] = useState<any>({
        start: parseDate(checkIn.split("T")[0]),
        end: parseDate(checkOut.split("T")[0]),
    });

    const guest = Number(searchParams.get('guest')) ?? 1
    const [count, setCount] = useState(guest);
    const [quantity, setQuantity] = useState(1)


    const router = useRouter()
    const { isAuthenticated, user } = useAuth()

    /* ----------------------------- fetch rooms ----------------------------- */

    const { data: rooms = [], isLoading, isError, error } = useGetAvaliableRoom(hotelId,
        {
            checkIn,
            checkOut,
            guest
        }
    )

    // const handleCreateBooking = (roomId: string, quantity: number, price: number) => {
    //     if (!isAuthenticated || !user?._id || !dateRange.start || !dateRange.end) {
    //         return
    //     }

    //     const bookingData = {
    //         userId: user._id,
    //         hotelId,
    //         roomId,
    //         quantity,
    //         totalPrice: price * quantity,
    //         status: 'PENDING' as BookingStatus,
    //         checkIn: now,
    //         checkOut: now,

    //     }
    //     mutate(bookingData, {
    //         onSuccess(data) {
    //             router.push(`/booking/${data._id}`)
    //         },
    //     })
    // }


    const onFliter = () => {
        const utcCheckIn = value.start.toDate(getLocalTimeZone()).toISOString();
        const utcCheckOut = value.end.toDate(getLocalTimeZone()).toISOString();
        const params = {
            checkIn: utcCheckIn,
            checkOut: utcCheckOut,
            guest: count.toString()
        }
        updateParams(params);

    }

    const handleNavigate = (roomId: string, quantity: number) => {
        router.push(`/booking?room=${roomId}&quantity=${quantity.toString()}`)
    }

    return (
        <section className="py-4 space-y-4 mb-6">
            <h1 className="head-1">Available Rooms</h1>

            {/* Filters */}
            <div

                className="flex flex-col sm:flex-row gap-2">
                <DateRangePicker
                    name='dateRange'
                    aria-label="Date range"
                    value={value}
                    onChange={setValue}
                />

                <Input
                    type="number"
                    placeholder="Guests"
                    startContent={<UsersRound size={16} />}
                    aria-label="Guests"
                    defaultValue={String(Number(guest) || 1)}
                    onChange={(e) => setCount(Number(e.target.value))}
                />

                <Button
                    isLoading={isLoading}
                    onPress={() => onFliter()}
                    color="primary"
                >Apply</Button>
            </div>

            {/* Empty state */}
            {!isLoading && rooms.length === 0 && <Empty />}

            {/* Rooms */}
            <div className="flex flex-col gap-4">
                {isLoading ? (
                    <RoomCardLoading />
                ) : (
                    rooms.map(room => (
                        <Card key={room._id}>
                            <CardBody className="p-2">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {/* Image */}
                                    <div className="relative w-full md:max-w-sm aspect-video">
                                        <Image
                                            src={room.photo?.secure_url ?? '/hotel-hero.png'}
                                            alt={room.name}
                                            fill
                                            className="aspect-video rounded-lg"
                                        />
                                        <div className="absolute left-1 bottom-1 bg-yellow-100 px-2 py-1 flex items-center gap-1 text-sm">
                                            <Check className="text-green-600" size={14} />
                                            Free cancellation
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 space-y-2 p-4">
                                        <div className='flex justify-between'>
                                            <h2 className="head-1 truncate">{room.name}</h2>


                                            <Select
                                                aria-label='quantity select box'
                                                variant='bordered'
                                                color='secondary'
                                                radius='sm'
                                                fullWidth={false}
                                                size='sm'
                                                selectedKeys={[quantity.toString()]}
                                                onSelectionChange={(keys) => {
                                                    const val = [...keys][0]
                                                    setQuantity(Number(val))
                                                }}
                                            >
                                                {
                                                    Array.from({ length: room.totalRooms }).map((_, i) => {
                                                        const val = (i + 1).toString();
                                                        return (
                                                            < SelectItem
                                                                key={val}
                                                                textValue={val}
                                                            >
                                                                {val}

                                                            </SelectItem>
                                                        )


                                                    })
                                                }

                                            </Select>


                                        </div>


                                        <div className="flex gap-4 text-sm">
                                            <span className="flex items-center gap-1">
                                                <BedDouble size={16} /> {room.bedTypes} Bed
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <UsersRound size={16} /> {room.maxPeople} guests
                                            </span>
                                        </div>

                                        <p className="text-danger">{room.totalRooms} rooms left</p>

                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p>
                                                    From{' '}
                                                    <span className="text-xl font-semibold">
                                                        ${room.price}
                                                    </span>{' '}
                                                    / night
                                                </p>
                                                <p className="text-sm">Includes taxes and fees</p>
                                            </div>

                                            <Tooltip
                                                color={isAuthenticated ? 'default' : 'danger'}
                                                content={
                                                    isAuthenticated
                                                        ? 'Reserve this room'
                                                        : 'Please login to reserve'
                                                }
                                            >
                                                <Button

                                                    color="primary"
                                                    radius="sm"
                                                    onPress={() => handleNavigate(room._id, quantity)}

                                                >
                                                    Reserve
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))
                )}
            </div>
        </section >
    )
}

export default AvaliableRooms
