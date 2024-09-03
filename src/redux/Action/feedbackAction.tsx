import authApi from '../../services/Api';
import {feedback} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {feedbackDetails} from '../Reducer/AuthReducer';

export function FeedbackCall(params: any) {
  return function (dispatch: any) {
    return authApi
      .PostRequest(feedback, params)
      .then((response: any) => {
        dispatch(feedbackDetails(response));
        dispatch(setAppLoader(false));

      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));

        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}