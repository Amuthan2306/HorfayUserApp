import authApi from '../../services/Api';
import {createOrder} from '../../services/ApiList';
import {setAppLoader} from '../Reducer/AppLoader';
import {createOrderData} from '../Reducer/AuthReducer';

export function CreateOrderCall(params: any, navigation: any) {
  return function (dispatch: any) {
    return authApi
      .PostRequest(createOrder, params)
      .then((response: any) => {
        dispatch(createOrderData(response));
        if (response.status === 'success') {
          global.functions.ShowAlert(response.message, global.const.success);
          setTimeout(() => {
            dispatch(setAppLoader(false));
            {
              response?.Details?.payment_type === 'cash'
                ? navigation.navigate('SuccessBooking')
                : navigation.navigate('Debitcard');
            }
          }, 1000);
        }
      })
      .catch((error: {message: any}) => {
        console.log('error create order***', error);
        dispatch(setAppLoader(false));
        global.functions.ShowAlert(error?.message, global.const.danger);
      });
  };
}
