"use client";

import { Avatar, Card, CardBody, CardHeader, Divider, Tab, Tabs, } from '@heroui/react'

import UserInfoInput from './user-input';
import { useGetUserById } from '@/hooks/use-user';

type props = {
    id: string,
}

const Profile = ({ id }: props) => {

    const { data: user, isLoading } = useGetUserById(id);
    if (isLoading) {
        return <p>Loading....</p>
    }
    console.log(user)
    return (
        <Card className="rounded-2xl shadow-md border border-slate-200">
            {/* Header */}
            <CardHeader className="flex gap-4 items-center py-4">
                <Avatar
                    src={'/user.jpg'}
                    name={user?.name}
                    size='lg'
                    isBordered
                />
                <div>
                    <h1 className="text-2xl font-semibold">{user?.name}</h1>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
            </CardHeader>

            <Divider />

            {/* Body */}
            <CardBody >
                <Tabs aria-label='Options' color='secondary'>
                    <Tab key='personal info' title='Personal info'>
                        <UserInfoInput user={user!} readonly={true} />
                    </Tab>

                    <Tab key='update' title='Update info'>
                        <UserInfoInput user={user!} readonly={false} />
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Profile