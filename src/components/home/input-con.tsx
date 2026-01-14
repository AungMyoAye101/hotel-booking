'use client';
import { Button, DateInput, DatePicker, DateRangePicker, Input } from "@heroui/react";
import { Search } from "lucide-react";
const InputCon = () => {
    return (
        <div className="flex  items-center  p-1 bg-white rounded-lg   overflow-hidden ">

            <Input type="text" placeholder="destination" size="sm" radius="none" />
            <DatePicker size="sm" radius="none" />
            <DatePicker size="sm" radius="none" />
            <Input type="number" placeholder="guest" size="sm" radius="none" />
            <Button color="primary" className="mx-1">Search</Button>
        </div>
    )
}

export default InputCon