import authApi from '../../services/Api';
import {bookingSuccess} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {successfulBooking} from '../Reducer/AuthReducer';

export function successBookingCall(params: any) {
    console.info("parmass",params)
  return function (dispatch: any) {
    return authApi
      .PostRequest(bookingSuccess, params)
      .then((response: any) => {
        dispatch(successfulBooking(response));
        dispatch(setAppLoader(false));    
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}