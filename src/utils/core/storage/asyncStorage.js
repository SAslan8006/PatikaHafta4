import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorageKeys = {};

export const setAsync = (key, value, okey = () => null, error = () => null) =>
  new Promise(resolve => {
    AsyncStorage.setItem(key, JSON.stringify({ key, value }))
      .then(() => {
        console.log('[setAsync]', key, value);
        okey();
        resolve(true);
      })
      .catch(e => {
        error(e);
        resolve(false);
        console.log('[setAsync ERROR]', key, value, e);
      });
  });

export const getAsync = (key, okey = () => null, error = () => null) =>
  new Promise(resolve => {
    AsyncStorage.getItem(key)
      .then(d => {
        console.log('[getAsync]', key, d);

        try {
          okey(JSON.parse(d).value);
          resolve(JSON.parse(d).value);
        } catch (e) {
          okey(d);
          resolve(d);
        }
      })
      .catch(e => {
        error(e);
        resolve(undefined);
        console.log('[getAsync ERROR]', key, e);
      });
  });
