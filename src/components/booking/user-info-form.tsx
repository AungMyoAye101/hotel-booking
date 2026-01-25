'use client';

import { useUpdateUser } from '@/hooks/use-user';
import { useAuth } from '@/stores/auth-store';
import { User } from '@/types/user-type';
import { userSchemaType, userSchmea } from '@/validations/user-schema';
import { addToast, Button, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

const UserInfoForm = () => {
    const user = useAuth(s => s.user)
    console.log(user)
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
    const { mutate, isPending } = useUpdateUser()
    const onSubmit = async (data: userSchemaType) => {
        mutate({ id: user?._id!, user: data as User }, {
            onSuccess: () => {
                addToast({
                    title: "Updated Successfully",
                    color: "success",
                })
            }
        })
    }
    return (
        <form className='bg-white rounded-lg border border-slate-200 shadow-md  p-6  space-y-4'>
            <h1 className='head-1'>Guest information</h1>
            <form className='grid grid-cols-1  md:grid-cols-2 gap-4'
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
                    variant='bordered'
                    color='primary'
                    radius='sm'
                    className='md:col-span-2'>
                    Submit
                </Button>
            </form>


            <div>
                <input type='checkbox' /> Save your details for next time
            </div>

        </form >
    )
}

export default UserInfoForm