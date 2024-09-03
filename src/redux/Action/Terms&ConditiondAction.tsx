import authApi from '../../services/Api';
import { termandconditions } from '../../services/ApiList';
import { setAppLoader } from '../Reducer/AppLoader';
// import {setAppLoader} from '../reducers/AppLoader';
import { termsconditions } from '../Reducer/AuthReducer';

export function TermsAndConditionsCall() {
    return function (dispatch: any) {
        return authApi
            .GetUrlRequest(termandconditions)
            .then((response: any) => {
                // dispatch(setAppLoader(false));
                dispatch(termsconditions(response));
                dispatch(setAppLoader(false));
            })
            .catch((error: { message: any }) => {
                // dispatch(setAppLoader(false));
                dispatch(setAppLoader(false));
                console.log('error', error);
                global.functions.ShowAlert(error?.message, global.const.danger);
            });
    };
}
