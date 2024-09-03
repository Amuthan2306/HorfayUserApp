import authApi from '../../services/Api';
import {cancelOrder} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {cancelOrderData} from '../Reducer/AuthReducer';

export function cancelOrderCall(params: any) {
  return function (dispatch: any) {
    return authApi
      .PutUrlRequest(cancelOrder, params)
      .then((response: any) => {
        dispatch(cancelOrderData(response));
        dispatch(setAppLoader(false));
        console.log('response...",', response);
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}