'use client';

import { Button, DatePicker, Input } from '@heroui/react'
import React from 'react'

const PaymentDetailsForm = () => {
    return (
        <form className='bg-white rounded-lg border border-slate-200 shadow-md  p-6 max-w-lg space-y-4'>
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
            <Button variant='solid' color='primary' radius='sm' fullWidth>Comfirm booking</Button>
        </form>
    )
}

export default PaymentDetailsForm