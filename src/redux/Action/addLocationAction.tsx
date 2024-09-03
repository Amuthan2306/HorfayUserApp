import authApi from '../../services/Api';
import {addAddress} from '../../services/ApiList';
import {useNavigation} from '@react-navigation/native';
import {setAppLoader} from '../Reducer/AppLoader';
export function addLocationActionCall(params: any, props: any) {
  return function (dispatch: any) {
    return authApi
      .PostRequest(addAddress, params)
      .then((response: any) => {
        console.info('succes===>in add location call', response);
        if (response.status === 'success') {
          dispatch(setAppLoader(false));
          global.functions.ShowAlert(response.message, global.const.success);
        }
      })
      .catch((error: {message: any}) => {
        dispatch(setAppLoader(false));
        console.info('error in add location', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
