
import authApi from '../../services/Api';
import {serviceOffering} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {serviceOfferingList} from '../Reducer/AuthReducer';

export function serviceOfferingCall(params: any) {
    console.info("parmass",params)
  return function (dispatch: any) {
    return authApi
      .PostRequest(serviceOffering, params)
      .then((response: any) => {
        dispatch(serviceOfferingList(response));
        dispatch(setAppLoader(false));
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
