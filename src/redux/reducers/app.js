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
    case constants.REQUEST_LOGIN: {
      return { ...state, password: undefined, userInfo: actionObj.payload.userInfo, loginStatus: true };
    }

    default:
      return state;
  }
};

export { app };
