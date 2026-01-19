'use server'
import { BASE_URL } from "@/lib";
import { APIResponse } from "@/types";
import { cookies } from "next/headers";




export async function refresh(): Promise<string> {
    const res = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        credentials: 'include'
    })
    const data: APIResponse<{ token: string }> = await res.json();
    console.log(data)
    if (!res.ok) {
        throw new Error("Failed to refresh")
    }


    const cookieStore = await cookies();
    cookieStore.set('access_token', data.result.token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",

    })
    console.log(data.result.token)
    return data.result.token;
}



export async function serverFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {

    const res = await fetch(`${BASE_URL}${endpoint}`,
        {
            ...options,
            headers: {
                "Content-type": "application/json",
                // ...token && {
                //     Authorization: `Bearer ${token}`,
                // }


            },
            credentials: "include",
            cache: "force-cache"

        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch.")
    }

    const data = res.json()

    return data;

}

