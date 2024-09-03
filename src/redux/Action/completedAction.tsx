import authApi from '../../services/Api';
import {completed} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {completedDetails} from '../Reducer/AuthReducer';
export function completededCall(params: any, props: any) {
  return function (dispatch: any) {
    // dispatch(RegisterPending());
    return authApi
      .PostRequest(completed, params)
      .then((response: any) => {
        dispatch(completedDetails(response));
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
