import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { APIResponse } from "@/types";
import next from "next";
import { revalidatePath } from "next/cache";
async function handler(req: NextRequest): Promise<NextResponse> {
    const { pathname, search } = req.nextUrl;

    const endpoint = pathname.replace('/api/server', "") + search;

    const BASE_URL = process.env.BASE_URL;

    if (!BASE_URL) {
        return NextResponse.json(
            { error: "API_URL environment variable is not set" },
            { status: 500 }
        );


    }
    const cookieStore = await cookies();
    const access_token = cookieStore.get("access_token")?.value;

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (access_token) {
        headers.Authorization = `Bearer ${access_token}`;
    }

    let body;
    if (req.method !== "GET" && req.method !== "HEAD") {
        try {
            body = await req.json();
        } catch (error) { }


    }
    try {
        console.log(BASE_URL + endpoint)
        // const response = await axios.request({
        //     baseURL: BASE_URL,
        //     url: endpoint,
        //     method: req.method,
        //     headers,
        //     data: body,
        //     validateStatus: () => true,
        // })
        const response = await fetch(BASE_URL + endpoint, {
            method: req.method,
            headers,
            body,
            credentials: "include"
        })
        console.log(response)
        if (!response.ok) {
            throw new Error("Failed")
        }
        const data: APIResponse<any> = await response.json()
        return NextResponse.json(
            data,
            { status: response.status }
        )
    } catch (error) {
        const axiosErr = error as AxiosError;
        return NextResponse.json({
            error: axiosErr.response?.data || axiosErr.message
        },
            { status: axiosErr.response?.status || 500 })
    }




};

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }