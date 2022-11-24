import * as constants from '~/redux/constants';

const initialState = {
  defaultParameter: false,
  username: '',
  password: '',

  userInfo: {},

  loginStatus: false,
  loginLoading: false,
};

const app = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case constants.SET_APP: {
      return { ...state, [actionObj.key]: actionObj.value };
    }
    case constants.REQUEST_CREATE_USER_WITH_FB:{
      return { ...state,password: undefined, userInfo: null, loginStatus: false };
    }
    case constants.REQUEST_LOGIN_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: actionObj.payload.userInfo, loginStatus: true };
    }
    case constants.REQUEST_LOGOUT_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: null, loginStatus: false };
    }
    case constants.REQUEST_GET_ALL_PRODUCTS: {
      return { ...state, products: actionObj.payload.products };
    }
    default:
      return state;
  }
};

export { app };
