export interface IUser {
    isAuth: boolean
    user: string
    setIsAuth: (bool: boolean) => void
    setUser: (user: string) => void
}