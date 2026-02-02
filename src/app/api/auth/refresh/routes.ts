import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;
export async function POST(req: NextRequest) {
    const cookieStore = await cookies();

    const access_token = cookieStore.get("access_token")?.value;

    const refresh_token = cookieStore.get("refresh_token")?.value;

    if (!refresh_token && !access_token) {
        return NextResponse.json({
            message: "user sign out "
        }, { status: 400 })
    }
    if (refresh_token && !access_token) {
        try {
            const res = await fetch(BASE_URL + '/auth/refresh', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    'Cookie': `refresh_token=${refresh_token}`,
                },
                credentials: "include",
            })

            if (!res.ok) {
                throw new Error("Failed to refresh token");
            }
            const data = await res.json();
            const response = NextResponse.next();
            response.cookies.set("access_token", data.result.token, {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 15 * 60 * 60 * 1000
            })
            return NextResponse.json({
                data,
            }, { status: res.status })
        } catch (error) {

            if (error instanceof Error) {
                return NextResponse.json({
                    message: error.message
                }, { status: 500 })
            }
        }


    }



}