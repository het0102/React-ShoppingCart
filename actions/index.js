import actionTypes from './actionTypes'

export const addToCart = (product) => {
    return{
        type: actionTypes.ADD_TO_CART ,
        payload: {
            id:product.id,
            title:product.title,
            description:product.description,
            category:product.category,
            price:product.price,
            image:product.image,
        }
    }
}

export const removeFromCart= (id) => {
    return{
        type: actionTypes.REMOVE_FROM_CART ,
        id
    }
}