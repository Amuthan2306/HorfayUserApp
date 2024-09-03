import APICALL from '../../services/Api';
import {changepassword} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import { changepasswordData } from '../Reducer/AuthReducer';
export function changepasswordCall(params: any, props: any) {
  return function (dispatch: any) {
    return APICALL.PutRequest(changepassword, params)
      .then((response: any) => {
        dispatch(changepasswordData(response));
        if (response.status === 'success') {
          global.functions.ShowAlert(response.message, global.const.success);
          setTimeout(() => {
            dispatch(setAppLoader(false));
            props.navigation.navigate('SuccessScreen',{isFromchangePassword: 'False'});
          }, 1000);
        }
      })
      .catch((error: {message: any}) => {
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
