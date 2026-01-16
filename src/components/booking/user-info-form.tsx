'use client';

import { Input } from '@heroui/react'
import React from 'react'

const UserInfoForm = () => {
    return (
        <form className='bg-white rounded-lg border border-slate-200 shadow-md  p-6 max-w-xl space-y-4'>
            <h1 className='head-1'>Guest information</h1>
            <div className='grid gird-cols-2 gap-4' >
                <Input type='text' placeholder='First name' label="First name" labelPlacement='outside' radius='sm' />
                <Input type='text' placeholder='Last name' label="Last name" labelPlacement='outside' radius='sm' />
                <Input type='email' placeholder='Email' label="Email" className='col-span-2' labelPlacement='outside' radius='sm' />

            </div>

            <div>
                <input type='checkbox' /> Save your details for next time
            </div>

        </form>
    )
}

export default UserInfoForm