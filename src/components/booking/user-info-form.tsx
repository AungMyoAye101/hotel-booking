'use client';

import { useCreateBooking } from '@/hooks/use-booking';
import { useUpdateUser } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';
import { BookingRoomType } from '@/types';
import { User } from '@/types/user-type';
import { userSchemaType, userSchmea } from '@/validations/user-schema';
import { addToast, Button, Card, CardBody, CardFooter, CardHeader, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
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

const UserInfoForm = ({
    roomId,
    hotelId,
    checkIn,
    checkOut,
    quantity,
    price
}: Props) => {
    const user = useAuth(s => s.user)
    const isAuthenticated = useAuth(s => s.isAuthenticated)

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
    const { mutate, isPending } = useCreateBooking()
    const onSubmit = async (data: userSchemaType) => {
        if (!isAuthenticated || !user?._id || !checkIn || !checkOut || !roomId || !hotelId) {
            return addToast({
                title: "All fields are required.",
                color: "danger"
            })
        }

        const bookingData = {
            userId: user._id,
            hotelId,
            roomId,
            quantity,
            totalPrice: price * quantity,
            checkIn,
            checkOut,
            ...data

        }
        mutate(bookingData)

    }


    return (

        <form className='flex flex-col gap-4'
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


    )
}

export default UserInfoForm