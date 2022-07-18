import { $host } from "."

export const fetchBrands = async () => {
    const response = await $host.get('api/brands')
    return response
}

export const getDevices = async (brandId, typeId, limit , page) => {
    const params = {
        params: {
            brandId,
            typeId,
            limit,
            page
        }
    }
    const response = await $host.get('api/device', params)
    return response
}