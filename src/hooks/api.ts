'use server'
import { BASE_URL } from "@/lib";
import { APIResponse } from "@/types";
import { cookies } from "next/headers";




export async function refresh(refreshToken: string) {


    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Cookie': `refresh_token=${refreshToken}`
        }
    });


    if (res.ok) {

        const data: APIResponse<{ token: string }> = await res.json();
        return data.result.token;
    } else {
        console.log("Failed to refresh.")
    }

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

