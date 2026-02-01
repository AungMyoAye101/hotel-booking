import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
console.log("running")
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
    const headers = { "Content-Type": "application/json" };

    let body;
    if (req.method !== "GET" && req.method !== "HEAD") {
        try {
            body = await req.json();
        } catch (error) { }


    }
    try {

        const response = await axios.request({
            baseURL: BASE_URL,
            url: endpoint,
            method: req.method,
            headers,
            data: body,
            validateStatus: () => true,
        })
        return NextResponse.json({ data: response.data }, { status: response.status })
    } catch (error) {
        const axiosErr = error as AxiosError;
        return NextResponse.json({
            error: axiosErr.response?.data || axiosErr.message
        },
            { status: axiosErr.response?.status || 500 })
    }




};

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }