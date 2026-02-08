'use client';

import { useGetBookingById } from '@/hooks/use-booking';
import { useCreatePayment } from '@/hooks/use-payment';

import { PaymentMethodType } from '@/types';
import { Button, Card, CardBody, CardHeader, cn, DatePicker, Input, Radio, RadioGroup } from '@heroui/react'

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useState } from 'react';


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentInput, paymentSchema } from '@/validations/payment-schmea';
const mobileBanks = [
    {
        name: "KBZ pay",
        image: "/kbz.webp"
    },
    {
        name: "AYA pay",
        image: "/aya.webp"
    },
    {
        name: "WAVE pay",
        image: "/wave.webp"
    },

];

const paymentMethodOptions = [
    {
        method: "CARD",
        image: "/card.png",
        text: "Card / debait card",
        slug: "pay with card"
    },
    {
        method: "MOBILE_BANKING",
        image: "/mobile-banking.svg",
        text: "Mobile Banking",
        slug: "pay via e-wallet"
    },
    {
        method: "BANK",
        image: "/bank.svg",
        text: "Bank Transfer",
        slug: "pay via bank"
    },
]
const PaymentDetailsForm = () => {
    const bookingId = useParams().id;

    const { data: booking, isLoading, error } = useGetBookingById(bookingId as string)

    const { mutate, isPending } = useCreatePayment()
    const handleSubmit = () => {
        if (!booking) return;
        mutate({
            bookingId: booking?._id,
            userId: booking?.user?._id,
            paymentMethod: payment,
            amount: booking?.totalPrice,
            payNow: true
        },
        )


    }
    const [payment, setPayment] = useState<PaymentMethodType>('CARD')
    const [mobile, setMobile] = useState("KBZ pay")

    return (
        <section>


            <Card className='p-4'>
                <CardHeader>
                    <div>
                        <h1 className='head-1 mb-2'>Choose Payment Method </h1>
                        <p className='text-sm'>Select a payment option to proceed</p>
                    </div>
                </CardHeader>
                <CardBody>


                    {/* -----------Payment option------------ */}
                    <div className='flex flex-wrapn justify-between gap-4  '>
                        {
                            paymentMethodOptions.map(value => (
                                <Card
                                    key={value.method}
                                    isPressable
                                    onPress={() => setPayment(value.method as PaymentMethodType)}
                                    className={`
                                    ${payment === value.method ? 'bg-success-50 border-2 border-success-400' : 'bg-deafult'}
                                     min-w-44 w-full h-36 flex items-center justify-center`} >
                                    <CardBody >
                                        <div className={`flex flex-col items-center gap-2 `} >


                                            <Image
                                                src={value.image}
                                                alt={value.method + "icon"}
                                                width={value.method === "CARD" ? 80 : 60}
                                                height={value.method === "CARD" ? 80 : 60}


                                            />
                                            <div className='text-center'>
                                                <h1 className=' font-medium capitalize'>
                                                    {value.text}
                                                </h1>
                                                <p className='text-sm capitalize'>
                                                    {value.slug}

                                                </p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>

                            ))
                        }





                    </div>
                    {
                        payment === "CARD" &&
                        <div className='py-4 space-y-4 my-4'>
                            <Input type='text' placeholder='1111 2222 3333 4444' label="Card number" labelPlacement='outside' radius='sm' />
                            <div className='flex justify-between gap-4'>

                                <DatePicker label='Expired date' labelPlacement='outside' radius='sm' />
                                <Input type='text' placeholder='CVC' label="Security code" labelPlacement='outside' radius='sm' />
                            </div>

                        </div>
                    }

                    {
                        payment === "MOBILE_BANKING" &&
                        <div className='space-y-4 py-4  my-4'>
                            <Input type='text' placeholder='name' label="Account name" labelPlacement='outside' radius='sm' />

                            <div className='space-y-2'>
                                <p className='text-sm'>Choose a provider</p>
                                <div className="flex gap-2">
                                    {mobileBanks.map((bank) => (
                                        <Card
                                            key={bank.name}
                                            isPressable
                                            onPress={() => setMobile(bank.name)}
                                            className={`p-0 overflow-hidden border-2 ${mobile === bank.name ? 'border-success' : ' border-primary-100'}`}
                                            shadow='sm'

                                        >
                                            <Image
                                                src={bank.image}
                                                alt={bank.name + "icon"}
                                                width={45}
                                                height={45}
                                                className='object-cover aspect-square'
                                            />


                                        </Card>
                                    ))}
                                </div>
                            </div>

                        </div>
                    }

                    {
                        payment === "BANK" &&
                        <div className='flex flex-col gap-4 py-4  my-4'>
                            <Input type='text' placeholder='name' label="Account name" labelPlacement='outside' radius='sm' />
                            <Input type='text' placeholder='1111 2222 3333 4444' label="Card number" labelPlacement='outside' radius='sm' />

                        </div>
                    }
                    <div className='my-4 space-y-4'>
                        <RadioGroup orientation="horizontal" >
                            <Radio value={"paynow"}
                                size='sm'
                                classNames={{
                                    base: cn(
                                        'mr-2 flex item-center gap-2  py-1.5 px-3  rounded-lg bg-slate-200 border-transparent',
                                        "data-[selected=true]:border-primary data-[selected=true]:bg-primary-100",
                                    )
                                }}


                            >Pay Now</Radio>
                            <Radio value={"payAtProperty"}
                                size='sm'
                                classNames={{
                                    base: cn(
                                        'flex item-center gap-2  py-1.5 px-3   rounded-lg bg-slate-200 border-transparent',
                                        "data-[selected=true]:border-primary data-[selected=true]:bg-primary-100",
                                    )
                                }}

                            >
                                Pay at property

                            </Radio>
                        </RadioGroup>

                        <label htmlFor='secure' className=' flex items-center  gap-1'>
                            <input type='checkbox' id='secure' />
                            <span className='text-sm '>
                                Secure and encrypted
                            </span>

                        </label>
                        <label htmlFor='terms' className=' flex items-center gap-1'>
                            <input type='checkbox' id='terms' />
                            <span className='text-sm '>
                                I agree to the cancellation policy and terms
                            </span>

                        </label>
                    </div>
                    <Button
                        isLoading={isPending}
                        variant='solid'
                        color='primary'
                        radius='sm'
                        fullWidth
                        onPress={() => handleSubmit()}
                    >Proceed to Payment</Button>

                </CardBody>
            </Card>

        </section>
    )
}

export default PaymentDetailsForm





