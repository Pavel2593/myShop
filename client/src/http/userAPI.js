import { $authHost, $host } from "."
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    const { data } = await $host.post('api/users/registration', { email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/users/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    let result = false
    if (localStorage.getItem('token')) {
        const { data } = await $authHost.get('api/users/auth',)
        localStorage.setItem('token', data.token)
        result = jwt_decode(data.token)
    }
    return result
}

export const getUsers = async (page, limit) => {
    const { data } = await $authHost.get('api/users', { params: { page: page, limit: limit } })
    return data
}

export const getUser = async (id) => {
    const { data } = await $authHost.get('api/users/get-one', { params: { id: id } })
    return data
}

export const addUser = async (email, password, role) => {
    const { data } = await $authHost.post('api/users/add', { email, password, role })
    return data
}

export const updateUser = async (id, email, role) => {
    const { data } = await $authHost.patch('api/users/update', { id, email, role })
    return data
}

export const deleteUsers = async (listId) => {
    const { data } = await $authHost.delete('api/users/delete', { data: { listId } })
    return data
}