"use client";
import { Button } from "@heroui/button"
import { BookMarked, LogOut, User } from "lucide-react";
import Link from "next/link"


const NavUser = () => {
    return (
        <div className="w-60 p-4 rounded-lg bg-background flex flex-col gap-1">


            <Button as={Link} href="/user/1213" radius="sm" startContent={<User size={20} />} className="flex justify-start items-center">

                Profile
            </Button>
            <Button as={Link} href="/user/1213" radius="sm" startContent={<BookMarked size={20} />} className="flex justify-start items-center">

                My bookings
            </Button>

            <Button color="danger" radius="sm" startContent={<LogOut size={20} />} className="flex justify-start items-center">

                Logout
            </Button>
        </div>
    )
}

export default NavUser