
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";



const BASE_URL = process.env.BASE_URL;
let refreshing: Promise<Response> | null = null;


const refreshToken = async (refreshToken: string) => {
    if (!refreshing) {
        refreshing = fetch(BASE_URL + '/auth/refresh', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "cookie": refreshToken
            },
            credentials: "include",
            cache: "no-store"
        }).finally(() => (refreshing = null))
    }

    return refreshing;
}

async function forward(req: NextRequest) {
    const { pathname, search } = req.nextUrl;

    const endpoint = pathname.replace('/api/server', "") + search;

    const cookieStore = await cookies();
    const access_token = cookieStore.get("access_token")?.value;
    const refresh_token = cookieStore.get("refresh_token")?.value;

    const headers: Record<string, string> =
    {
        "Content-Type": "application/json"
    };

    if (access_token) {
        headers.Authorization = `Bearer ${access_token}`;
    }

    if (refresh_token) {
        headers.cookie = 'refresh_token=' + refresh_token;
    }


    let body;
    if (!["GET", "HEAD"].includes(req.method)) {

        body = JSON.stringify(await req.json());

    }


    return fetch(BASE_URL + endpoint, {
        method: req.method,
        headers,
        body,
        credentials: "include"
    })

}

const handler = async (req: NextRequest) => {
    if (!BASE_URL) {
        return NextResponse.json(
            { error: "API_URL environment variable is not set" },
            { status: 500 }
        );

    }
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get("refresh_token")?.value;

    let response = await forward(req);


    // ===========unauthorized error handle===========

    if (response.status === 401) {
        const refresh = await refreshToken(refresh_token ?? "");
        if (refresh.ok) {
            response = await forward(req);
        } else {
            return NextResponse.json({
                error: "Session expired",
            }, { status: 401 });

        }
    }

    const data = await response.json()

    const res = NextResponse.json(data, { status: response.status })

    response.headers.getSetCookie().forEach(cookie => {
        res.headers.append('set-cookie', cookie)
    })


    return res;
}






export { handler as GET, handler as POST, handler as PUT, handler as DELETE }