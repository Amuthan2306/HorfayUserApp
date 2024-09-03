import authApi from '../../services/Api';
import {updatecard} from '../../services/ApiList';
import {updatecards} from '../Reducer/AuthReducer';
import { setAppLoader } from '../Reducer/AppLoader';
export function cardCall(params: any, props: any,navigation:any) {
  return function (dispatch: any) {
    return authApi.PostRequest(updatecard, params)
      .then((response: any) => {
        dispatch(updatecards(response));
        if (response.status === 'success') {
          global.functions.ShowAlert(response.message, global.const.success);
          console.log('44444444444444',response)
          setTimeout(() => {
            dispatch(setAppLoader(false));
           response?.Details?.job_date?
          props.navigation.navigate('Summary'):null
          }, 1000)
        }
      })

      .catch((error: {message: any}) => {
        dispatch(setAppLoader(false));
        console.log('error', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
