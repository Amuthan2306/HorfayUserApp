import {useIsFocused, useNavigation} from '@react-navigation/native';
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
  Platform,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {AppHeader} from '../../common/components/Header';
import React, {useState, useEffect} from 'react';
import SmallCircle from '../../common/components/SmallCircle';
import Icon from 'react-native-vector-icons/AntDesign';
import {cardDetails} from '../../common/ConstantList';
import {SearchHeader} from '../../common/components/SearchHeader';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CategoryList, sortData} from '../../common/ConstantList';
import BottomModal from '../../common/components/BottomModal';
import Icons from 'react-native-vector-icons/Ionicons';
import SwiperComponent from '../../common/components/Swiper';
import {stages, description, subCategoryList} from '../../common/ConstantList';
import TextCustom from '../../common/components/TextWrapper';
import Button from '../../common/components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {setAppLoader} from '../../redux/Reducer/AppLoader';
import {Spinner} from '../../assets/Spinner';

const ChooseServiceProvider = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectList, setSelectlist] = useState(false);
  const [selectGrid, setSelectgrid] = useState(false);
  const [selectSort, setSelectsort] = useState(false);
  const [issortHightolow, setSortHightolow] = useState(false);
  const [issortlowtohigh, setSortLowtohigh] = useState(false);
  const [israteHightolow, setRateHightolow] = useState(false);
  const [isratelowtohigh, setRateLowtohigh] = useState(false);
  const [istopRate, setTopRate] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [addServiceModal, setAddServiceModal] = useState(false);
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);
  const serviceName = props?.route?.params;
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectlist(!selectList);
    const params = {
      services_id: Number(props?.route?.params?.serviceId),
    };
    dispatch(setAppLoader(true));
    dispatch(global.actions.providerListCall(params));
  }, [isFocused]);

  // console.log('@@@@@@@@###########', Number(props?.route?.params?.serviceId));

  const serviceProviderList = useSelector(
    (state: RootState) => state?.root?.auth?.serviceProviderData,
  );
  console.log('rrrrrrr', serviceProviderList);

  const loginID = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
  );
  console.log('@#@#@#####$$$$$', loginID);
  const addressUpdate = useSelector(
    (state: RootState) => state?.root?.auth?.addressupdateData,
  );

  const List_View = () => {
    setSelectlist(!selectList);
    setSelectsort(false);
    setSelectgrid(false);
  };
  const Grid_View = () => {
    setSelectgrid(!selectGrid);
    setSelectlist(false);
    setSelectsort(false);
  };
  const Sort_View = () => {
    setSelectsort(!selectSort);
    setSelectlist(false);
    setSelectgrid(false);
    setSortModal(true);
  };
  const closeModal = () => {
    setSortModal(false);
    setSelectlist(!selectList);
    setSelectsort(false);
  };

  const _list = (item: any) => {
    console.log('CCCC', item);
    // console.log('++++++++++++++', loginID);
 var listserviceid=item
    let params = {
      user_id: loginID,
      listservice_id: listserviceid,
    };
    console.log('1234567890', params);
    dispatch(setAppLoader(true));
    dispatch(global.actions.updateCall(params, props,listserviceid));
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <SearchHeader
          searchPlaceholder="Search"
          onLeftIconClick={() => navigation.goBack()}
        />
        <View style={{backgroundColor: '#fff'}}>
          <View
            style={{marginLeft: 15, marginRight: 15, backgroundColor: '#fff'}}>
            <View style={styles.SubCategoryHeaderView}>
              <Image
                style={{height: 20, width: 4}}
                source={require('../../assets/png/greyTag.png')}
              />
              <Text style={styles.SubCategoryHeaderText}>Pearl Facial</Text>
              <View style={styles.sortListView}>
                <TouchableOpacity
                  style={[
                    styles.sortButton,
                    {backgroundColor: selectList ? '#fff' : '#f9f9f9'},
                  ]}
                  onPress={() => List_View()}>
                  <SimpleLineIcons
                    name={'list'}
                    size={15}
                    color={selectList ? 'black' : styleFrom.darkGrey}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sortButton,
                    {backgroundColor: selectGrid ? '#fff' : '#f9f9f9'},
                  ]}
                  onPress={() => Grid_View()}>
                  <MaterialIcons
                    name={'grid-on'}
                    size={18}
                    color={selectGrid ? 'black' : styleFrom.darkGrey}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sortButton,
                    {backgroundColor: selectSort ? '#fff' : '#f9f9f9'},
                  ]}
                  onPress={() => Sort_View()}>
                  <MaterialCommunityIcons
                    name={'sort-ascending'}
                    size={18}
                    color={selectSort ? 'black' : styleFrom.darkGrey}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {selectGrid ? (
              <View>
                <FlatList
                  keyExtractor={item => item.id}
                  numColumns={2}
                  data={serviceProviderList?.Details}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View
                      style={{
                        backgroundColor: styleFrom.primaryGrey,
                        justifyContent: 'center',
                        borderRadius: 20,
                        flex: 0.5,
                        margin: 3,
                      }}>
                      <View
                        style={{
                          backgroundColor: styleFrom.primaryGrey,
                          alignItems: 'center',
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                        }}>
                        <Image
                          source={{
                            uri:
                              'https://horfay.colan.in/' + item?.pic[0]?.image,
                          }}
                          style={{
                            height: 140,
                            width: '97%',
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginTop: 3,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          width: '97%',
                          flexDirection: 'row',
                          marginLeft: 5,
                        }}>
                        <Text
                          style={{
                            color: styleFrom.Indigo,
                            fontWeight: '700',
                            fontSize: 16,
                            flex: 0.75,
                          }}>
                          {item?.provider_details?.businessname}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flex: 0.25,
                          }}>
                          <Image
                            style={{width: 15, height: 14}}
                            source={require('../../assets/png/star.png')}></Image>
                          <Text
                            style={{
                              fontWeight: '400',
                              fontSize: 12,
                              marginLeft: 5,
                              color: styleFrom.Indigo,
                            }}>
                            {item.rating}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.gridDescView}>
                        <Icon
                          name={'checksquare'}
                          size={15}
                          color={styleFrom.green}
                        />
                        <Text
                          style={{
                            fontWeight: '400',
                            fontSize: 12,
                            marginLeft: 5,
                            color: styleFrom.Indigo,
                          }}>
                          {`${item.jobs} jobs completed`}
                        </Text>
                      </View>

                      <View style={[styles.gridDescView, {marginTop: 5}]}>
                        <SmallCircle color={styleFrom.iconColor} />
                        <Text style={styles.descTextStyle}>
                          {item.desc1}
                          <Text style={styles.descTextStyle}>
                            Price -
                            <Text
                              style={[
                                styles.descTextStyle,
                                {fontWeight: '900', color: '#000'},
                              ]}>
                              {` ₹${item.price}`}
                            </Text>
                          </Text>
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginLeft: 5,
                        }}>
                        <SmallCircle color={styleFrom.iconColor} />
                        <Text style={styles.descTextStyle}>
                          {item.description2}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() =>
                          navigation.navigate('ServiceOfferingVendorCard', {
                            listServiceId: item?.listservices_id,
                          })
                        }>
                        <Text style={styles.descTextStyle1}>
                          Click to view detail of services
                        </Text>
                      </Pressable>
                      <TouchableOpacity
                        style={[styles.proceedBtn, {width: '100%'}]}
                        onPress={() => {
                          _list(item?.listservices_id);
                        }}>
                        <Text style={styles.btnStyle}>ADD TO CART</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              </View>
            ) : (
              <FlatList
                keyExtractor={item => item.id}
                data={serviceProviderList?.Details}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.mainView}>
                    <View style={styles.subView}>
                      <View style={styles.imageView}>
                        <Image
                          source={{
                            uri:
                              'https://horfay.colan.in/' + item?.pic[0]?.image,
                          }}
                          style={{
                            height: 63,
                            width: 63,
                            borderRadius: 10,
                            margin: 5,
                          }}
                        />
                      </View>
                      <View style={{flex: 0.7, flexDirection: 'column'}}>
                        <Text
                          style={{
                            color: styleFrom.Indigo,
                            fontWeight: '700',
                            fontSize: 16,
                          }}>
                          {item?.provider_details?.businessname}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            style={{width: 15, height: 12}}
                            source={require('../../assets/png/star.png')}></Image>
                          <Text
                            style={{
                              fontWeight: '400',
                              fontSize: 12,
                              marginLeft: 5,
                              color: '#757575',
                            }}>
                            {item.rating}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Icon
                            name={'checksquare'}
                            size={15}
                            color={styleFrom.green}
                          />
                          <Text
                            style={{
                              fontWeight: '400',
                              fontSize: 12,
                              marginLeft: 5,
                              color: '#757575',
                            }}>
                            {`${item.jobs} jobs completed`}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.descView}>
                      <SmallCircle color={styleFrom.iconColor} />
                      <Text style={styles.descTextStyle}>
                        {item.desc1}
                        <Text style={styles.descTextStyle}>
                          Price -
                          <Text
                            style={[
                              styles.descTextStyle,
                              {fontWeight: '900', color: '#000'},
                            ]}>
                            {` ₹${item.price}`}
                          </Text>
                        </Text>
                      </Text>
                    </View>
                    <View style={styles.descView}>
                      <SmallCircle color={styleFrom.iconColor} />
                      <Text style={styles.descTextStyle}>
                        {item.description2}
                      </Text>
                    </View>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('ServiceOfferingVendorCard', {
                          listServiceId: item?.listservices_id,
                        })
                      }>
                      <Text style={styles.descTextStyle1}>
                        Click to view detail of services
                      </Text>
                    </Pressable>
                    <TouchableOpacity
                      style={styles.proceedBtn}
                      onPress={() => {
                        console.log('hdghsdgh');
                        _list(item?.listservices_id);
                      }}>
                      <Text style={styles.btnStyle}>ADD TO CART</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </ScrollView>
      <BottomModal onDrop={() => closeModal()} visible={sortModal}>
        <View style={{height: 450}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: styleFrom.Indigo,
              marginBottom: 10,
            }}>
            Select a Sort option
          </Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            {issortHightolow ? (
              <Icons
                onPress={() => setSortHightolow(!issortHightolow)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icons
                onPress={() => setSortHightolow(!issortHightolow)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10, color: '#616161', fontWeight: '500'}}>
              Sort by Price High to Low
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {issortlowtohigh ? (
              <Icons
                onPress={() => setSortLowtohigh(!issortlowtohigh)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icons
                onPress={() => setSortLowtohigh(!issortlowtohigh)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10, color: '#616161', fontWeight: '500'}}>
              Sort by Price Low to High
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {israteHightolow ? (
              <Icons
                onPress={() => setRateHightolow(!israteHightolow)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icons
                onPress={() => setRateHightolow(!israteHightolow)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10, color: '#616161', fontWeight: '500'}}>
              Rating - High to Low
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {isratelowtohigh ? (
              <Icons
                onPress={() => setRateLowtohigh(!isratelowtohigh)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icons
                onPress={() => setRateLowtohigh(!isratelowtohigh)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10, color: '#616161', fontWeight: '500'}}>
              Rating - Low to High
            </Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {istopRate ? (
              <Icons
                onPress={() => setTopRate(!istopRate)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icons
                onPress={() => setTopRate(!istopRate)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Top Rating</Text>
          </View>
        </View>
      </BottomModal>
      <View></View>
      <Modal
        // style={{margin:0}}
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
              Diamond Facial
            </TextCustom>
            <TextCustom
              fontSize={14}
              style={{marginLeft: 15}}
              color={styleFrom.black}
              fontWeight="700"
              marginBottom={5}>
              By R Spa
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
                4.8
              </TextCustom>
            </View>
            <TextCustom
              fontSize={14}
              style={{marginLeft: 15}}
              color={styleFrom.black}
              fontWeight="700"
              marginBottom={5}>
              ₹499
            </TextCustom>
            <FlatList
              keyExtractor={item => item.id}
              data={description}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
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
                    {item.desc}
                  </TextCustom>
                </View>
              )}
            />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', bottom: 5}}>
            <TouchableOpacity
              onPress={() => {
                setAddServiceModal(false),
                  navigation.navigate('ListOfServices');
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
              <Text style={{color: '#fff', fontSize: 14, fontWeight: '700'}}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainView: {
    margin: 15,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: styleFrom.primaryGrey,
  },
  imageView: {
    flex: 0.3,
    justifyContent: 'center',
    alignContent: 'center',
  },
  subView: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    backgroundColor: styleFrom.primaryGrey,
  },
  proceedBtn: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 40,
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
  descTextStyle1: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: '400',
    color: styleFrom.iconColor,
  },
  SubCategoryHeaderView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  SubCategoryHeaderText: {
    color: styleFrom.titleBlue,
    fontSize: 18,
    marginLeft: 10,
    flex: 0.7,
    fontWeight: '600',
  },
  sortListView: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  ratingStyle: {
    color: styleFrom.lightBlack,
    fontSize: 12,
    fontWeight: '700',
  },

  detailText: {
    flex: 0.7,
    flexDirection: 'column',
    marginLeft: 40,
    margin: 10,
  },
  ratingViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTextRow: {
    flexDirection: 'row',
    flex: 0.2,
  },
  ratingText: {
    flexDirection: 'row',
    flex: 0.9,
  },
  dotView: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  serviceNameRow: {
    color: styleFrom.titleBlue,
    flex: 0.7,
  },
  serviceName: {
    color: styleFrom.titleBlue,
    marginTop: 8,
  },
  startsfromTextRow: {
    fontWeight: '500',
    fontSize: 12,
    color: styleFrom.darkGrey,
    marginTop: 5,
    flex: 0.7,
  },
  startsfromText: {
    fontWeight: '500',
    fontSize: 12,
    color: styleFrom.darkGrey,
  },
  moneyViewRow: {
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    flex: 0.3,
  },
  moneyView: {
    backgroundColor: '#000',
    borderRadius: 6,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 30,
  },
  moneyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  flatlistView: {
    alignItems: 'center',
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  flatlistImage: {
    width: 170,
    height: 170,
    borderRadius: 15,
  },
  flatlistText: {
    fontWeight: '600',
    fontSize: 14,
    color: styleFrom.subTitleblue,
  },
  gridDescView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default ChooseServiceProvider;
