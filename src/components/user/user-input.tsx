
import { BASE_URL } from '@/lib'
import { useAuth } from '@/stores/auth-store'
import type { APIResponse } from '@/types'
import { User } from '@/types/user-type'
import { userSchemaType, userSchmea } from '@/validations/user-schema'
import { addToast, Button, Input, toast } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type props = {
    user: User,
    readonly?: boolean
}

const UserInfoInput = ({ user, readonly }: props) => {
    const token = useAuth(s => s.token)
    const setUser = useAuth(s => s.setUser)
    console.log(token)
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<userSchemaType>({
        resolver: zodResolver(userSchmea),
        defaultValues: user
    })

    const onSubmit = async (data: userSchemaType) => {
        setIsLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/users/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })

            const response: APIResponse<{ user: User }> = await res.json()
            if (!res.ok) {

                addToast({
                    title: response.message,
                    color: 'danger'
                })
                throw new Error(response.message || "Failed to update user info.")
            }

            setUser(response.result.user)
            addToast({
                title: "User info updated successfully.",
                color: 'success'
            })


        } catch (error: unknown) {
            console.warn(error)
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1  gap-4 '>
            <Input
                {...register('name')}
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
                type='text'
                placeholder='Your name'
                label="Name"
                labelPlacement='outside'
                radius='sm'
                readOnly={readonly}
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

                readOnly={readonly}
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

                readOnly={readonly}
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

                readOnly={readonly}
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

                readOnly={readonly}
            />
            <Button type='submit' disabled={readonly} color={readonly ? "default" : 'primary'} radius='sm' className='place-items-end'>
                Submit
            </Button>
        </form>
    )
}

export default UserInfoInput

