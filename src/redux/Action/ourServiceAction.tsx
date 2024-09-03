import authApi from '../../services/Api';
import {ourServiceList} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {ourServicesList} from '../Reducer/AuthReducer';

export function ourServiceCall(params: any) {
    console.info("parmass",params)
  return function (dispatch: any) {
    return authApi
      .PostRequest(ourServiceList, params)
      .then((response: any) => {
        dispatch(ourServicesList(response));
        dispatch(setAppLoader(false));
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
