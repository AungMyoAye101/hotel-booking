
'use client';
import { BASE_URL } from '@/hooks/api';
import type { APIResponse } from '@/types';
import { registerSchema, registerType } from '@/validations/auth-schema';
import { addToast, Button, Card, CardBody, CardHeader, Form, Input, toast } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const Signup = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const toggleVisible = () => setIsVisible(pre => !pre);

    //navigate to home page after sigup success.
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<registerType>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: registerType) => {
        setIsLoading(true)
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
                credentials: "include",
            })
            const responseData: APIResponse<{ user: User }> = await res.json()
            if (!res.ok) {
                addToast({
                    title: responseData.message || "Faild to create user.",
                    color: 'danger'
                })
                throw new Error(responseData.message || "Faild to create user.")
            }
            addToast({
                title: responseData.message || "Sigup successful.",
                color: 'success'
            })
            reset()
            router.push('/')
            return responseData.result;
        } catch (error: unknown) {

            console.warn(error)
            throw new Error("Sigup failed.")
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <section className='h-screen flex justify-end items-center'>
            <Image
                src={'/hotel-bg.png'}
                alt='hotel photo'
                width={1400}
                height={1240}
                className='object-cover absolute inset-0 -z-10'

            />
            <Card className='min-w-xs w-full max-w-100 bg-background/90'>
                <CardHeader className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-semibold text-center'>Signup</h1>
                    <p>Please create new account.</p>
                </CardHeader>
                <CardBody className=' px-4 py-6 '>
                    <form
                        className=" flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            {
                            ...register('name')
                            }
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                            label="Name"
                            labelPlacement="outside"
                            placeholder="Enter your name"
                            type="text"
                        />


                        <Input
                            {
                            ...register('email')
                            }
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                            label="Email"
                            labelPlacement="outside"
                            placeholder="Enter your email"
                            type="email"
                            startContent={<Mail size={20} className='text-default-400' />}
                        />

                        <Input
                            {
                            ...register('password')
                            }

                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                            label="Password"
                            labelPlacement="outside"
                            placeholder="Enter your password"
                            type={isVisible ? 'text' : "password"}
                            startContent={<Lock size={20} className='text-default-400' />}
                            endContent={

                                <Button

                                    isIconOnly size='sm'

                                    onPress={() => toggleVisible()}>
                                    {isVisible ? <Eye /> : <EyeOff />}</Button>

                            }
                        />


                        <Button
                            isLoading={isLoading}
                            color="primary"
                            type="submit">
                            Submit
                        </Button>

                    </form>
                    <p className='text-sm my-2'>Already have an account ? <Link href={'/login'} className='text-violet-800'>Login</Link></p>
                </CardBody>
            </Card>
        </section>
    )
}

export default Signup

