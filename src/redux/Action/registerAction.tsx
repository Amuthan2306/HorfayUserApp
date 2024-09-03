import authApi from '../../services/Api';
import {register} from '../../services/ApiList';
import {registerData} from '../Reducer/AuthReducer';
import { setAppLoader } from '../Reducer/AppLoader';
export function registerCall(params: any, props: any) {
  return function (dispatch: any) {
    // dispatch(RegisterPending());
    return authApi
      .PostRequest(register, params)
      .then((response: any) => {
        dispatch(registerData(response));
        if (response.status === 'success') {
          global.functions.ShowAlert(response.message, global.const.success);
          setTimeout(() => {
            dispatch(setAppLoader(false));
            props.navigation.navigate('Login');
          }, 1000);
        }
      })
      .catch((error: {message: any}) => {
        dispatch(setAppLoader(false));
        console.log('error', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
        // dispatch(RegisterError());
      });
  };
}
