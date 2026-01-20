import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "@/types";
// middleware.ts
export async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('access_token')?.value;
    const refreshToken = req.cookies.get('refresh_token')?.value;

    if (!accessToken && refreshToken) {

        const res = await fetch(`http://localhost:5000/api/v1/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Cookie': `refresh_token=${refreshToken}`
            }
        });

        if (res.ok) {
            const data: APIResponse<{ token: string }> = await res.json();
            const newAt = data.result.token;

            const response = NextResponse.next();

            // Update browser cookies so CSR sees the new token
            response.cookies.set('access_token', newAt, { httpOnly: true });

            // PASS THE NEW TOKEN TO SSR VIA HEADERS
            response.headers.set('x-internal-access-token', newAt);
            return response;
        }
    }
    return NextResponse.next();
}