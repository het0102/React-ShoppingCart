import actionTypes from './actionTypes'
import callApi from "../api"

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

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('/products' , 'GET', null).then(res => {
            dispatch(GetAllProduct(res.data));
        });
    }
}

export const GetAllProduct = (payload) => {
    return{
        type: actionTypes.GET_ALL_PRODUCT ,
        payload
    }
}