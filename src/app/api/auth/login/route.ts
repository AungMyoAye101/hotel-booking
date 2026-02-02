
import { APIResponse } from "@/types";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;
export async function POST(req: NextRequest) {
    const body = await req.json();

    try {

        const response = await axios.post<APIResponse<{
            token: string,
            user: {
                _id: string,
                name: string,
                email: string
            }
        }>>(BASE_URL + '/auth/login', body);


        const access_token = response.data.result.token;



        const setCookies = response.headers["set-cookie"] || [];
        console.log(setCookies)
        const res = NextResponse.json(response.data);
        setCookies.forEach((cookieString: string) => {
            res.headers.append('Set-Cookie', cookieString)
        })

        return res;
    } catch (error) {
        const axiosErr = error as AxiosError;
        return NextResponse.json({
            error: axiosErr.response?.data || axiosErr.message
        },
            { status: axiosErr.response?.status || 500 })
    }
}