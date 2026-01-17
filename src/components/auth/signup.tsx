
'use client';
import { Button, Card, CardBody, CardHeader, Form, Input } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

const Signup = () => {
    const [action, setAction] = React.useState();
    return (
        <section className='h-screen flex justify-end items-center'>
            <Image
                src={'/hotel-bg.png'}
                alt='hotel photo'
                width={1400}
                height={1240}
                className='object-cover absolute inset-0 -z-10'

            />
            <Card >
                <CardHeader className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-semibold text-center'>Signup</h1>
                    <p>Please create new account.</p>
                </CardHeader>
                <CardBody className='min-w-xs max-w-4xl px-4 py-6 '>
                    <Form
                        className="w-full max-w-xs flex flex-col gap-4"
                        // onReset={() => setAction("reset")}
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = Object.fromEntries(new FormData(e.currentTarget));

                            // setAction(`submit ${JSON.stringify(data)}`);
                        }}
                    >
                        <Input
                            isRequired
                            errorMessage="Please enter a valid username"
                            label="Username"
                            labelPlacement="outside"
                            name="username"
                            placeholder="Enter your username"
                            type="text"
                        />


                        <Input
                            isRequired
                            errorMessage="Please enter a valid email"
                            label="Email"
                            labelPlacement="outside"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <Input
                            isRequired
                            errorMessage="Please enter a valid password"
                            label="Password"
                            labelPlacement="outside"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                        />
                        <div className="flex gap-2">
                            <Button color="primary" type="submit">
                                Submit
                            </Button>
                            <Button type="reset" variant="flat">
                                Reset
                            </Button>
                        </div>
                        {action && (
                            <div className="text-small text-default-500">
                                Action: <code>{action}</code>
                            </div>
                        )}
                    </Form>
                </CardBody>
            </Card>
        </section>
    )
}

export default Signup

