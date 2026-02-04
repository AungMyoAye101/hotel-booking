"use server";
import { NextRequest, NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;
export async function POST(req: NextRequest) {
    if (!BASE_URL) {
        throw new Error("Base url is required.")
    }
    try {
        const fields = await req.json();
        console.log(fields)
        const res = await fetch(
            BASE_URL + '/auth/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(fields),
            credentials: "include"
        }
        );

        const data = await res.json();
        console.log(data, "in server")
        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || "Login failed" },
                { status: res.status }
            );
        }

        const refresh_token = res.headers.get('set-cookie');

        const response = NextResponse.json(data);

        if (refresh_token) {
            response.headers.set("set-cookie", refresh_token);
        }
        response.cookies.set('access_token', data.result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 15, // 15 min
        })
        return response;
    } catch (error) {

        console.error(error);
        return NextResponse.json({
            message: error instanceof Error ? error.message : "Somthing went worng"
        },
            { status: 500 }
        )
    }



}