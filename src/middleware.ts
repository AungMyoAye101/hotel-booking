import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/types";


export async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('access_token')?.value;
    const refreshToken = req.cookies.get('refresh_token')?.value;
    console.log(`Middleware running for: ${req.nextUrl.pathname}`);

    if (!accessToken && refreshToken) {

        const res = await fetch(`http://localhost:5000/api/v1/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Cookie': `refresh_token=${refreshToken}`
            }
        });


        const data: APIResponse<{ token: string }> = await res.json();

        if (res.ok) {
            const token = data.result.token;

            const response = NextResponse.next();

            // Update browser cookies so CSR sees the new token
            response.cookies.set('access_token', token, { httpOnly: true });

            // PASS THE NEW TOKEN TO SSR VIA HEADERS
            response.headers.set('x-internal-access-token', token);
            return response;
        }

    }

    return NextResponse.next();
}

// Optimized Matcher - only run on protected routes to prevent unnecessary execution
export const config = {
    matcher: [
        '/',
        '/booking/:path*',
        '/hotel/:path*',
        '/payment/:path*',
        '/user/:path*'
    ],
}