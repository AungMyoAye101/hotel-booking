export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) {
    throw new Error("Base url is required.")
}