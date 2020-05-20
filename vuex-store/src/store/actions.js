import axios from 'axios'

export const getProducts = ({commit}) => {
    axios
        .get('https://my-json-server.typicode.com/TeodorDimitrov89/Vuex/products')
        .then(response => {
            let products = response.data
            commit('SET_PRODUCTS', products)
        })
}

export const getProduct = ({commit}, id) => {
    axios
        .get(`https://my-json-server.typicode.com/TeodorDimitrov89/Vuex/products/${id}`)
        .then(response => {
            let product = response.data
            commit('SET_PRODUCT', product)
        })
}


export const addProductToCart = ({commit}, {product, quantity}) => {
    commit('ADD_TO_CART', {product, quantity})

    axios
        .post('https://my-json-server.typicode.com/TeodorDimitrov89/Vuex/cart/', {
            // body: JSON.stringify({
                id: product.id,
                quantity,
            // }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        .then(response => console.log(response))
        .catch(err => console.log(err))

}


export const addCartItems = ({commit}) => {
    //Call API to get all cartItems


    axios
        .get('https://my-json-server.typicode.com/TeodorDimitrov89/Vuex/cart/')
        .then(response => console.log(response))
        .catch(error => console.log(error))
}