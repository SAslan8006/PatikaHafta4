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
    case constants.DEFAULT_ACTION: {
      return { ...state, defaultParameter: actionObj.payload };
    }
    case constants.SET_APP: {
      return { ...state, [actionObj.key]: actionObj.value };
    }
    case constants.REQUEST_LOGIN_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: actionObj.payload.userInfo, loginStatus: true };
    }
    case constants.REQUEST_LOGOUT_USER_WITH_FB: {
      return { ...state, password: undefined, userInfo: null, loginStatus: false };
    }
    default:
      return state;
  }
};

export { app };
