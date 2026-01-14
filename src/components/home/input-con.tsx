'use client';
import { Button, DateInput, DatePicker, DateRangePicker, Input } from "@heroui/react";
import { Search } from "lucide-react";
const InputCon = () => {
    return (
        <div className="flex  items-center  bg-white rounded-lg   overflow-hidden ">

            <Input type="text" placeholder="destination" label='Where' size="sm" radius="none" />
            <DatePicker label="Check-In" size="sm" radius="none" />
            <DatePicker label="Check-Out" size="sm" radius="none" />
            <Input type="number" placeholder="guest" label='Who' size="sm" radius="none" />
            <Button color="primary" className="mx-1">Search</Button>
        </div>
    )
}

export default InputCon