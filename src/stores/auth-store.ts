import { User } from "@/types/user-type";
import { create } from "zustand";

type AuthType = {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean,
    setUser: (user: User) => void,
    setToken: (token: string) => void,
    logout: () => void
}

export const useAuth = create<AuthType>((set) => ({
    user: null,
    token: null,
    isAuthenticated: false,
    setUser: (user: User) => set({ user, isAuthenticated: true }),
    setToken: (token: string) => set({ token, isAuthenticated: true }),
    logout: () => set({
        user: null,
        token: null,
        isAuthenticated: false,
    })

}))