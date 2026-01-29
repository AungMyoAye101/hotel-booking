import { useGetRoomById } from '@/hooks/use-room'
import { BookingRoomType } from '@/types'
import { Card, CardBody } from '@heroui/react'
import Image from 'next/image'

type Props = {
    room: BookingRoomType,

}
const BookingDetail = ({ room }: Props) => {


    return (
        <Card className='max-w-sm w-full'>
            <CardBody>
                <div className="relative rounded-lg aspect-video">
                    <Image
                        src={'/hotel-bg.png'}
                        alt="hotel photo"
                        fill

                    />
                </div>
                <div className="space-y-4 mt-4">
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            Room
                        </span>
                        <span className="font-semibold">
                            {room?.name}
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span>
                            hotel
                        </span>
                        <span className="font-semibold">
                            Name
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default BookingDetail