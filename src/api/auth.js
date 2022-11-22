import auth from '@react-native-firebase/auth';

import endpoints, { baseurl } from '~/api/endpoints';
import { showMessage, hideMessage } from "react-native-flash-message";
import authErrorMessageParse from '~/utils/authErrorMessageParser';
import { post } from './service';

export const login = async (username, password) => {
  let responseObj = await post(endpoints.login, JSON.stringify({ username, password }));

  if (responseObj.success) {
    global.token = responseObj.data.token;
  }

  return responseObj;
};

export const createUserWithFB = async (email, password) => {
  if (password == "" || email=="" ) {
    showMessage({ message: "Alanları doğru şekilde giriniz", type: 'danger' });
    return;
  }
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);

    return { data: null, status: 200, success: true };
  } catch (error) {
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
    console.error(error);
  }

  return { data: null, status: 500, success: false };
};

export const loginUserWithFB = async (email, password) => {
  if (password == "" || email == "") {
    showMessage({ message: "Alanları doğru şekilde giriniz", type: 'danger' });
    return;
  }
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);

    return { data: null, status: 200, success: true };
  } catch (error) {
    console.error(error);
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
  }

  return { data: null, status: 500, success: false };
};
export const logout= async () => {
  try {
    const response = await auth().signOut();

    return { data: null, status: 200, success: true };
  } catch (error) {
    console.error(error);
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
  }

  return { data: null, status: 500, success: false };
};