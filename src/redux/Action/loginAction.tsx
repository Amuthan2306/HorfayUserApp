import authApi from '../../services/Api';
import {login} from '../../services/ApiList';
import {loginData} from '../Reducer/AuthReducer';
import { setAppLoader } from '../Reducer/AppLoader';
export function loginCall(params: any, props: any) {
  return function (dispatch: any) {
    return authApi.PostRequest(login, params)
      .then((response: any) => {
        dispatch(loginData(response));
        if (response.status === 'success') {
          global.functions.ShowAlert(response.message, global.const.success);
          setTimeout(() => {
            dispatch(setAppLoader(false));
            props.navigation.navigate('Home');
          }, 1000);
        }
      })

      .catch((error: {message: any}) => {
        dispatch(setAppLoader(false));
        console.log('error', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
