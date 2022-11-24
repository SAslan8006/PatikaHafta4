import endpoints from '~/api/endpoints';
import { get, post } from './service';
import Config from 'react-native-config';


export const requestAllProducts = async () => {
  let responseObj = await get(Config.API_PRODUCT_URL);

  return responseObj;
};
