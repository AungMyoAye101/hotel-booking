import { Avatar, Card, CardBody, CardFooter, Skeleton } from '@heroui/react'
import FiveStars from '../star'
import { useGetReviewByHotelId } from '@/hooks/use-review'
type Props = {
    hotelId: string
}
const ReviewCard = ({ hotelId }: Props) => {
    const { data: reviews, isLoading, isError, error } = useGetReviewByHotelId(hotelId)

    if (isLoading) {
        return <section className='space-y-4'>

            <h1 className='text-2xl font-semibold'>Guest Reviews</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>


                {
                    Array(4).fill(null).map((_, i) => (
                        <Card key={i} shadow='sm' className=' min-w-72  max-w-xs border border-slate-300 '>

                            <CardBody >
                                <div className='flex items-start gap-2'>
                                    <Skeleton className='w-14 h-14 rounded-full ' />
                                    <div className='space-y-2'>

                                        <Skeleton className='w-52 h-6 rounded-md' />
                                        <Skeleton className='w-52 h-6 rounded-md' />
                                        <Skeleton className='w-52 h-16 rounded-md' />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
        </section>
    }


    return (
        <section className='space-y-4 py-4'>
            {
                reviews && reviews?.length > 0 && <>

                    <h1 className='text-2xl font-semibold'>Guest Reviews</h1>
                    <div className='flex flex-wrap items-center justify-center md:justify-start gap-4'>

                        {
                            reviews.map(value => (
                                <Card key={value._id} shadow='sm' className=' min-w-72  max-w-xs border border-slate-300 '>

                                    <CardBody >
                                        <div className='flex items-start gap-2'>
                                            <Avatar
                                                src='/user.jpg'
                                                alt='user photo'
                                            />
                                            <div className='space-y-2'>
                                                <h1 className='text-lg font-semibold'>{value.userId.name}</h1>
                                                <FiveStars count={value.rating} />
                                                <p>Reviewed : {new Date(value.createdAt).toDateString()}</p>
                                                <p className='text-sm'>
                                                    {value.review}
                                                </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }


                    </div>
                </>
            }
        </section>
    )
}

export default ReviewCard