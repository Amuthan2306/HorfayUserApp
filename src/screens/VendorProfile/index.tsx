import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SearchHeader} from '../../common/components/SearchHeader';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import TextCustom from '../../common/components/TextWrapper';
import Button from '../../common/components/Button';
import styles from './styles';
import Star from 'react-native-vector-icons/FontAwesome';
import {subCategoryList} from '../../common/ConstantList';
import {ServiceCard} from '../../common/components/ServiceCard';
import SwiperComponent from '../../common/components/Swiper';

const DATA = [
  {
    title: 'Pearl Facial',
    data: [
      {
        name: 'Suresh',
        time: '10 Apr, 02:30 pm',
        definition: 'Facial for glow',
        definition2: 'Includes dummy info',
        serviceName: 'Water Based Makeup',
        reason: 'I am ordered diffrent time and service',
        orderID: '0214785',
        duration: '2 hrs',
        serviceImg: require('../../assets/image/facial.jpg'),
      },
      {
        name: 'Suresh',
        time: '10 Apr, 02:30 pm',
        definition: 'Facial for glow',
        definition2: 'Includes dummy info',
        serviceName: 'Diamond Facial',
        reason: 'I am ordered diffrent time and service',
        orderID: '0214785',
        duration: '2 hrs',
        serviceImg: require('../../assets/image/facial.jpg'),
      },
    ],
  },
  {
    title: 'Gold Facial',
    data: [
      {
        name: 'Suresh',
        time: '10 Apr, 02:30 pm',
        definition: 'Facial for glow',
        definition2: 'Includes dummy info',
        serviceName: 'Diamond Facial',
        reason: 'I am ordered diffrent time and service',
        orderID: '0214785',
        duration: '2 hrs',
        serviceImg: require('../../assets/image/facial.jpg'),
      },
      {
        name: 'Suresh',
        time: '10 Apr, 02:30 pm',
        definition: 'Facial for glow',
        definition2: 'Includes dummy info',
        serviceName: 'Diamond Facial',
        reason: 'I am ordered diffrent time and service',
        orderID: '0214785',
        duration: '2 hrs',
        serviceImg: require('../../assets/image/facial.jpg'),
      },
    ],
  },
];

