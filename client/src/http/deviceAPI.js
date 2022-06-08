import { $authHost, $host } from "."

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const fetchDevices = async (brandId, typeId, limit , page) => {
    const params = {
        params: {
            brandId,
            typeId,
            limit,
            page
        }
    }
    const { data } = await $host.get('api/device', params)
    return data
}