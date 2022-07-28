import { $authHost, $host } from "."

export const deleteBrands = async (listId) => {
    const response = await $authHost.delete('api/brands/', { data: { listId } })
    return response
}

export const updateBrand = async (id, name) => {
    const response = await $authHost.patch('api/brands/', { id, name })
    return response
}

export const addBrand = async (name) => {
    const response = await $authHost.post('api/brands/', { name })
    return response
}

export const getBrand = async (id) => {
    const response = await $authHost.get('api/brands/get-one', { params: { id: id } })
    return response
}

export const getBrands = async () => {
    const response = await $host.get('api/brands')
    return response
}