const VendorProfile = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [activeAbout, setActiveAbout] = useState(true);
  const [activeServices, setActiveServices] = useState(false);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const ourServiceDetails = useSelector(
    (state: RootState) => state?.root?.auth?.ourServicesCard,
  );
  const serviceofferingCard = useSelector(
    (state: RootState) => state?.root?.auth?.serviceOfferingCard,
  );
  const staticData = {
    serviceName: serviceofferingCard?.Details?.facialname,
    price: serviceofferingCard?.Details?.BillingDetails?.amount,
    ratings: serviceofferingCard?.Details?.rating,
    duration: serviceofferingCard?.Details?.duration,
    definition2: serviceofferingCard?.Details?.description,
    serviceImg: {
      uri:
        'https://horfay.colan.in/' +
        serviceofferingCard?.Details?.pic[0]?.image,
    },
  };

  const providerId = props?.route?.params;
  const changeStatus = (changeBtn: boolean) => {
    if (changeBtn === true) {
      setActiveServices(true);
      setActiveAbout(false);
    } else {
      setActiveServices(false);
      setActiveAbout(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      const params = {
        provider_id: Number(providerId?.providerId),
      };
      dispatch(global.actions.ourServiceCall(params));
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <SearchHeader
        searchPlaceholder="Search"
        onLeftIconClick={() => navigation.goBack()}
      />
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <ScrollView>
          <SwiperComponent
            swiperImage={serviceofferingCard?.Details?.pic}
            border
          />
          <TextCustom
            fontSize={16}
            color={styleFrom.black}
            fontWeight="700"
            marginBottom={10}
            marginTop={40}
            marginLeft={24}>
            {ourServiceDetails?.Details?.[0]?.provider_details?.businessname}
          </TextCustom>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            <Image
              style={{width: 15, height: 12}}
              source={require('../../assets/png/star.png')}></Image>
            <TextCustom
              fontSize={12}
              color={styleFrom.iconColor}
              marginLeft={8}
              fontWeight="400">
              {ourServiceDetails?.Details?.[0]?.rating}
            </TextCustom>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 8,
              marginLeft: 24,
            }}>
            <Icon name={'checksquare'} size={14} color={styleFrom.green} />
            <TextCustom
              fontSize={12}
              color={styleFrom.iconColor}
              marginLeft={8}
              fontWeight="400">
              {`${ourServiceDetails?.Details?.[0]?.jobs} bookings this year in Jammu Surinsar Mansar Road`}
            </TextCustom>
          </View>

          <View
            style={{
              height: 6,
              width: '100%',
              backgroundColor: styleFrom.seeAllColor,
              marginTop: 25,
            }}></View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              label={'About us'}
              onPress={() => changeStatus(false)}
              round={false}
              style={
                activeAbout === true
                  ? styles.meduimButton
                  : styles.mediumBtnGrey
              }
              labelStyle={styles.labelText}
            />
            <Button
              label={'Our Services'}
              onPress={() => changeStatus(true)}
              round={false}
              style={
                activeServices === true
                  ? styles.meduimButton
                  : styles.mediumBtnGrey
              }
              labelStyle={styles.labelText}
            />
          </View>

          {activeAbout === false ? (
            <>
              <TextCustom
                fontSize={14}
                color={styleFrom.iconColor}
                fontWeight="500"
                marginLeft={20}
                marginRight={20}
                align="left">
                {ourServiceDetails?.Details?.[0]?.description}
              </TextCustom>

              <View
                style={{flexDirection: 'row', marginLeft: 20, marginTop: 34}}>
                <TextCustom
                  fontSize={16}
                  color={styleFrom.black}
                  fontWeight="700"
                  align="left">
                  {'What people say '}
                </TextCustom>
                <Image
                  style={{width: 20, height: 20, marginTop: 4, marginLeft: 11}}
                  source={require('../../assets/png/SpeechBalloon.png')}
                />
              </View>
              {serviceofferingCard.Details.feedback == 'No comments' || "undefined" ? (
                <Text style={{marginLeft:20}}>No Comments</Text>
              ) : (
                <FlatList
                  keyExtractor={item => item.id}
                  style={{marginLeft: 20, marginTop: 29, marginBottom: 20}}
                  data={serviceofferingCard.Details.feedback}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View style={{marginTop: 10}}>
                      <TextCustom
                        fontSize={14}
                        color={styleFrom.Indigo}
                        fontWeight="600">
                        {item.user_name}
                      </TextCustom>

                      <View
                        style={{flexDirection: 'row', marginTop: 5, right: 4}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '64%',
                          }}>
                          {item &&
                            maxRating.map((ratingUs, key) => {
                              return (
                                <TouchableOpacity
                                  style={{margin: 3}}
                                  activeOpacity={0.7}
                                  key={ratingUs}>
                                  <Star
                                    name={
                                      ratingUs <= item.ratings
                                        ? 'star'
                                        : 'star-o'
                                    }
                                    size={20}
                                    color={
                                      ratingUs <= item.ratings
                                        ? '#F5C443'
                                        : '#757575'
                                    }
                                  />
                                </TouchableOpacity>
                              );
                            })}
                          <TextCustom
                            fontSize={14}
                            color={styleFrom.Indigo}
                            fontWeight="500"
                            marginLeft={17}>
                            {item.ratings}
                          </TextCustom>
                        </View>
                        <TextCustom
                          fontSize={14}
                          color={styleFrom.iconColor}
                          fontWeight="400"
                          marginLeft={50}
                          marginTop={2}>
                          {`${item.time_difference} ago`}
                        </TextCustom>
                      </View>
                      <TextCustom
                        fontSize={14}
                        color={styleFrom.iconColor}
                        fontWeight="400"
                        marginTop={5}>
                        {item.comments}
                      </TextCustom>
                    </View>
                  )}
                />
              )}
            </>
          ) : (
            <>
              <FlatList
                keyExtractor={item => item.id}
                data={subCategoryList}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <View style={styles.flatlistView}>
                    <Image source={item.icon} style={styles.flatlistImage} />
                    <TextCustom
                      fontSize={8}
                      color={styleFrom.black}
                      fontWeight="500"
                      align="center"
                      marginTop={5}>
                      {item.title}
                    </TextCustom>
                  </View>
                )}
              />

              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <ServiceCard data={staticData} add={true} />
                )}
                renderSectionHeader={({section: {title}}) => (
                  <TextCustom
                    fontSize={18}
                    color={styleFrom.Indigo}
                    fontWeight="500"
                    marginLeft={16}
                    marginTop={5}>
                    {title}
                  </TextCustom>
                )}
              />
            </>
          )}

          <View
            style={{
              height: 6,
              width: '100%',
              backgroundColor: styleFrom.seeAllColor,
              marginTop: 25,
            }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default VendorProfile;
