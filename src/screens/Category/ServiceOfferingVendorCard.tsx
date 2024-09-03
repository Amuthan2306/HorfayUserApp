import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  Pressable,
} from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {SearchHeader} from '../../common/components/SearchHeader';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import TextCustom from '../../common/components/TextWrapper';
import {ServiceCard} from '../../common/components/ServiceCard';
import {useDispatch, useSelector} from 'react-redux';
import {setAppLoader} from '../../redux/Reducer/AppLoader';
import {Spinner} from '../../assets/Spinner';

const reviewList = [
  {
    name: 'Peter',
    description:
      'Jim has done a fabulous job, it took exactly the same time as mentioned and he came on time to our doorstep.',
    ratings: 4.0,
    time: '1 days ago',
  },
  {
    name: 'nancy',
    description:
      'Jim has done a fabulous job, it took exactly the same time as mentioned and he came on time to our doorstep.',
    ratings: 3.0,
    time: '2 days ago',
  },
];
const ServiceOfferingVendorCard = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listServiceId = props?.route?.params;
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const serviceofferingCard = useSelector(
    (state: RootState) => state?.root?.auth?.serviceOfferingCard,
  );
  const staticData = {
    name: 'Suresh',
    time: '10 Apr, 02:30 pm',
    definition: 'Facial for glow',
    price: serviceofferingCard?.Details?.BillingDetails?.amount,
    serviceName: serviceofferingCard?.Details?.facialname,
    ratings: serviceofferingCard?.Details?.rating,
    reason: 'I am ordered diffrent time and service',
    orderID: '0214785',
    duration: serviceofferingCard?.Details?.duration,
    definition2: serviceofferingCard?.Details?.description2,
    serviceImg: {
      uri:
        'https://horfay.colan.in/' +
        serviceofferingCard?.Details?.pic[0]?.image,
    },
  };
  useEffect(() => {
    setTimeout(() => {
      const params = {
        listservices_id: Number(listServiceId?.listServiceId),
      };
      dispatch(setAppLoader(true));
      dispatch(global.actions.serviceCardCall(params));
    }, 1000);
  }, []);
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <SearchHeader
        searchPlaceholder="Search"
        onLeftIconClick={() => navigation.goBack()}
      />
      <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextCustom
              fontSize={16}
              //onPress={()=>navigation.navigate('VendorProfile')}
              color={styleFrom.black}
              fontWeight="700"
              marginBottom={10}
              marginTop={40}
              marginLeft={24}>
              {serviceofferingCard?.Details?.provider_details?.businessname}
            </TextCustom>
            <Pressable
              style={{marginTop: 40, marginBottom: 10}}
              onPress={() =>
                navigation.navigate('VendorProfile', {
                  providerId:
                    serviceofferingCard?.Details?.provider_details?.provider_id,
                })
              }>
              <Text>Click to view Vendor details</Text>
            </Pressable>
            <Text></Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            <Icon name={'checksquare'} size={14} color={styleFrom.green} />
            <TextCustom
              fontSize={12}
              color={styleFrom.iconColor}
              fontWeight="400"
              marginLeft={8}>
              {`${serviceofferingCard?.Details?.jobs} bookings this year in Jammu Surinsar Mansar Road`}
            </TextCustom>
          </View>

          <View
            style={{
              height: 6,
              width: '100%',
              backgroundColor: styleFrom.seeAllColor,
              marginTop: 25,
            }}></View>
          <ServiceCard data={staticData} />
          <TextCustom
            fontSize={14}
            color={styleFrom.black}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            width="90%">
            {serviceofferingCard?.Details?.description}
          </TextCustom>

          <TextCustom
            fontSize={18}
            color={styleFrom.Indigo}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            marginTop={30}
            width="90%">
            {'Included'}
          </TextCustom>

          <TextCustom
            fontSize={14}
            color={styleFrom.Indigo}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            marginTop={7}
            width="90%">
            {serviceofferingCard?.Details?.included}
          </TextCustom>

          <TextCustom
            fontSize={18}
            color={styleFrom.Indigo}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            marginTop={30}
            width="90%">
            {'Excluded'}
          </TextCustom>

          <TextCustom
            fontSize={14}
            color={styleFrom.Indigo}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            marginTop={7}
            width="90%">
            {serviceofferingCard?.Details?.excluded}
          </TextCustom>

          <TextCustom
            fontSize={18}
            color={styleFrom.Indigo}
            fontWeight="400"
            marginLeft={18}
            marginRight={16}
            marginTop={30}
            width="90%">
            {'FAQs'}
          </TextCustom>
          <FlatList
            keyExtractor={item => item.id}
            data={serviceofferingCard?.Details?.faqs}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <TextCustom
                  fontSize={14}
                  color={styleFrom.Indigo}
                  fontWeight="400"
                  marginLeft={18}
                  marginRight={16}
                  marginTop={7}
                  width="90%">
                  {item.question}
                </TextCustom>
                <TextCustom
                  fontSize={14}
                  color={styleFrom.Indigo}
                  fontWeight="400"
                  marginLeft={18}
                  marginRight={16}
                  marginTop={7}
                  width="90%">
                  {item.answer}
                </TextCustom>
              </View>
            )}
          />

          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 24}}>
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
          {serviceofferingCard?.Details?.feedback == 'No comments' ||
          'undefined' ? (
            <Text style={{marginLeft: 20}}>No Comments</Text>
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

                  <View style={{flexDirection: 'row', marginTop: 5, right: 4}}>
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
                                  ratingUs <= item.ratings ? 'star' : 'star-o'
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
          {/* <FlatList
            keyExtractor={item => item.id}
            style={{marginLeft: 20, marginTop: 10, marginBottom: 20}}
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

                <View style={{flexDirection: 'row',marginTop:5,right:4}}>
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
                                ratingUs <= item.ratings ? 'star' : 'star-o'
                              }
                              size={20}
                              color={
                                ratingUs <= item.ratings ? '#F5C443' : '#757575'
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
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ServiceOfferingVendorCard;
