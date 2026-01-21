import { User } from "@/types/user-type";
import { create } from "zustand";

type AuthType = {
    user: User | null,
    token: string | null,
    isAutenticated: boolean,
    setUser: (user: User) => void,
    setToken: (token: string) => void,
    reset: () => void
}

export const useAuth = create<AuthType>((set) => ({
    user: null,
    token: null,
    isAutenticated: false,
    setUser: (user: User) => set({ user, isAutenticated: true }),
    setToken: (token: string) => set({ token, isAutenticated: true }),
    reset: () => set({
        user: null,
        token: null,
        isAutenticated: false,
    })

}))