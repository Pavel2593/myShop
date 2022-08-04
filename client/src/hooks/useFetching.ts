import { IResponse } from './../../types/response';
import { useState } from "react"

export interface IUseFetching {
    fetching: (...args: any[]) => void
    isLoading: boolean
    data: object | boolean
    status: number | boolean
    error: string
}

export const useFetching: (callback: (...args:string[]) => Promise<IResponse>) => IUseFetching = (callback) => {
    const [data, setData] = useState<object | boolean>(false)
    const [status, setStatus] = useState<number | boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    const fetching = async (...args: any[]) => {
        try {
            setIsLoading(true)
            const response: IResponse = await callback(...args)
            setData(response.data)
            setStatus(response.status)
        } catch (e: any | unknown) {
            if (e?.response?.data.message) {
                setError(e.response.data.message)
            } else {
                setError(e.message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        fetching,
        isLoading,
        data,
        status,
        error
    }
}