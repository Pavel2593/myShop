import { $authHost, $host } from "."

export const deleteTypes = async (listId) => {
    const response = await $authHost.delete('api/types', { data: { listId } })
    return response
}

export const updateType = async (id, name) => {
    const response = await $authHost.patch('api/types', { id, name })
    return response
}

export const addType = async (name) => {
    const response = await $authHost.post('api/types', { name })
    return response
}

export const getType = async (id) => {
    const response = await $authHost.get('api/types/get-one', { params: { id: id } })
    return response
}

export const getTypes = async () => {
    const response = await $host.get('api/types')
    return response
}