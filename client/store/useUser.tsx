import { create } from "zustand"

interface UserProps {
    name: string
    role: "user" | "worker"
}

interface UseUserProps {
    user: null | UserProps
    setUser: (user: null | UserProps) => void
}

const useUser = create<UseUserProps>((set) => ({
    user: null,
    setUser: (user: any) => set({ user }),
}))

export default useUser
