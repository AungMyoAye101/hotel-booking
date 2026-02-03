'use server';
import { APIResponse } from "@/types";
import { User } from "@/types/user-type";
import { loginType } from "@/validations/auth-schema";
import { cookies } from "next/headers";


const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
    throw new Error("Base url is required.")
}
export const login = async (fields: loginType) => {

    try {

        const response = await fetch(BASE_URL + '/auth/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(fields),
            credentials: "include"
        })


        const data: APIResponse<{
            token: string,
            user: User
        }> = await response.json();

        if (!response.ok) {
            throw new Error(data.message)
        }

        (await cookies()).set({
            name: "access_token",
            value: data.result.token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 15 * 60 * 1000,
        });


        return data;

    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Failed to login"
        }
            ;
    }
}