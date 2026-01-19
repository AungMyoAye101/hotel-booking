"use client";

import { Avatar, Card, CardBody, CardHeader, Divider, Input, Tab, Tabs, } from '@heroui/react'
import React from 'react'
import UserInfoForm from '../booking/user-info-form';
import { User } from 'lucide-react';
import UserInfoInput from './user-input';
const user = {
    _id: "12345",
    name: "Aung Myo Aye",
    email: "aungmyo@example.com",
    country: "Myanmar",
    city: "Yangon",
    phone: "+95 912345678",
}

const Profile = () => {
    return (
        <Card className="rounded-2xl shadow-md border border-slate-200">
            {/* Header */}
            <CardHeader className="flex gap-4 items-center py-4">
                <Avatar
                    src={'/user.jpg'}
                    name={user.name}
                    size='lg'
                    isBordered
                />
                <div>
                    <h1 className="text-2xl font-semibold">{user.name}</h1>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </CardHeader>

            <Divider />

            {/* Body */}
            <CardBody >
                <Tabs aria-label='Options' color='secondary'>
                    <Tab key='personal info' title='Personal info'>
                        <UserInfoInput user={user} readonly={true} />
                    </Tab>

                    <Tab key='update' title='Update info'>
                        <UserInfoInput user={user} readonly={false} />
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Profile