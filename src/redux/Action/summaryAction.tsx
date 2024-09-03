import authApi from '../../services/Api';
import {summary} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {summarylist} from '../Reducer/AuthReducer';

export function summaryCall(params:any) {
  return function (dispatch: any) {
    return authApi.GetUrlRequest(summary+params)
      .then((response: any) => {
        dispatch(summarylist(response));
        dispatch(setAppLoader(false));
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
