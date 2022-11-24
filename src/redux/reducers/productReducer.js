import * as constants from '../constants';

const initialState = {
    products: [],
};

const productReducer = (state = initialState, actionObj) => {
    switch (actionObj.type) {
       
        case constants.REQUEST_GET_ALL_PRODUCTS: {
            return { ...state, products: actionObj.payload.products };
        }
        default:
            return state;
    }
};

export { productReducer };