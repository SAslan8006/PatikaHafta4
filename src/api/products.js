import endpoints from '~/api/endpoints';
import { get, post } from './service';

export const getAllProducts = async () => {
  let responseObj = await get(endpoints.products);

  return responseObj;
};
