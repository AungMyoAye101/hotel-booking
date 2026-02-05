'use client';

import { useCreatePayment } from '@/hooks/use-payment';

import { PaymentMethodType } from '@/types';
import { Button, Card, CardBody, CardHeader, DatePicker, Input } from '@heroui/react'

import Image from 'next/image';

import { useState } from 'react';

type Props = {
    bookingId: string,
    userId: string,
    amount: number
}

const PaymentDetailsForm = () => {


    const { mutate, isPending } = useCreatePayment()
    const handleSubmit = () => {
        mutate({
            // bookingId,
            // userId,
            // paymentMethod: payment,
            // amount,
        },
        )


    }
    const [payment, setPayment] = useState<PaymentMethodType>('CARD')

    return (
        <Card className='p-4'>
            <CardHeader>
                <div>
                    <h1 className='head-1 mb-2'>Choose Payment Method </h1>
                    <p className='text-sm'>Select a payment option to proceed</p>
                </div>
            </CardHeader>
            <CardBody>


                {/* -----------Payment option------------ */}
                <div className='flex flex-wrap gap-4 items-center justify-center'>
                    <label htmlFor='card'>
                        <Card className={`${payment === "CARD" ? 'bg-success-50 border-2 border-success-400' : 'bg-deafult'} w-44 h-36 flex items-center justify-center`} >
                            <CardBody >
                                <div className={`flex flex-col items-center gap-2 `} >


                                    <Image
                                        src={'/card.png'}
                                        alt='card icon'
                                        width={80}
                                        height={80}


                                    />
                                    <div className='text-center'>
                                        <h1 className=' font-medium'>Card / debait card</h1>
                                        <p className='text-sm'>Pay with card</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>


                        <input type="radio" checked={payment === "CARD"} name='payment' id='card' onChange={() => setPayment("CARD")} className='hidden' />
                    </label>
                    <label htmlFor='mobile'>

                        <Card className={`${payment === 'MOBILE_BANKING' ? 'bg-success-50 border-2 border-success-400' : 'bg-deafult'} w-44 h-36 flex items-center justify-center`} >
                            <CardBody >
                                <div className={`flex flex-col items-center gap-2 `} >


                                    <Image
                                        src={'/mobile-banking.svg'}
                                        alt='mobile banking icon'
                                        width={60}
                                        height={60}


                                    />
                                    <div className='text-center'>
                                        <h1 className='text-lg font-medium'>Mobile Banking</h1>
                                        <p className='text-sm'>Pay via e-wallet</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <input type="radio" checked={payment === "MOBILE_BANKING"} name='payment' id='mobile' onChange={() => setPayment("MOBILE_BANKING")} className='hidden' />
                    </label>

                    <label htmlFor='bank'>


                        <Card className={`${payment === 'BANK' ? 'bg-success-50 border-2 border-success-400' : 'bg-deafult'}  w-44 h-36 flex items-center justify-center`} >
                            <CardBody >
                                <div className={`flex flex-col items-center gap-2 `} >
                                    <Image
                                        src={'/bank.svg'}
                                        alt='bank icon'
                                        width={60}
                                        height={60}


                                    />
                                    <div className='text-center'>
                                        <h1 className='text-lg font-medium'>Bank Transfer</h1>
                                        <p className='text-sm'>Pay via bank</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <input type="radio" checked={payment === 'BANK'} name='payment' id='bank' onChange={() => setPayment("BANK")} className='hidden' />

                    </label>
                </div>
                {/* {
                        payment === "CARD" &&
                        <div className='py-4 space-y-4'>
                            <Input type='text' placeholder='123 456 789' label="Card number" labelPlacement='outside' radius='sm' />
                            <div className='flex justify-between gap-4'>

                                <DatePicker label='Expired date' labelPlacement='outside' radius='sm' />
                                <Input type='text' placeholder='CVC' label="Security code" labelPlacement='outside' radius='sm' />
                            </div>
                            <label htmlFor='input-1' className='block'>
                                <input type='checkbox' id='input-1' /> Secure and encrypted
                            </label>
                            <label htmlFor='input-2' className='block'>
                                <input type='checkbox' id='input-2' /> I agree to the cancellation policy and terms
                            </label>
                        </div>
                    } */}


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
    )
}

export default PaymentDetailsForm