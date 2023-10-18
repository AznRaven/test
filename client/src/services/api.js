import axios from 'axios'

const baseURL = 
    process.env.NODE_ENV === 'development'
    ?
    'https://t.aznraven.com' 
    :
    process.env.REACT_APP_BASE_URL 

export function customAxios() {
    return axios.create({ baseURL })
}

export function customAxiosWithAuth() {
    return axios.create({ 
        baseURL, 
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}