import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = req.body;
    console.log(body)
    try {

    } catch (error) {
        const axiosErr = error as AxiosError;
        return NextResponse.json({
            error: axiosErr.response?.data || axiosErr.message
        },
            { status: axiosErr.response?.status || 500 })
    }
}