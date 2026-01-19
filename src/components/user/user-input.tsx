import { User } from '@/types/user-type'
import { Button, Input } from '@heroui/react'
import React from 'react'

type props = {
    user: User,
    readonly?: boolean
}

const UserInfoInput = ({ user, readonly }: props) => {
    return (
        <form className='grid grid-cols-1  gap-4 '>
            <Input
                type='name'
                placeholder='Your name'
                label="Name"
                labelPlacement='outside'
                radius='sm'
                value={user.name}
                readOnly={readonly}
            />
            <Input
                type='email'
                placeholder='example@gmail.com'
                label="Email"
                labelPlacement='outside'
                radius='sm'
                value={user.email}
                readOnly={readonly}
            />
            <Input
                type='text'
                placeholder='phone'
                label="Phone"
                labelPlacement='outside'
                radius='sm'
                value={user.phone}
                readOnly={readonly}
            />
            <Input
                type='text'
                placeholder='city'
                label="City"
                labelPlacement='outside'
                radius='sm'
                value={user.city}
                readOnly={readonly}
            />
            <Input
                type='text'
                placeholder='country'
                label="Country"
                labelPlacement='outside'
                radius='sm'
                value={user.country}
                readOnly={readonly}
            />
            <Button disabled={readonly} color={readonly ? "default" : 'primary'} radius='sm' className='place-items-end'>
                Submit
            </Button>
        </form>
    )
}

export default UserInfoInput

