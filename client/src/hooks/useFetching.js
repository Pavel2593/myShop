import { useState } from "react"

export const useFetching = (callback) => {
    const [data, setData] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            const data = await callback(...args)
            setData(data)
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

    return [fetching, data, isLoading, error]
}