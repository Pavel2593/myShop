import { $authHost, $host } from "."

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const fetchDevices = async () => {
    const { data } = await $host.get('api/device')
    return data
}