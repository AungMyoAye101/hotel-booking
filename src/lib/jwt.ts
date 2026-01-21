import { TokenPayload } from "@/types";
import { User } from "@/types/user-type";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
if (!ACCESS_TOKEN) {
    throw new Error("Token is required.")
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, ACCESS_TOKEN) as TokenPayload
    } catch (error) {
        console.log(error)
        throw new Error("Token verify failed")
    }
}

