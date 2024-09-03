import authApi from '../../services/Api';
import {address} from '../../services/ApiList';
import {setAppLoader} from '../Reducer/AppLoader';
import {addressupdate} from '../Reducer/AuthReducer';
// import { setAppLoader } from '../Reducer/AppLoader';
export function updateCall(params: any, props: any,listserviceid:any) {
  return function (dispatch: any) {
    return authApi
      .PostRequest(address,params)
      .then((response: any) => {
        dispatch(addressupdate(response));

        if (response.status === 'success') {
          dispatch(setAppLoader(false));
          global.functions.ShowAlert(response.message, global.const.success);
          setTimeout(() => {
            // dispatch(setAppLoader(false));
            props.navigation.navigate('ListOfServices',{
              listserviceid
            });
          }, 1000);
        }
      })

      .catch((error: {message: any}) => {
        // dispatch(setAppLoader(false));
        dispatch(setAppLoader(false));
        console.log('error', error);
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
