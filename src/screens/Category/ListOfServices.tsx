import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Button,
  Text,
  StatusBar,
  Pressable,
  ImageBackground,
  Modal,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {AppHeader} from '../../common/components/Header';
import SmallCircle from '../../common/components/SmallCircle';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkicon from 'react-native-vector-icons/Ionicons';
import BottomModal from '../../common/components/BottomModal';
import translate from '../../utils/i18n';
import CalendarStrip from 'react-native-calendar-strip';
import Triangle from '../../common/components/Triangle';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {timeList, bookingDetails} from '../../common/ConstantList';
import {AuthHeader} from '../../common/components/Header/authheader';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {DATE_FORMAT} from 'react-native-gifted-chat';
import {modifyAddresscheck} from '../../redux/Reducer/AuthReducer';

const ListOfServices = (props: any) => {
  const listserviceid = props?.route?.params;
  console.log('=========', listserviceid?.listserviceid);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [addressModal, setAddressModal] = useState(false);
  const [addAddressModal, setAddAddressModal] = useState(false);
  const [houseNumber, setHouseNumber] = useState('');
  const [landmark, setLandmark] = useState('');
  const [selectHome, setSelectHome] = useState(false);
  const [selectOther, setSelectOther] = useState(false);
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedDateString, setSelectedDateString] = useState('');
  const [time, setTime] = useState('');
  const [getAddressData, setAddedAddressData] = useState([]);
  const [add, setadd] = useState('');
  //Login Data to get user ID
  const loginID = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
  );
  console.log('2222@@@@', loginID);

  //Get Added Address Lists
  const getAddressListsFromRedux = useSelector(
    (state: RootState) => state?.root?.auth?.getAddedAddressLists,
  );
  const updatecall = useSelector(
    (state: RootState) => state?.root?.auth?.addressupdateData,
  );
  console.log('#$@#$@#$@#$%$#@', updatecall?.Details?.listser?.listservice_id);

  console.log('getAddressListsFromRedux', getAddressListsFromRedux);
  const selectedservices = useSelector(
    (state: RootState) => state?.root?.auth?.selectedServicesData?.Details,
  );
  console.log('==========> selectedservicess', selectedservices);
  const addressUpdate = useSelector(
    (state: RootState) => state?.root?.auth?.addressupdateData?.Details,
  );
  console.log('gggg', addressUpdate);
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', selectedDateString);
  console.log('@@@@@@@@@@@@', time);
  console.log('$$$$$$$$$$$$', getAddressData);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format(' hh:mm a');
    console.info('Current date is-', date);
    setAddedAddressData(getAddressListsFromRedux);
  }, [getAddressListsFromRedux]);

  const onClickHome = () => {
    setSelectHome(!selectHome);
    setSelectOther(false);
  };
  const onClickOther = () => {
    setSelectOther(!selectOther);
    setSelectHome(false);
  };
  const renderItemTime = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#E4E4E4' : 'white';
    const fontWeight = item.id === selectedId ? '700' : '400';
    return (
      <TouchableOpacity
        onPress={() => (setSelectedId(item.id), setTime(item.time))}
        style={{
          height: 50,
          width: 120,
          borderWidth: 1,
          borderRadius: 10,
          marginRight: 20,
          backgroundColor: backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: fontWeight,
            color: styleFrom.Indigo,
          }}>
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  };

  const _pull = () => {
    //Below filter used to selected address value hold in filterd value
    const filtered = getAddressData.filter(selectedData => {
      return selectedData?.checked === true;
    });
    console.log('@@@@@!!!!!!!!####', filtered);
    // navigation.navigate('Summary');
    setModal(false);
    let params = {
      addcard_id: addressUpdate?.addcard_id,
      user_id: loginID,
      listservice_id: listserviceid?.listserviceid,
      useraddress_id: add,
      job_time: time,
      job_date: selectedDateString,
    };

    console.log('++++++++++++++++++++++', params);

    dispatch(global.actions.cardCall(params, props));
  };

  const _update = () => {
    check ? proceedAddressModal() : null;
    let params = {
      addcard_id: addressUpdate?.addcard_id,
      user_id: loginID,
      listservice_id: listserviceid?.listserviceid,
      useraddress_id: add,
    };
    console.log('@@@@@@@', params);
    dispatch(global.actions.cardCall(params, props));
  };
  const _bottom = () => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => _update()}
          style={{
            backgroundColor: check ? '#000' : '#D8D8D8',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            margin: 20,
          }}>
          <Text
            style={{
              color: check ? '#fff' : '#858585',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: styleFrom.backgroundGrey,
        marginHorizontal: '5%',
        borderRadius: 20,
        marginTop: '4%',
      }}>
      <View style={{margin: 10, borderRadius: 20, marginBottom: 20}}>
        <View style={{padding: '2%'}}>
          <Text
            style={{
              fontSize: 16,
              textDecorationLine: 'underline',
              fontWeight: '700',
              color: styleFrom.Indigo,
            }}>
            Selected Services
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: '3%'}}>
          <Image
            source={{uri: 'https://horfay.colan.in/' + item?.pic?.[0]?.image}}
            style={{height: 70, width: '18%', borderRadius: 10}}
          />
          <View style={{justifyContent: 'space-evenly', marginLeft: '3%'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                color: styleFrom.Indigo,
              }}>
              {item.facialname}
            </Text>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 14,
                color: styleFrom.Indigo,
              }}>
              {item?.provider_details?.businessname}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: '#000',
              }}>
              ₹ {item?.price}
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.circleView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.circleViewText}>{item?.duration}</Text>
          </View>
          <View style={styles.circleView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.circleViewText}>{item?.description1}</Text>
          </View>
          <View style={styles.circleView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.circleViewText}>{item?.description2}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const addAddressModalFunction = () => {
    setAddressModal(false);
    setTimeout(() => {
      setAddAddressModal(true);
    }, 500);
  };

  const disableAddAddressModalFunction = () => {
    const addressParms = {
      house: houseNumber,
      landmark: landmark,
      type: selectOther ? 'other' : 'house',
      lat: '123',
      long: '111',
      billing_address: 'True',
      user_id: loginID,
    };

    dispatch(global.actions.addLocationActionCall(addressParms));
    setAddAddressModal(false);
    setTimeout(() => {
      setAddressModal(true);
    }, 500);
  };

  const proceedAddressModal = () => {
    setAddressModal(false);
    setTimeout(() => {
      setModal(true);
    }, 500);
  };

  const proceedServices = () => {
    const userIDParams = {
      user_id: loginID,
    };
    dispatch(global.actions.getLocationActionCall(userIDParams));
    setAddressModal(true);
  };

  const onCheck = (itemIndex: any) => {
    setCheck(true);
    // const newData = [...getAddressListsFromRedux];
    // newData.map((item, index) => {
    //   if (index == itemIndex) {
    //     newData[index].checked = true;
    //     console.log('HIIIIII');
    //   } else {
    //     newData[index].checked = false;
    //   }
    // });
    // setAddedAddressData(newData);
    dispatch(modifyAddresscheck(itemIndex));
  };

  const proceedToCheckOut = () => {
    //Below filter used to selected address value hold in filterd value
    const filtered = getAddressData.filter(selectedData => {
      return selectedData?.checked === true;
    });
    console.log('@@@@@!!!!!!!!####', filtered);
    // navigation.navigate('Summary');
    setModal(false);
  };

  useEffect(() => {
    const params = {
      user_id: loginID,
    };

    dispatch(global.actions.selectedCall(params));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <AuthHeader
        onPress={() => navigation.goBack()}
        label={'Selected Services'}
      />
      <ScrollView>
        <View>
          <FlatList
            data={selectedservices}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <TouchableOpacity
          style={styles.proceedBtn}
          onPress={() => proceedServices()}>
          <Text style={styles.btnStyle}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomModal
        onDrop={() => setAddressModal(false)}
        visible={addressModal}
        modalHeight={350}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#000'}}>
            {' '}
            Select address
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => addAddressModalFunction()}
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Icon2 name={'plus'} color={'#000'} size={15} />
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              color: '#000',
              marginLeft: 10,
            }}>
            {' '}
            Add another address
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderColor: '#EBEBEB',
            borderWidth: 0.8,
            marginTop: '5%',
          }}></View>

        <FlatList
          keyExtractor={item => item.id}
          data={getAddressData}
          extraData={getAddressData}
          renderItem={({item, index}) => (
            <>
              <View style={{marginTop: '5%', flexDirection: 'row'}}>
                <TouchableOpacity
                  // style={{ flex: 0.05 }}
                  onPress={() => {
                    onCheck(index);
                    setadd(item?.useraddress_id);
                  }}>
                  {item.checked ? (
                    <Checkicon
                      name={'radio-button-on-sharp'}
                      color={'#000'}
                      size={20}
                    />
                  ) : (
                    <Checkicon
                      name={'radio-button-off-sharp'}
                      color={'#000'}
                      size={20}
                    />
                  )}
                </TouchableOpacity>
                <View
                  style={{flex: 0.9, flexDirection: 'column', marginLeft: 5}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      color: styleFrom.Indigo,
                    }}>
                    {item?.type}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '400',
                      fontSize: 12,
                      color: styleFrom.iconColor,
                      marginTop: 5,
                    }}>
                    {item?.house}
                    {', '}
                    {item?.landmark}
                  </Text>
                </View>
                <TouchableOpacity style={{flex: 0.05}}>
                  <Icon
                    name={'dots-three-vertical'}
                    size={15}
                    color={styleFrom.greyText}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
          ListFooterComponent={_bottom()}
        />
      </BottomModal>
      <BottomModal
        onDrop={() => setAddAddressModal(false)}
        visible={addAddressModal}
        modalHeight={Platform.OS == 'ios' ? 450 : 550}>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: styleFrom.Indigo,
              }}>
              Bhel Nagar
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: styleFrom.iconColor,
                marginTop: '3%',
              }}>
              Bhel Naga,Piplani,Ayodhya Bypass {'\n'}Bhopal,MP
            </Text>
          </View>
          <View
            style={{
              borderColor: '#EBEBEB',
              borderWidth: 0.8,
              marginTop: '5%',
            }}></View>
          <TextInput
            style={styles.input}
            onChangeText={setHouseNumber}
            value={houseNumber}
            placeholder="House/Flat Number *"
            placeholderTextColor={'#ABABAB'}
          />
          <TextInput
            style={styles.input}
            onChangeText={setLandmark}
            value={landmark}
            placeholder="Landmark (Optional)"
            placeholderTextColor={'#ABABAB'}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: styleFrom.iconColor,
              marginTop: 10,
            }}>
            Save as
          </Text>
          <View style={{flexDirection: 'row', marginTop: '3%'}}>
            <TouchableOpacity
              onPress={() => onClickHome()}
              style={{
                borderWidth: 1,
                borderColor: selectHome ? '#000' : '#E3E3E3',
                backgroundColor: selectHome ? '#E4E4E4' : '#fff',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: selectHome ? '#000' : '#ABABAB',
                  margin: 5,
                }}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onClickOther()}
              style={{
                borderWidth: 1,
                borderColor: selectOther ? '#000' : '#E3E3E3',
                backgroundColor: selectOther ? '#E4E4E4' : '#fff',
                borderRadius: 10,
                left: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: selectOther ? '#000' : '#ABABAB',
                  margin: 5,
                }}>
                Other
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() =>
              landmark && houseNumber && (selectHome || selectOther)
                ? disableAddAddressModalFunction()
                : null
            }
            style={{
              backgroundColor:
                landmark && houseNumber && (selectHome || selectOther)
                  ? '#000'
                  : '#D8D8D8',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              height: 50,
              margin: 20,
            }}>
            <Text
              style={{
                color:
                  landmark && houseNumber && (selectHome || selectOther)
                    ? '#fff'
                    : '#858585',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Save and proceed to slots
            </Text>
          </TouchableOpacity>
        </Pressable>
      </BottomModal>
      <BottomModal
        onDrop={() => setModal(!modal)}
        visible={modal}
        modalHeight={625}>
        <Text style={styles.select_date_text}>
          {translate('selcted_date_time.date_time')}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: styleFrom.iconColor,
            marginTop: 5,
          }}>
          {translate('selcted_date_time.time')}
        </Text>
        <CalendarStrip
          showMonth={false}
          onDateSelected={date =>
            setSelectedDateString(date.format(DATE_FORMAT))
          }
          calendarAnimation={{type: 'sequence', duration: 100}}
          upperCaseDays={false}
          highlightDateContainerStyle={{
            height: 62,
            borderWidth: 1.5,
            borderColor: 'black',
            width: '85%',
            borderRadius: 10,
            shadowOpacity: 0.2,
            elevation: 10,
            backgroundColor: '#E4E4E4',
          }}
          dayContainerStyle={{
            borderWidth: 1,
            borderColor: '#E4E4E4',
            height: 62,
            width: '85%',
            marginHorizontal: 50,
            borderRadius: 10,
          }}
          style={{height: '25%', borderWidth: 0}}
          dateNumberStyle={{
            color: styleFrom.Indigo,
            fontSize: 14,
            fontWeight: '700',
          }}
          dateNameStyle={{color: 'grey', fontSize: 14, fontWeight: '400'}}
          numDaysInWeek={5}
          highlightDateNumberStyle={{
            color: styleFrom.Indigo,
            fontSize: 14,
            fontWeight: '700',
            backgroundColor: '#E4E4E4',
          }}
          highlightDateNameStyle={{
            color: 'grey',
            fontSize: 14,
            fontWeight: '400',
          }}
        />
        <Triangle />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#EBEBEB',
            height: 50,
            marginLeft: 5,
            marginRight: 5,
            marginTop: '-5%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FeatherIcon
              name={'file-text'}
              size={20}
              color={styleFrom.Indigo}
            />
          </View>
          <Text style={{flex: 0.85, color: styleFrom.Indigo}}>
            Free cancellation till 2hrs before the booked slot, post that ₹50
            chargeable
          </Text>
        </View>
        <View
          style={{
            height: '15%',
            width: '98%',
            margin: 5,
            marginTop: '6%',
          }}>
          <FlatList
            horizontal
            data={timeList}
            renderItem={renderItemTime}
            keyExtractor={item => item.id}
            extraData={selectedId}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{flex: 0.7}}></View>
        <TouchableOpacity
          onPress={() => _pull()}
          style={{
            backgroundColor: selectedId ? '#000' : '#D8D8D8',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            height: 50,
            margin: 20,
          }}>
          <Text
            style={{
              color: selectedId ? '#fff' : '#858585',
              fontSize: 14,
              fontWeight: '700',
            }}>
            Proceed to checkout
          </Text>
        </TouchableOpacity>
      </BottomModal>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  imageView: {
    flex: 0.2,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subView: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    backgroundColor: 'red',
  },
  proceedBtn: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    margin: 20,
    marginBottom: 50,
  },
  btnStyle: {
    color: '#EEEEEE',
    fontSize: 14,
    fontWeight: '700',
  },
  descView: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descTextStyle: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '400',
    color: styleFrom.iconColor,
  },
  input: {
    height: 47,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    borderColor: styleFrom.borderColor,
    color: styleFrom.Indigo,
  },
  date_time_modal: {
    flex: 0.75,
    backgroundColor: '#f9f9f9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
  },
  select_date: {
    height: '18%',
    width: '92%',
    justifyContent: 'flex-end',
  },
  select_date_text: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: styleFrom.Indigo,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  buttonText: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    marginTop: 20,
    fontWeight: '600',
    backgroundColor: styleFrom.black,
  },
  labelText: {
    fontSize: 14,
    color: styleFrom.white,
    fontWeight: '600',
  },
  circleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 4,
  },
  circleViewText: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '400',
    marginLeft: 5,
    width: '90%',
    textAlign: 'left',
  },
};
export default ListOfServices;
