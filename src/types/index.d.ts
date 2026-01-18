export interface APIResponse<T> {
    status: number,
    message: string,
    result: T
}

export type token = string

export type AuthResType = {
    token?: string,
    user: User
}