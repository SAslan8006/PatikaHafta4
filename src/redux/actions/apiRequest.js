import * as constants from '../constants/index';

export const requestAllProducts = () => async (dispatch, getState) => {
    const { data, status, success } = await products.getAllProducts();

    if (success) {
        dispatch({
            type: constants.REQUEST_GET_ALL_PRODUCTS,
            payload: { products: data },
        });
    } else {
    }
};
