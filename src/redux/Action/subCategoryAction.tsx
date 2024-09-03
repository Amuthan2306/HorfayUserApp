import authApi from '../../services/Api';
import {subCategory} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {subCategoryData} from '../Reducer/AuthReducer';

export function subCategoryCall(params: any) {
  return function (dispatch: any) {
    return authApi
      .PostRequest(subCategory, params)
      .then((response: any) => {
        dispatch(subCategoryData(response));
        dispatch(setAppLoader(false));
        console.log('category response...",', response);
      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
