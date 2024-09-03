import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Pressable,
  Keyboard,
} from 'react-native';
import styleFrom from '../../assets/styles/styles';
import {useNavigation} from '@react-navigation/native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {ViewBookingCard} from '../../common/components/ViewBookingCard';
import Star from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import SmallCircle from '../../common/components/SmallCircle';
import {Spinner} from '../../assets/Spinner';

const FeedbackScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const successBookingResponse = useSelector(
    (state: RootState) => state?.root?.auth?.successBookingList,
  );
  const loginID = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
  );
  const feedbackResponse = useSelector(
    (state: RootState) => state?.root?.auth?.feedbackList,
  );
  function onSubmitFeedback() {
    const params = {
      feedback:
        defaultRating == 1
          ? '1 - Awful'
          : defaultRating == 2
          ? '2 - Poor'
          : defaultRating == 3
          ? '3 - Fair'
          : defaultRating == 4
          ? '4 - Good'
          : defaultRating == 5
          ? '5 - Excellent'
          : null,
      rating: defaultRating,
      user_id: loginID,
      provider_id: loginID,
      listservices_id:
        successBookingResponse?.Details?.[0]?.listservicesDetails
          ?.listservices_id,
    };
    setTimeout(() => {
      dispatch(global.actions.FeedbackCall(params));
      if (feedbackResponse?.message == 'Rating updated successfully') {
        navigation.navigate('Home');
      }
    }, 1000);
  }
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView style={styles.container}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f5f5f5'} />
      <View
        style={{
          flex: 0.15,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.9, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{fontSize: 20, fontWeight: '700', color: styleFrom.Indigo}}>
            Feedback
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <CloseIcon name={'close'} size={15} color={styleFrom.iconColor} />
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => Keyboard.dismiss()} style={{flex: 1}}>
        <View style={{flex: 0.4}}>
          <View
            style={{
              borderWidth: 2,
              borderColor: styleFrom.borderColor,
              borderRadius: 20,
              flexDirection: 'row',
              marginLeft: '5%',
              marginRight: '5%',
            }}>
            <View style={{flex: 0.3, margin: 10}}>
              <Image
                source={{
                  uri:
                    'https://horfay.colan.in/' +
                    successBookingResponse?.Details?.[0]?.listservicesDetails
                      ?.pic[0]?.image,
                }}
                style={{height: 90, width: 95, borderRadius: 20}}
              />
            </View>
            <View
              style={{
                flex: 0.7,
                flexDirection: 'column',
                margin: 10,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 6,
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 14,
                    fontWeight: '700',
                    color: styleFrom.Indigo,
                    marginLeft: Platform.OS === 'ios' ? 10 : 0,
                  }}>
                  {
                    successBookingResponse?.Details?.[0]?.listservicesDetails
                      ?.facialname
                  }
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: styleFrom.Indigo,
                  }}>{`Order ID: ${successBookingResponse?.Details?.[0]?.order_id}`}</Text>
              </View>
              <View style={styles.descView}>
                <SmallCircle color={styleFrom.iconColor} />
                <Text style={styles.descTextStyle}>
                  {
                    successBookingResponse?.Details?.[0]?.listservicesDetails
                      ?.duration
                  }
                </Text>
              </View>
              <View style={styles.descView}>
                <SmallCircle color={styleFrom.iconColor} />
                <Text style={styles.descTextStyle}>
                  {
                    successBookingResponse?.Details?.[0]?.listservicesDetails
                      ?.description2
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '5%',
            marginRight: '5%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '400',
              fontSize: 16,
              height: '70%',
              marginTop: '8%',
              color: styleFrom.Indigo,
            }}>
            How would you rate the experience and service ?
          </Text>
        </View>
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                style={{margin: 6, marginTop: 30}}
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Star
                  name={item <= defaultRating ? 'star' : 'star-o'}
                  size={30}
                  color={item <= defaultRating ? '#F5C443' : '#757575'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{alignItems: 'center', flex: 0.2, justifyContent: 'center'}}>
          <Text
            style={{fontWeight: '400', fontSize: 16, color: styleFrom.Indigo}}>
            {defaultRating == 1
              ? '1 - Awful'
              : defaultRating == 2
              ? '2 - Poor'
              : defaultRating == 3
              ? '3 - Fair'
              : defaultRating == 4
              ? '4 - Good'
              : defaultRating == 5
              ? '5 - Excellent'
              : null}
          </Text>
        </View>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20%',
          }}>
          {defaultRating > 0 ? (
            <TextInput
              multiline={true}
              style={{
                textAlignVertical: 'top',
                backgroundColor: '#fff',
                height: 125,
                width: '90%',
                borderRadius: 10,
                color: '#000',
              }}
              placeholderTextColor={'#8E8E8E'}
              placeholder="Share details of your own experience at our service"
            />
          ) : null}
        </View>
      </Pressable>
      <TouchableOpacity
        onPress={() => onSubmitFeedback()}
        style={{
          backgroundColor: defaultRating > 0 ? '#000' : '#D8D8D8',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          height: 50,
          margin: 20,
        }}>
        <Text
          style={{
            color: defaultRating > 0 ? '#fff' : '#858585',
            fontSize: 14,
            fontWeight: '700',
          }}>
          Submit Feedback
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  descView: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descTextStyle: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '400',
    color: styleFrom.iconColor,
  },
});
