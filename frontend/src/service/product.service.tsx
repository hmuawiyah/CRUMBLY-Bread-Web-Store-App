import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL + '/api/product'

export const getProduct = async () => {
  return axios.get(`${API_URL}/`, {
  })
}

export const getProductsByIds = async (token: string, productIds: (string | number)[]) => {
  try {
    return await axios.post(`${API_URL}/by-ids`, {
      ids: productIds
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })

  } catch (error) {
    console.log('Failed to fetch products by ids:', error)
    throw error
  }
}

