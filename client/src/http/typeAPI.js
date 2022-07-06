import { $authHost, $host } from "."

export const getTypes = async () => {
    const { data } = await $host.get('api/types')
    return data
}

export const addType = async (name) => {
    const data = await $authHost.post('api/types/add', { name })
    return data
}