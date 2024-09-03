import authApi from '../../services/Api';
import {allCategories} from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
import {allCategory} from '../Reducer/AuthReducer';

export function allCategoryCall() {
  return function (dispatch: any) {
    return authApi
      .GetUrlRequest(allCategories)
      .then((response: any) => {
        dispatch(allCategory(response));
        console.log('succesS===>', response);
        dispatch(setAppLoader(false));

      })
      .catch((error: {message: any}) => {
        console.log('error', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
