import { fetching, fetchSuccess, fetchError } from 'redux/apiSlice';
import { getFetch } from 'services/ApiService';

export const getData = () => {
  //   return { type: 'backData', payload: 'data from back' };

  //   return dispatch => {
  //     return { type: 'backData', payload: 'data from back' };
  //   };

  return async dispatch => {
    try {
      dispatch(fetching);
      const data = await getFetch();
      console.log('data:', data);
      dispatch(fetchSuccess(data));
    } catch (error) {
      fetchError(error);
    }
  };
};
