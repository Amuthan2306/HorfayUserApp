import authApi from '../../services/Api';
import {selectedservice} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {selectedServicesDetails} from '../Reducer/AuthReducer';
export function selectedCall(params: any, props: any) {
  return function (dispatch: any) {
    // dispatch(RegisterPending());
    return authApi
      .PostRequest(selectedservice, params)
      .then((response: any) => {
        dispatch(selectedServicesDetails(response));
        dispatch(setAppLoader(false));

      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
        // dispatch(RegisterError());
      });
  };
}