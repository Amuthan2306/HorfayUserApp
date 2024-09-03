import authApi from '../../services/Api';
import {serviceProviderList} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {serviceProviderlist} from '../Reducer/AuthReducer';

export function providerListCall(params: any) {
  return function (dispatch: any) {
    return authApi
      .PostBodyRequest(serviceProviderList, params)
      .then((response: any) => {
        dispatch(serviceProviderlist(response));
        console.log('succesS===>', response);
        dispatch(setAppLoader(false));
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
