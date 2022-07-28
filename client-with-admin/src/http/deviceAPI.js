import { $authHost, $host } from "."

export const fetchBrands = async () => {
    const response = await $host.get('api/brands')
    return response
}

export const deleteDevices = async (listId) => {
    const response = await $authHost.delete('api/devices', { data: { listId } })
    return response
}

export const updateDevices = async (id, name, price, type, brand, img) => {
    const response = await $authHost.patch('api/devices', { id, name, price, type, brand, img })
    return response
}

export const addDevice = async (name, price, brandId, typeId, img) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('brandId', `${brandId}`)
    formData.append('typeId', `${typeId}`)
    formData.append('img', img)
    console.log(img)
    const response = await $authHost.post('api/devices', formData)
    return response
}

export const getDevices = async (brandId, typeId, limit, page) => {
    const params = {
        params: {
            brandId,
            typeId,
            limit,
            page
        }
    }
    const response = await $host.get('api/devices', params)
    return response
}

export const getDevice = async (id) => {
    const response = await $host.get('api/devices/get-one', { params: { id: id } })
    return response
}