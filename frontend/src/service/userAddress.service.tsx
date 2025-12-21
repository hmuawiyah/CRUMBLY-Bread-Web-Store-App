import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL + '/api/useraddresses'

export const getUserAddresses = (token: string) => {
    return axios.get(`${API_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}