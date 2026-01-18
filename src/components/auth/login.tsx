
'use client';
import { loginSchema, type loginType } from '@/validations/auth-schema';
import { Button, Card, CardBody, CardHeader, Form, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed, EyeOff, Lock, Mail } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const toggleVisible = () => setIsVisible(pre => !pre)
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm<loginType>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data: loginType) => {
        console.log(data)
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
            <Card className=' px-4 py-6 min-w-xs w-full max-w-100 bg-background/90'>
                <CardHeader className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-semibold text-center'>Login</h1>
                    <p>Please login your account.</p>
                </CardHeader>
                <CardBody>
                    <form
                        className="w-full max-w-xs flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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

                        <Button color="primary" type="submit">
                            Submit
                        </Button>


                    </form>
                    <p className='text-sm my-2'>Don't  have an account ? <Link href={'/signup'} className='text-violet-800'>Signup</Link></p>
                </CardBody>
            </Card>
        </section>
    )
}

export default Login

