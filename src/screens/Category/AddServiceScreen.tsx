import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {AppHeader} from '../../common/components/Header';
import BottomModal from '../../common/components/BottomModal';
import React, {useState, useEffect} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/AntDesign';
import TextCustom from '../../common/components/TextWrapper';
import SmallCircle from '../../common/components/SmallCircle';
import {ButtonContainer} from '../../common/components/OTPInput/styles';
import {ButtonText} from '../../common/components/OTPInput/styles';
import SwiperComponent from '../../common/components/Swiper';
import {stages, description, subCategoryList} from '../../common/ConstantList';
import {AuthHeader} from '../../common/components/Header/authheader';
import {useDispatch, useSelector} from 'react-redux';
import {setAppLoader} from '../../redux/Reducer/AppLoader';
import {Spinner} from '../../assets/Spinner';

const AddServiceScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  const [addServiceModal, setAddServiceModal] = useState(false);
  const [press, setPress] = useState(false);
  const [id, setid] = useState();
  const serviceoffering = useSelector(
    (state: RootState) => state?.root?.auth?.serviceOfferingData,
  );
  console.log('@@@@@@@@@@@@@@@', props?.route?.params?.subcategory_id);

  useEffect(() => {
    const params = {
      subcategory_id: Number(props?.route?.params?.subcategory_id),
    };
    dispatch(setAppLoader(true));
    dispatch(global.actions.serviceOfferingCall(params));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <AppHeader
          onLeftIconClick={() => navigation.goBack()}
          label={'Service Offerings'}
        />
        <View style={{flex: 1}}>
          <FlatList
            style={{marginTop: 10}}
            keyExtractor={item => item.id}
            data={serviceoffering.Details}
            extraData={serviceoffering.Details}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatlistView}>
                <TouchableOpacity
                  style={{margin: 10}}
                  onPress={() => setAddServiceModal(true)}>
                  <Image
                    source={{
                      uri: 'https://horfay.colan.in/' + item?.pic[0]?.image,
                    }}
                    style={styles.flatlistImage}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: styleFrom.Indigo,
                    }}>
                    {item.facialname}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 14,
                      color: styleFrom.black,
                    }}>
                    Starts from{' '}
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: styleFrom.black,
                      }}>{` ₹${item.price} Only`}</Text>
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                  }}>
                  <View style={{flex: 0.75}}></View>
                  <TouchableOpacity
                    onPress={() =>
                      setid(id === item.services_id ? '' : item.services_id)
                    }
                    style={[
                      styles.moneyView,
                      {
                        backgroundColor:
                          item.services_id === id
                            ? styleFrom.darkGreen
                            : '#000',
                      },
                    ]}>
                    <Icon
                      name={item.services_id == id ? 'check' : 'plus'}
                      size={20}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                </View>
                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={addServiceModal}
                  onRequestClose={() => {
                    setAddServiceModal(false);
                  }}>
                  <Pressable
                    onPress={() => setAddServiceModal(!addServiceModal)}
                    style={{flex: 0.4, backgroundColor: 'rgba(0,0,0,0.7)'}}
                  />
                  <View style={{backgroundColor: '#fff', flex: 0.6}}>
                    <View
                      style={{
                        backgroundColor: '#000',
                        flexDirection: 'row',
                        height: 40,
                        bottom: 25,
                        alignItems: 'center',
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                      }}>
                      <Image
                        style={{height: 10, width: 20, left: 20}}
                        source={require('../../assets/image/Calendar.png')}
                      />
                      <Text style={{color: '#FFF', left: 25}}>
                        30 Bookings in last 12 days
                      </Text>
                    </View>
                    <SwiperComponent swiperImage={stages} border />
                    <View style={{flexDirection: 'column', marginTop: 15}}>
                      <TextCustom
                        fontSize={16}
                        style={{marginLeft: 15}}
                        color={styleFrom.black}
                        fontWeight="700">
                        {item.facialname}
                      </TextCustom>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 15,
                          alignItems: 'center',
                        }}>
                        <Image
                          style={{width: 15, height: 12}}
                          source={require('../../assets/png/star.png')}></Image>
                        <TextCustom
                          fontSize={12}
                          color={styleFrom.black}
                          fontWeight="500"
                          marginLeft={5}
                          marginBottom={5}>
                          {item.rating}
                        </TextCustom>
                      </View>
                      <TextCustom
                        fontSize={14}
                        style={{marginLeft: 15}}
                        color={styleFrom.black}
                        fontWeight="700"
                        marginBottom={5}>
                        ₹{item.price}
                      </TextCustom>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 15,
                          alignItems: 'center',
                        }}>
                        <SmallCircle color="grey" />
                        <TextCustom
                          fontSize={12}
                          color={styleFrom.darkGrey}
                          fontWeight="400"
                          marginLeft={10}>
                          {item.description}
                        </TextCustom>
                      </View>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        bottom: 5,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setAddServiceModal(false),
                            navigation.navigate('ChooseServiceProvider', {
                              serviceId:
                                serviceoffering?.Details[0]?.services_id,
                            });
                        }}
                        style={{
                          backgroundColor: '#000',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 10,
                          height: 50,
                          margin: 20,
                          width: '80%',
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '700',
                          }}>
                          Proceed
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            !id
              ? null
              : navigation.navigate('ChooseServiceProvider', {
                  serviceId: serviceoffering?.Details[0]?.services_id,
                });
          }}
          style={{
            backgroundColor: !id ? '#D8D8D8' : '#000000',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            margin: 20,
          }}>
          <Text
            style={{
              color: !id ? styleFrom.buttonText : '#EEEEEE',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  flatlistView: {
    margin: 4,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: styleFrom.primaryGrey,
  },
  flatlistImage: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  moneyView: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    flex: 0.2,
    marginTop: 2,
    marginBottom: 8,
  },
  moneyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  activeIndicator: {
    width: 32,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#ABABAB',
  },
  indicator: {
    width: 32,
    height: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    display: 'flex',
    //marginVertical:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 35,
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: styleFrom.primaryGrey,
    borderWidth: 1,
    height: 29,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addStyle: {
    color: styleFrom.black,
  },
  addedStyle: {
    color: styleFrom.darkGreen,
  },
});

export default AddServiceScreen;
