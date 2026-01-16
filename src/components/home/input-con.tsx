'use client';
import { Button, DateInput, DatePicker, DateRangePicker, Input } from "@heroui/react";
import { Search } from "lucide-react";
const InputCon = () => {
    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-5 gap-2  items-center  p-2 bg-white rounded-lg   overflow-hidden ">

            <Input type="text" placeholder="destination" size="sm" radius="none" />
            <DatePicker size="sm" radius="none" />
            <DatePicker size="sm" radius="none" />
            <Input type="number" placeholder="guest" size="sm" radius="none" />
            <Button color="primary" className="sm:col-span-2 md:col-span-1">Search</Button>
        </div>
    )
}

export default InputCon