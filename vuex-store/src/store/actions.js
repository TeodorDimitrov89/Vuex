import axios from 'axios'

export const getProducts = ({commit}) => {
    axios
        .get('/database/products.json')
        .then(response => {
            let products = response.data
            commit('SET_PRODUCTS', products)
        })
}