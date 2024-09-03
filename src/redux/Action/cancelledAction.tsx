import authApi from '../../services/Api';
import {cancelled} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {cancelledDetails} from '../Reducer/AuthReducer';
export function cancelledCall(params: any, props: any) {
  return function (dispatch: any) {
    // dispatch(RegisterPending());
    return authApi
      .PostRequest(cancelled, params)
      .then((response: any) => {
        dispatch(cancelledDetails(response));
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
