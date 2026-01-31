import { Card, Skeleton } from '@heroui/react'
import React from 'react'

const Loading = () => {
    return (
        <section className='min-h-screen flex justify-center items-center'>
            <Card className='p-4 w-full max-w-lg'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Skeleton className='w-20 h-20 rounded-full' />
                    <Skeleton className='w-60 h-6 rounded' />
                    <Skeleton className='w-60 h-6 rounded' />
                    <Skeleton className='w-40 h-6 rounded ' />
                    <Skeleton className='w-3/4 h-72 my-4 rounded' />

                    <div className='flex justify-center gap-4 mt-4 rounded'>
                        <Skeleton className='h-12 w-34 rounded' />
                        <Skeleton className='h-12 w-34 rounded' />
                    </div>
                </div>


            </Card>

        </section>
    )
}

export default Loading