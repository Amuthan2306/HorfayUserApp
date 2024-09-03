import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styleFrom from '../../assets/styles/styles';
import {RadioButton} from 'react-native-paper';
import Button from '../../common/components/Button';
import translate from '../../utils/i18n';
import images from '../../common/components/ImageAssets';
import {AppHeader} from '../../common/components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthHeader} from '../../common/components/Header/authheader';
import {addresslist} from '../../common/ConstantList';
import {useSelector, useDispatch} from 'react-redux';
import {setAppLoader} from '../../redux/Reducer/AppLoader';
import {Spinner} from '../../assets/Spinner';

export default function Payment(props: any) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [checked, setChecked] = React.useState('');
  const [button, setButton] = React.useState(false);
  const [ModalVisible, setModalVisible] = React.useState(false);

  const createOrderResponse = useSelector(
    (state: RootState) => state?.root?.auth?.createOrderList,
  );
  const summary = useSelector(
    (state: RootState) => state?.root?.auth?.summarylistData,
  );
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  console.log('########', summary);
  const selectedservices = useSelector(
    (state: RootState) => state?.root?.auth?.selectedServicesData?.Details,
  );

  const address_details = useSelector(
    (state: RootState) => state?.root?.auth?.selectedServicesData,
  );

  console.log('slelel', address_details?.address_details?.[0]?.job_date);
  function onCompleteOrder() {
    setTimeout(() => {
      const params = {
        date: address_details?.address_details?.[0]?.job_date,
        payment_type: 'cash',
        // rating: "5",
        long: '80.2707',
        user_id: address_details?.address_details?.[0]?.user_id,
        amount:
          address_details?.address_details?.[0]?.listser?.BillingDetails
            ?.amount +
          address_details?.address_details?.[0]?.listser?.BillingDetails?.fee +
          address_details?.address_details?.[0]?.listser?.BillingDetails?.tax,
        provider_id:
          address_details?.address_details?.[0]?.listser?.provider_id,
        order_status: 'pending',
        listservices_id:
          address_details?.address_details?.[0]?.listser?.listservices_id,
        category_id: selectedservices?.[0]?.sub_category_id?.category_id,
        subcategory_id: selectedservices?.[0]?.subcategory_id,
      };
      console.log('params create order===>', params);
      dispatch(setAppLoader(true));
      dispatch(global.actions.CreateOrderCall(params, navigation));
    }, 1000);
    if (createOrderResponse?.message == 'Order updated successfully') {
      {
        button !== false && checked == 'Cash'
          ? navigation.navigate('SuccessBooking')
          : navigation.navigate('Debitcard');
      }
    }
    console.log(' createOrderResponse===>', createOrderResponse);
  }
  const _renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          flex: 0.5,
          flexDirection: 'row',
          padding: 2,
          borderRadius: 10,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 2},
          shadowOpacity: 0.2,
          marginVertical: 10,
          shadowRadius: 0.1,
          elevation: 5,
          backgroundColor: '#F1F1F1',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}
        onPress={() => {
          setChecked(item.status), setButton(true);
        }}>
        <View style={{flex: 0.1, paddingVertical: 8, left: 5}}>
          {checked === item.status ? (
            <TouchableOpacity
              onPress={() => (setChecked(item.status), setButton(true))}>
              <Image
                source={images.dotimg}
                style={{
                  height: (height / 90) * 2.25,
                  width:
                    Platform.OS === 'android'
                      ? (width / 90) * 4.21
                      : (width / 90) * 4.8,
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => (setChecked(item.status), setButton(true))}>
              <Image
                source={images.round}
                style={{
                  height: (height / 90) * 2.2,
                  width: (width / 90) * 4.2,
                }}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 0.55,
            width: '80%',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
            {item.status}
          </Text>
        </View>
        <View
          style={{
            flex: 0.325,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={item.image}
            style={{height: (height / 40) * 1.8, width: (height / 40) * 1.8}}
          />
        </View>
        <View style={{flex: 0.025}}></View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, padding: 10, backgroundColor: '#fff'}}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}

      <AuthHeader
        label={' Payment Options'}
        onPress={() => navigation.goBack()}
      />

      <View style={{flex: 0.82}}>
        <View style={{flex: 0.05}} />
        <FlatList
          horizontal={false}
          //ListFooterComponent={ListFooter}
          keyExtractor={item => item.id}
          data={addresslist}
          style={{flex: 1}}
          renderItem={({item, index}) => _renderItem(item, index)}
        />
      </View>

      <View style={{flex: 0.1}}>
        {/* <TouchableOpacity
          // onPress={() =>  {button===true ?(navigation.navigate('Debitcard')):null}}
          onPress={()=>(button ==true&&(checked =='Cash') )? navigation.navigate('SuccessBooking'):navigation.navigate('Debitcard')}
          //onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: checked ? '#000' : '#D8D8D8',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            margin: 20,
          }}>
          <Text
            style={{
              color: checked ? '#fff' : '#858585',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Proceed
          </Text>
        </TouchableOpacity> */}
        <Button
          label={'Proceed'}
          disabled={button == true ? false : true}
          round={false}
          style={{
            width: '90%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 6,
            padding: 0,
            marginTop: 20,
            fontWeight: '600',
            backgroundColor: button == true ? styleFrom.black : '#EFEFEF',
          }}
          labelStyle={{
            fontSize: 14,
            color: button == true ? styleFrom.white : styleFrom.black,
            fontWeight: '600',
          }}
          onPress={() => onCompleteOrder()}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = {
  labelText: {
    fontSize: 14,
    color: styleFrom.white,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 0.7,
    elevation: 5,
  },
  subText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    color: '#6B7280',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  textStyle: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    marginTop: 22,
    marginBottom: 12,
  },
};
