import { Card, Skeleton } from '@heroui/react'
import React from 'react'

const Loading = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <Card className='p-4'>
                <Skeleton className='w-40 h-6' />
                <Skeleton className='w-60 h-6' />
                <Skeleton className='w-60 h-6' />
                <Skeleton className='w-40 h-6 mx-auto' />
                <div className='grid grid-cols-2 gap-4'>
                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />

                    <Skeleton className='w-40 h-6' />
                </div>
                <div className='flex justify-center gap-4'>
                    <Skeleton className='h-20 w-40' />
                    <Skeleton className='h-20 w-40' />
                </div>

            </Card>

        </section>
    )
}

export default Loading