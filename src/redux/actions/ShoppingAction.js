import {add_cart, delete_cart} from '../types/ShoppingTypes';
export const addCartAction = (item) => {
    return {
        type: add_cart,
        item
    }
}
export const deleteCartAction = (item) => {
    return {
        type: delete_cart,
        item
    }
}