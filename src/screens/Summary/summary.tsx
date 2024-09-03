import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import {AuthHeader} from '../../common/components/Header/authheader';
import styleForm from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/Octicons';
import DotIcon from 'react-native-vector-icons/Entypo';
import {OrderDeatilsCard} from '../../common/components/BillingDetailsCard/OrderBillingDetails';
import {bookedDetails, services} from '../../common/ConstantList';
import {useDispatch, useSelector} from 'react-redux';
import InputText from '../../common/components/InputText';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const Summary = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [edit, setedit] = useState(false);
  const [edit2, setedit2] = useState(false);

  const summary = useSelector(
    (state: RootState) => state?.root?.auth?.selectedServicesData?.Details?.[0],
  );

  const ourServiceDetails = useSelector(
    (state: RootState) => state?.root?.auth?.ourServicesCard,
  );
  const updatecard = useSelector(
    (state: RootState) => state?.root?.auth?.updatecardsData,
  );

  console.log('AAAAaaa', summary);
  console.log(
    'AAAAaaa',
    updatecard?.Details?.address?.house,
    updatecard?.Details?.address?.landmark,
  );

  useEffect(() => {
    const params = {
      provider_id: summary?.provider_id,
    };
    dispatch(global.actions.ourServiceCall(params));
  }, []);
  //   console.log('number',params)
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: (Height / 10.6) * 3,
          width: (Width / 9) * 3,
          marginHorizontal: 12,
          borderRadius: 10,
          elevation: 1,
          backgroundColor: '#F3F3F3',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={{uri: 'https://horfay.colan.in/' + item?.pic?.[0]?.image}}
          style={{height: '50%', width: '85%', borderRadius: 10}}
        />
        <View
          style={{
            height: '21%',
            width: '84%',
            justifyContent: 'space-between',
            borderWidth: 0,
          }}>
          <Text style={styles.amount_text}>{item?.facialname}</Text>
          <Text
            style={{fontSize: 15, fontWeight: '500', color: styleForm.black}}>
            {item?.price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: '12.5%',
            width: '90%',
            borderRadius: 30,
            backgroundColor: styleForm.black,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontSize: 14, fontWeight: '400', color: styleForm.white}}>
            +Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItems = ({item}) => {
    return (
      <>
        <View style={{padding: '2%'}}>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: 'underline',
              fontWeight: '700',
              color: styleForm.Indigo,
            }}>
            Selected Services
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: '2.5%'}}>
          <Image
            source={{uri: 'https://horfay.colan.in/' + item?.pic[0].image}}
            style={{height: 60, width: 60, borderRadius: 10}}
          />
          <View style={{marginLeft: '3%', padding: 5, borderWidth: 0}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: styleForm.Indigo,
              }}>
              {item?.facialname}
            </Text>
            <Text
              style={{fontSize: 16, fontWeight: '700', color: styleForm.black}}>
              ₹{item?.price}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <DotIcon name="dot-single" size={20} color={styleForm.iconColor} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: styleForm.iconColor,
            }}>
            {item?.duration}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <DotIcon name="dot-single" size={20} color={styleForm.iconColor} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: styleForm.iconColor,
            }}>
            {item?.description1}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <DotIcon name="dot-single" size={20} color={styleForm.iconColor} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: styleForm.iconColor,
            }}>
            {item?.description2}
          </Text>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthHeader onPress={() => navigation.goBack()} label="Summary" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.address_cover}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="home" size={20} color={styleForm.black} />
            
                <View
                  style={{flex: 0.9, flexDirection: 'column', marginLeft: 15}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      color: styleForm.Indigo,
                    }}>
                    {updatecard?.Details?.address?.type}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 12,
                      color: styleForm.iconColor,
                      marginTop: 5,
                    }}>
                    {updatecard?.Details?.address?.house +
                      updatecard?.Details?.address?.landmark}
                  </Text>
                </View>
              
              <TouchableOpacity >
                <Icons name="pencil" size={20} color={styleForm.black} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
              <Icon name="clock" size={20} color={styleForm.black} />
                <View
                  style={{flex: 0.9, flexDirection: 'column', marginLeft: 15}}>
                  <Text style={{color: styleForm.iconColor}}>
                    {updatecard?.Details?.job_time +
                      ',' +
                      updatecard?.Details?.job_date}
                  </Text>
                </View>
             
              <TouchableOpacity >
                <Icons name="pencil" size={20} color={styleForm.black} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#E4E4E4',
              borderRadius: 20,
              marginTop: 20,
              width: '91%',
            }}>
            <View style={{padding: 7}}>
              <FlatList
                data={[summary]}
                renderItem={renderItems}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={{marginTop: 20, width: '95%', height: '25%'}}>
            <FlatList
              horizontal
              data={ourServiceDetails.Details}
              showsHorizontalScrollIndicator={false}
              // numColumns={0}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          <OrderDeatilsCard
            totel={summary?.BillingDetails?.amount}
            fee={summary?.BillingDetails?.fee}
            tax={summary?.BillingDetails?.tax}
            grandtotel={
              Number(summary?.BillingDetails?.amount) +
              Number(summary?.BillingDetails?.fee) +
              Number(summary?.BillingDetails?.tax)
            }
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            style={{
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              width: '60%',
              marginTop: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 14, fontWeight: '700'}}>
              Pay ₹
              {Number(summary?.BillingDetails?.amount) +
                Number(summary?.BillingDetails?.fee) +
                Number(summary?.BillingDetails?.tax)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: (Height / 3) * 3.5,
    alignItems: 'center',
    backgroundColor: styleForm.white,
  },
  address_cover: {
    height: '15%',
    width: '91%',
    marginTop: 10,
    backgroundColor: styleForm.white,
    borderWidth: 2,
    borderColor: '#f3f3f3',
    // elevation: 7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    height: '20%',
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1
  },
  home_view: {
    width: '92%',
    // borderWidth: 1,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  home_text: {
    fontSize: 15,
    fontWeight: '500',
    color: styleForm.black,
  },
  address_view: {
    borderWidth: 1,
    width: '91%',
    height: '38%',
    alignItems: 'center',
  },
  logo: {
    height: (Height / 10.6) * 3,
    width: (Width / 3.3) * 3,
    // alignItems:'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  selected_service_text: {
    fontSize: 16,
    fontWeight: '700',
    color: styleForm.black,
    marginHorizontal: 15,
    textDecorationLine: 'underline',
  },
  amount_cover: {
    // borderWidth: 1,
    height: '40%',
    width: '70%',
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
  },
  facial_image: {
    height: '80%',
    width: '28%',
    // borderWidth: 1
  },
  diamond_facial_text: {
    fontSize: 16,
    fontWeight: '500',
    color: styleForm.black,
  },
  amount_text: {
    fontSize: 16,
    fontWeight: '700',
    color: styleForm.black,
  },
  facial_details_text: {
    fontSize: 15,
    fontWeight: '500',
  },
  diamond_facial: {
    // borderWidth:1,
    width: '90%',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  button: {
    height: '5%',
    width: '90%',
    marginTop: 20,
    backgroundColor: styleForm.black,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    color: styleForm.white,
  },
});
