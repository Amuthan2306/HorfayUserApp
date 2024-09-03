import authApi from '../../services/Api';
import {editAcct} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {updateData} from '../Reducer/AuthReducer';

export function editacctCall(params: any,userId : any) {
  return function (dispatch: any) {
    return authApi
      .PutUrlRequest(editAcct+userId+"/", params)
      .then((response: any) => {
        dispatch(updateData(response));
        dispatch(setAppLoader(false));
        console.log("edit response==>",response)
      })
      .catch((error: {message: any}) => {
        console.log('edit error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}




