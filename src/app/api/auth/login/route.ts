"use server";
import { NextRequest, NextResponse } from "next/server";
const BASE_URL = process.env.BASE_URL;

export async function POST(req: NextRequest) {
    if (!BASE_URL) {
        throw new Error("Base url is required.")
    }
    try {
        const fields = await req.json();

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

        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || "Login failed" },
                { status: res.status }
            );
        }

        const token = res.headers.getSetCookie();


        const response = NextResponse.json({

            message: data.message,
            result: data.result.user

        });
        response.cookies.set("access_token", data.result.token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        })

        if (token.length > 0) {
            token.forEach(cookie => {
                response.headers.append("set-cookie", cookie)
            })
        }

        console.log(data)
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