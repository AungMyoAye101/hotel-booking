'use server'
import { BASE_URL } from "@/lib";
import type { APIResponse } from "@/types";
import { notFound } from "next/navigation";


class FetchError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}



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
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`,
            {
                ...options,
                headers: {
                    "Content-type": "application/json",


                },
                credentials: "include",
                cache: 'no-store'

            }
        )

        if (!res.ok) {

            throw new FetchError(res.status, await res.text())
        }

        const data = res.json()

        return data;
    } catch (error) {
        console.log(error)
        if (error instanceof FetchError) {
            if (error.status === 404) notFound()

        }

        throw error // ⬅️ let Error Boundary handle it
    }


}

