'use client';
import { Button, DateInput, DatePicker, DateRangePicker, Input } from "@heroui/react";
import { Search } from "lucide-react";
const InputCon = () => {
    return (
        <div className="flex  items-center p-1 bg-primary rounded-lg gap-1  overflow-hidden ">

            <Input type="text" placeholder="destination" label='Where' />
            <DatePicker label="Check-In" />
            <DatePicker label="Check-Out" />
            <Input type="number" placeholder="guest" label='Who' />
            <Button isIconOnly radius="full" className="bg-white"><Search /></Button>
        </div>
    )
}

export default InputCon