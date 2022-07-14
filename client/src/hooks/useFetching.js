import { useState } from "react"

export const useFetching = (callback) => {
    const [data, setData] = useState(false)
    const [status, setStatus] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            const response = await callback(...args)
            setData(response.data)
            setStatus(response.status)
        } catch (e) {
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