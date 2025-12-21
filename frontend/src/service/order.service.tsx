import axios from "axios"
import { CartItem } from "@/store/cart.store"

type UserAddress = {
    id: string
    userId: string
    addressName: string
    street: string
    city: string
    province: string
    postalCode: string
    phone: string
    createdAt: string
}

const API_URL = import.meta.env.VITE_API_URL + '/api/order'
type OrderItem = {
    productId: string | number
    quantity: number
}


export const getToken = async (token: string, items: OrderItem[], address: UserAddress | null, note: string | null) => {
    return axios.post(`${API_URL}/create`,
        {
            items, address, note
        }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}