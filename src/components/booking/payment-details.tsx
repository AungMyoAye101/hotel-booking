'use client';

import { useBookingStore } from '@/stores/booking-store';
import { Button, DatePicker, Input } from '@heroui/react'
import { redirect, useRouter } from 'next/navigation';


const PaymentDetailsForm = () => {
    const { stage, setStage, setBookingId, setPaymentId } = useBookingStore(s => s)
    const router = useRouter()

    const handleSubmit = () => {
        setStage(2)
        setPaymentId('23'),
            setBookingId("12dd")
        router.push('/booking/confirm')
    }
    console.log(stage)
    return (
        <form className='bg-white rounded-lg border border-slate-200 shadow-md  p-6  space-y-4'>
            <h1 className='head-1 mb-2'>Payment details</h1>
            <Input type='text' placeholder='123 456 789' label="Card number" labelPlacement='outside' radius='sm' />
            <div className='flex justify-between gap-4'>

                <DatePicker label='Expired date' labelPlacement='outside' radius='sm' />
                <Input type='text' placeholder='CVC' label="Security code" labelPlacement='outside' radius='sm' />
            </div>
            <div>
                <input type='checkbox' /> Secure and encrypted
            </div>    <div>
                <input type='checkbox' /> I agree to the cancellation policy and terms
            </div>
            <Button variant='solid' color='primary' radius='sm' fullWidth

                onPress={() => handleSubmit()}
            >Comfirm booking</Button>
        </form>
    )
}

export default PaymentDetailsForm