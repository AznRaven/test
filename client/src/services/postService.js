import { customAxios, customAxiosWithAuth } from './api'

export async function getAllPosts() {
    const axios = customAxios()
    try {
        const response = await axios.get('https://t.aznraven.com/posts')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getPost(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`https://t.aznraven.com/posts/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deletePost(id) {
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`https://t.aznraven.com/posts/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createPost(post) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('https://t.aznraven.com/posts', post)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updatePost(id, post) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`https://t.aznraven.com/posts/${id}`, post)
    } catch(err) {
        console.log(err.message)
    }
}