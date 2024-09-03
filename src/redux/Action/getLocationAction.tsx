import authApi from '../../services/Api';
import { getAddedLocation } from '../../services/ApiList';
import { useNavigation } from '@react-navigation/native';
import { getAddedAddress } from '../Reducer/AuthReducer';
import { setAppLoader } from '../Reducer/AppLoader';
export function getLocationActionCall(params: any, props: any) {
    return function (dispatch: any) {
        return authApi
            .PostRequest(getAddedLocation, params)
            .then((response: any) => {
                console.info('succes===>in get location call', response);
                if (response.status === 'success') {
                    dispatch(setAppLoader(false));
                    let data = response.Details;
                    data.forEach((object:any,index:number) => {
                        if(index ===0){
                            object.checked = true;
                        }
                        else{
                           object.checked = false;
                        }
                      });
                    dispatch(getAddedAddress(data))
                   // global.functions.ShowAlert(response.message, global.const.success);
                }
            })
            .catch((error: { message: any }) => {
                dispatch(setAppLoader(false));
                console.info('error in add location', error);
                global.functions.ShowAlert(error?.message, global.const.danger);
            });
    };
}
