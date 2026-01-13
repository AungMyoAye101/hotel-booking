'use client';

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

export default function HotelCardList() {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold">Card Component Example</h2>
            <div className="flex gap-4 overflow-hidden overflow-x-scroll">


                {
                    Array(10).fill(null).map((_, index) => (
                        <Card className="min-w-xs" key={index}>




                            <CardBody>
                                <div className="relative w-full">


                                    <Image
                                        alt="heroui logo"
                                        height={140}
                                        radius="sm"
                                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                        width='100 %'
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <h3 className="mt-4 mb-2 text-lg font-semibold">HeroUI</h3>
                                    <p>Make beautiful websites regardless of your design experience.</p>
                                </div>

                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
                                    Visit source code on GitHub.
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </section >

    );
}
