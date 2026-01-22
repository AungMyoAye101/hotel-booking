import { hotelType } from '@/types/hotel-types'
import { Button, Card, CardBody, Chip } from '@heroui/react'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    hotel: hotelType
}
const HotelCard = ({ hotel }: Props) => {
    return (

        <Card >
            <CardBody >

                <div className='p-2 flex gap-4'>


                    <Image
                        src={hotel.photo?.secure_url || '/hotel-bg.png'}
                        alt="hotel photo"
                        height={160}
                        width={240}
                        className=" rounded-lg "
                    />

                    <div className="flex-1 px-4 py-2 space-y-1 ">
                        <div className="flex justify-between">
                            <h3 className="font-semibold truncate text-lg">{hotel.name}</h3>
                            <Chip color='secondary' radius="sm">
                                {hotel.rating}
                            </Chip>

                        </div>
                        <p className="line-clamp-1">{hotel.address}</p>
                        <div className="flex items-center gap-1">
                            {
                                Array(hotel.star).fill(null).map((_, i) => (
                                    <Star
                                        key={i}
                                        fill=" oklch(79.5% 0.184 86.047)"
                                        size={20}
                                        strokeWidth={0}
                                    />
                                ))
                            }

                        </div>

                        <div className="  flex items-center justify-between gap-4 ">

                            <p>
                                <span className="text-black font-bold text-xl">${hotel.price}</span>/night

                            </p>


                            <Button
                                as={Link}
                                href={`/hotel/${hotel._id}`}

                                radius="full"
                                variant="solid"
                                color="primary"
                                className="py-2 mb-2 px-6">
                                Book now <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default HotelCard