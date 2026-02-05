'use client';

import { useCreateBooking, useUpdateBooking } from '@/hooks/use-booking';
import { useUpdateUser } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';
import { useBookingStore } from '@/stores/booking-store';
import { BookingRoomType, UpdateBookingType } from '@/types';
import { User } from '@/types/user-type';
import { userSchemaType, userSchmea } from '@/validations/user-schema';
import { addToast, Button, Card, CardBody, CardFooter, CardHeader, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
type Props = {
    roomId: string,
    hotelId: string,
    checkIn: string,
    checkOut: string,
    quantity: number,
    price: number,
}

const UserInfoForm = () => {
    const user = useAuth(s => s.user)
    const isAuthenticated = useAuth(s => s.isAuthenticated)
    const bookingId = useParams().id as string;
    const { register, handleSubmit, formState: { errors } } = useForm<userSchemaType>({
        resolver: zodResolver(userSchmea),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            city: user?.city,
            country: user?.country
        }
    })
    const { mutate, isPending } = useUpdateBooking()
    const onSubmit = async (data: userSchemaType) => {
        if (!bookingId && !data) {
            return
        }


        const bookingData = {

            status: "PENDING",
            ...data

        }
        mutate({ bookingId, booking: bookingData as UpdateBookingType })

    }


    return (
        <Card className='p-4'>
            <CardHeader>
                <div>
                    <h1 className="text-3xl font-semibold">Secure your booking</h1>
                    <p>Complete the form below to comfirm your hotel reservation.</p>
                </div>

            </CardHeader>
            <CardBody>


                <form className='flex flex-col gap-4 '
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        {...register('name')}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name?.message}
                        type='text'
                        placeholder='Your name'
                        label="Name"
                        labelPlacement='outside'
                        radius='sm'
                        className='md:col-span-2'

                    />
                    <Input
                        {...register('email')}
                        isInvalid={!!errors.email}
                        errorMessage={errors.email?.message}
                        type='email'
                        placeholder='example@gmail.com'
                        label="Email"
                        labelPlacement='outside'
                        radius='sm'

                    />
                    <Input
                        {...register('phone')}
                        isInvalid={!!errors.phone}
                        errorMessage={errors.phone?.message}
                        type='text'
                        placeholder='phone'
                        label="Phone"
                        labelPlacement='outside'
                        radius='sm'


                    />
                    <Input
                        {...register('city')}
                        isInvalid={!!errors.city}
                        errorMessage={errors.city?.message}
                        type='text'
                        placeholder='city'
                        label="City"
                        labelPlacement='outside'
                        radius='sm'

                    />
                    <Input
                        {...register('country')}
                        isInvalid={!!errors.country}
                        errorMessage={errors.country?.message}
                        type='text'
                        placeholder='country'
                        label="Country"
                        labelPlacement='outside'
                        radius='sm'

                    />
                    <Button
                        isLoading={isPending}
                        type='submit'
                        color='primary'
                        radius='sm'

                    >
                        NEXT STEP
                    </Button>
                </form>
            </CardBody>
        </Card>




    )
}

export default UserInfoForm