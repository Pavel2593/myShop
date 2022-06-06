import { useState } from "react"

export const useFetching = (callback) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = (...args) => {
        callback(...args).then((data) => {
            setData(data)
        }).catch((e) => {
            setError(e)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return [fetching, data, isLoading, error]
}