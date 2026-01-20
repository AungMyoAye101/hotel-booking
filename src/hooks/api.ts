'use server'
import { BASE_URL } from "@/lib";
import { APIResponse } from "@/types";
import { cookies } from "next/headers";




export async function refresh(): Promise<string> {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token')?.value;
    console.log(refresh_token, "ref")

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(refresh_token ? { "Cookie": `refresh_token=${refresh_token}` } : '')
    };

    const res = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        headers,
        credentials: 'include'
    })
    const data: APIResponse<{ token: string }> = await res.json();
    console.log(data)
    // if (!res.ok) {
    //     throw new Error("Failed to refresh")
    // }



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

