'use client';

import { useGetBookingById } from '@/hooks/use-booking';
import { useCreatePayment } from '@/hooks/use-payment';

import { PaymentMethodType } from '@/types';
import { Button, Card, CardBody, CardHeader, DatePicker, Input } from '@heroui/react'

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useState } from 'react';


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentInput, paymentSchema } from '@/validations/payment-schmea';
const mobileBanks = ["KBZPay", "WavePay", "AyaPay", "CBPay"];
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
                            <Input type='text' placeholder='123 456 789' label="Card number" labelPlacement='outside' radius='sm' />
                            <div className='flex justify-between gap-4'>

                                <DatePicker label='Expired date' labelPlacement='outside' radius='sm' />
                                <Input type='text' placeholder='CVC' label="Security code" labelPlacement='outside' radius='sm' />
                            </div>

                        </div>
                    }

                    {
                        payment === "MOBILE_BANKING" && <div className="grid grid-cols-2 gap-4 py-4">
                            {mobileBanks.map((bank) => (
                                <Card
                                    key={bank}
                                    isPressable

                                    className={`p-4 text-center border-2 border-primary`}
                                    shadow='sm'

                                >
                                    {bank}
                                </Card>
                            ))}
                        </div>
                    }

                    <div className='my-4'>


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





