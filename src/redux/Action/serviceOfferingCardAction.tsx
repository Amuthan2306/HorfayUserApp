
import authApi from '../../services/Api';
import {serviceOffersCard} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {serviceOfferCard} from '../Reducer/AuthReducer';

export function serviceCardCall(params: any) {
    console.info("parmass",params)
  return function (dispatch: any) {
    return authApi
      .PostRequest(serviceOffersCard, params)
      .then((response: any) => {
        dispatch(serviceOfferCard(response));
        dispatch(setAppLoader(false));      
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
