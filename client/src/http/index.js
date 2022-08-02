import axios from 'axios'
import constants from '../constants/index'

const $host = axios.create({
    baseURL: constants.apiUrl
})

const $authHost = axios.create({
    baseURL: constants.apiUrl
})

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}