'use client';
import { Button, DateRangePicker, Input } from "@heroui/react";
const InputCon = () => {
    return (
        <div className="flex gap-1 items-center bg-primary">

            <Input type="text" placeholder="destination" radius="sm" />
            <DateRangePicker className="max-w-xs " size="md" radius="sm" />;
            <Input type="number" placeholder="guest" radius="sm" />
            <Button className="bg-primary" radius="sm" >Book Now</Button>
        </div>
    )
}

export default InputCon