export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) {
    throw new Error("Base url is required.")
}

type QueryTypes = {
    page?: number,
    limit?: number,
}
type useFetchPropsTypes = {
    endpoint: string,
    method: "GET" | "POST" | "PUT",
    data?: any,
    query?: QueryTypes
}



export async function serverFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {

    const res = await fetch(`${BASE_URL}${endpoint}`,
        {
            ...options,
            headers: {
                "Content-type": "application/json",
                ...options?.headers,

            },
            cache: "force-cache"

        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch.")
    }

    const data = res.json()
    // console.log(data)
    return data;

}

