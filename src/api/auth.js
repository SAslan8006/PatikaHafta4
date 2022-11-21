import auth from '@react-native-firebase/auth';

import endpoints, { baseurl } from '~/api/endpoints';
import { post } from './service';

// export const login = async (username, password) => {
//   let responseObj;

//   try {
//     const response = await fetch(baseurl + endpoints.login, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     responseObj = await response.json();

//     return responseObj;
//   } catch (error) {
//     alert('LOGIN ÇALIŞMADI');
//   }
// };

export const login = async (username, password) => {
  let responseObj = await post(endpoints.login, JSON.stringify({ username, password }));

  //response ile ilgili işlemler

  if (responseObj.success) {
    global.token = responseObj.data.token;
  }

  return responseObj;
};

export const createUserWithFB = async (email, password) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);

    return { data: null, status: 200, success: true };
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
  }

  return { data: null, status: 500, success: false };
};

export const loginUserWithFB = async (email, password) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);

    return { data: null, status: 200, success: true };
  } catch (error) {
    console.error(error);
  }

  return { data: null, status: 500, success: false };
};
