'use server'

import { notFound } from "next/navigation";
const BASE_URL = process.env.BASE_URL;

class FetchError extends Error {
    status: number;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}




export async function serverFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {

    try {
        const res = await fetch(`${BASE_URL + endpoint}`,
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

        if (error instanceof FetchError) {
            if (error.status === 404) notFound()

        }

        throw error
    }


}

