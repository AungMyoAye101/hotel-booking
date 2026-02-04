import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PROTECTED_ROUTE } from "./lib";

export async function proxy(req: NextRequest) {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token')?.value;
    const refresh_token = cookieStore.get('refresh_token')?.value;
    console.log(access_token, refresh_token)
    // const pathname = req.nextUrl.pathname;
    // //protecfed route
    // if (PROTECTED_ROUTE.includes(pathname)) {
    //     if (!access_token) {
    //         return NextResponse.redirect(new URL('/login', req.url))
    //     }
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/booking/:path*',
        // '/hotel/:path*',
        '/payment/:path*',
        '/user/:path*'
    ],
}