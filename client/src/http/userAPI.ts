import { IResponse } from './../../types/response';
import { $authHost, $host } from "."
import jwt_decode from 'jwt-decode'

export const registration = async (email: string, password: string) => {
    const { data } = await $host.post('api/users/registration', { email, password, role: 'USER' })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login: (email: string, password: string) => Promise<IResponse> = async (email, password) => {
    const response: IResponse = await $host.post('api/users/login', { email, password })
    localStorage.setItem('token', response.data.token)
    response.data = { ...jwt_decode(response.data.token) }
    return response
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

export const getUsers = async (page: number, limit: number) => {
    const response = await $authHost.get('api/users', { params: { page: page, limit: limit } })
    return response
}

export const deleteUsers = async (listId: number) => {
    const response = await $authHost.delete('api/users', { data: { listId } })
    return response
}

export const updateUser = async (id: number, email: string, role: string) => {
    const response = await $authHost.patch('api/users', { id, email, role })
    return response
}

export const getUser = async (id: number) => {
    const response = await $authHost.get('api/users/get-one', { params: { id: id } })
    return response
}

export const addUser = async (email: string, password: string, role: string) => {
    const response = await $authHost.post('api/users', { email, password, role })
    return response
}