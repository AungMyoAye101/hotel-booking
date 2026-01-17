'use client'
import { useBookingStore } from '@/stores/booking-store'
import { Chip, Progress } from '@heroui/react'

const Indicator = () => {
    const stage = useBookingStore(s => s.stage)
    return (
        <div className='flex items-center   '>
            <Chip radius='full' color='primary' size={'lg'}>1</Chip>

            <Progress aria-label='progress' value={stage > 1 ? 100 : 0} color='primary' radius='none' />
            <Chip radius='full' color='primary' size={'lg'}>2</Chip>
            <Progress aria-label='progress' value={stage > 2 ? 100 : 0} color='primary' radius='none' />

            <Chip radius='full' color='primary' size={'lg'}>3</Chip>
        </div>
    )
}

export default Indicator