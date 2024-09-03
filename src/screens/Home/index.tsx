import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  Modal,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import GPSIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import RightArrow from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import styleFrom from '../../assets/styles/styles';
import Button from '../../common/components/Button';
import translate from '../../utils/i18n';
import Icons from 'react-native-vector-icons/EvilIcons';
import BottomModal from '../../common/components/BottomModal';
import images from '../../common/components/ImageAssets';
import {
  serviceList,
  trendingService,
  serviceList1,
} from '../../common/ConstantList';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const itemsCount = 3;
  const [modalVisible, setModalVisible] = useState(false);
  const [mapmodal, setmapmodel] = useState(false);
  const [press, setpress] = useState(false);
  const [click, setclick] = useState(true);
  const [locationModal, setLocationModal] = useState(false);
  const allCategory = useSelector(
    (state: RootState) => state?.root?.auth?.allCategories,
  );
  const loginData = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails,
  );
  useEffect(() => {
    setModalVisible(!modalVisible);
    dispatch(global.actions.allCategoryCall());
  }, []);
  // useEffect(() => {
    
  //   setModalVisible(!modalVisible);
  // }, []);
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={styles.headerBar}>
          <Pressable
            onPress={() => navigation.openDrawer()}
            style={styles.menuView}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../assets/png/menus.png')}
            />
          </Pressable>
          <View
            style={{
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.currentLocationText}>CURRENT LOCATION</Text>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => setLocationModal(true)}>
              <Text style={styles.locationText}>Chennai,TamilNadu</Text>
              <ArrowIcon
                name="caretdown"
                color="#172B4D"
                size={15}
                style={styles.arrowText}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '20%'}} />
        </View>
        <View style={styles.greetingView}>
          <View style={{margin: 15}}>
            <Text style={styles.greetingText}>{`HELLO ${loginData?.Details?.first_name} 👋`}</Text>
            <Text style={styles.greetingTitle}>
              What you are looking for today
            </Text>
          </View>
          <View style={styles.greetingSearch}>
            <TextInput
              placeholder="Search what you need..."
              placeholderTextColor="#9B9E9F"
              style={{
                flex: 0.92,
                height: Platform.OS === 'ios' ? 40 : 40,
                marginLeft: 5,
                color: '#000',
              }}
            />
            <TouchableOpacity style={styles.searchBtn}>
              <Image
                source={require('../../assets/png/search.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryView}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              width: '100%',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Image
              style={styles.cleaningImgStyle}
              source={require('../../assets/png/tag.png')}
            />
            <Text style={styles.cleaningServiceText}>Categories</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.75}}>
              <FlatList
                keyExtractor={item => item.id}
                horizontal
                //scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                data={allCategory?.Details?.slice(0, itemsCount)}
                renderItem={({item}) => (
                  <View
                    style={{
                      width:95,                                                           
                    }}>
                    <View style={styles.subCategoryView}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() =>
                          navigation.navigate('DetailCategoryScreen', {
                            getID: item?.category_id,
                            getName: item?.categoryname,
                          })
                        }>
                        <Image
                          source={{
                            uri: 'https://horfay.colan.in/' + item?.image,
                          }}
                          style={styles.categoryBtn}></Image>
                      </TouchableOpacity>
                      <View style={{flexGrow: 1,flexDirection: 'row'}}>
                      <Text
                        style={{
                           flex: 1, 
                           width: 1,              
                           fontSize: 13,
                           color: styleFrom.blueText,                                                                 
                           marginTop: 5,
                           textAlign: 'center',
                        }}>
                        {item?.categoryname}
                      </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={{flex: 0.25}}>
              <View style={styles.subCategoryView}>
                <TouchableOpacity
                  style={[
                    styles.categoryBtn,
                    {backgroundColor: styleFrom.seeAllColor},
                  ]}
                  onPress={() => navigation.navigate('AllCategory')}>
                  <Image
                    source={require('../../assets/png/right_arrow.png')}
                    style={styles.arrowStyle}></Image>
                </TouchableOpacity>
                <Text style={styles.subCategoryText}>See All</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cleaningbgView}>
          <View style={styles.CleaningView}>
            <Image
              style={styles.cleaningImgStyle}
              source={require('../../assets/png/tag.png')}
            />
            <Text style={styles.cleaningServiceText}>Cleaning Services</Text>
            <TouchableOpacity style={styles.seeallBtn}>
              <View style={styles.seeallTextView}>
                <Text style={styles.seeallText}>See All</Text>
              </View>
              <ArrowIcon name={'right'} size={11} color={'#6F767E'} />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.id}
            data={serviceList}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={(style = styles.flatlistView)}>
                <Image source={item.icon} style={styles.flatlistImage} />
                <Text style={styles.flatlistText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.cleaningbgView}>
          <View style={styles.CleaningView}>
            <Image
              style={styles.cleaningImgStyle}
              source={require('../../assets/png/tag.png')}
            />
            <Text style={styles.cleaningServiceText}>Salon & Spa</Text>
            <TouchableOpacity style={styles.seeallBtn}>
              <View style={styles.seeallTextView}>
                <Text style={styles.seeallText}>See All</Text>
              </View>
              <ArrowIcon
                name={'right'}
                size={11}
                color={'#6F767E'}
                style={{}}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.id}
            data={serviceList1}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={(style = styles.flatlistView)}>
                <Image source={item.icon} style={styles.flatlistImage} />
                <Text style={styles.flatlistText}>{item.text}</Text>
              </View>
            )}
          />
        </View>
        {/* <View style={styles.trendingServiceView}>
          <Text style={styles.trendingText}>Trending Services</Text>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.id}
            data={trendingService}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={(style = styles.flatlistView1)}>
                <Image source={item.icon} style={styles.flatlistImage1}></Image>
                <Text style={styles.flatlistTextStyle}>{item.text}</Text>
              </View>
            )}
          />
        </View> */}
      </ScrollView>
      <BottomModal
        onDrop={() => setLocationModal(false)}
        visible={locationModal}
        modalHeight={500}>
        <KeyboardAwareScrollView>
          <ScrollView style={{margin: 10}}>
            <Text style={styles.selectLocationText}>Select a location</Text>
            <View style={styles.searchView}>
              <Icons
                name={'search'}
                size={30}
                style={{flex: 0.1}}
                color={styleFrom.iconColor}
              />
              <TextInput
                placeholder="Search for area, street name. . ."
                placeholderTextColor={styleFrom.iconColor}
                style={{flex: 0.9}}
              />
            </View>
            <TouchableOpacity
              onPress={() => setmapmodel(!mapmodal)}
              style={styles.addressView}>
              <View style={{flex: 0.08, marginBottom: 50}}>
                <Image source={images.gps} style={{height: 22, width: 22}} />
              </View>
              <View style={styles.textView}>
                <Text style={styles.currentAddress}>Use current location</Text>
                <Text style={styles.detailedAddress}>
                  Ayodhya Nagar Extension, Ayodhya Bypass
                </Text>
              </View>
              <RightArrow
                name={'chevron-right'}
                color={'#5E17EB'}
                size={22}
                style={{flex: 0.05, marginBottom: 20}}
              />
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAwareScrollView>
      </BottomModal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal_container}>
          <View style={styles.modal_View}>
            <View style={styles.modalbgView}>
              <View style={styles.modalImageView}>
                <Image
                  source={images.map_marker}
                  style={styles.modalImageStyle}
                />
              </View>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icons name={'close'} size={15} color={'#757575'} />
              </TouchableOpacity>
            </View>
            <View style={styles.locationView}>
              <Text style={styles.allowLocation}>
                {translate('login.allow_location')}
              </Text>
              <Text style={styles.locationModalText}>
                {translate('login.location')}
              </Text>
            </View>
            <Button
              label={translate('login.surebutton')}
              round={false}
              onPress={() => {
                setclick(true), setpress(false),setModalVisible(!modalVisible);
              }}
              style={{
                height: '12%',
                width: '80%',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
                backgroundColor: click ? styleFrom.black : styleFrom.white,
              }}
              labelStyle={{
                fontSize: 14,
                color: click ? styleFrom.white : styleFrom.black,
                fontWeight: '500',
              }}
            />
            <Button
              label={translate('login.notnow')}
              round={false}
              onPress={() => {
                setpress(true), setclick(false), setModalVisible(!modalVisible);
              }}
              style={{
                height: '12%',
                width: '80%',
                marginTop: 12,
                backgroundColor: press ? styleFrom.black : styleFrom.white,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              labelStyle={{
                fontSize: 16,
                color: press ? styleFrom.white : styleFrom.Indigo,
                fontWeight: '700',
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
export default Home;
