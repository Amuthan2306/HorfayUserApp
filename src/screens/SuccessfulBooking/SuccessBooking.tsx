import React, { useState, useRef, useEffect } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Platform, FlatList, TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StatusBar, Modal } from 'react-native';
import styleFrom from "../../assets/styles/styles";
import { useNavigation } from '@react-navigation/native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { ViewBookingCard } from '../../common/components/ViewBookingCard';
import images from '../../common/components/ImageAssets';
import SmallCircle from '../../common/components/SmallCircle';
import { useDispatch ,useSelector} from 'react-redux';

const SuccessBooking = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [bookingDetails, setbookingDetails] = useState("")
  const successBookingResponse = useSelector(
    (state: RootState) => state?.root?.auth?.successBookingList,
  );
  const loginID = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
  );
  useEffect(() => {
    setTimeout(() => {
      const params = {
        user_id: loginID,
        order_status: 'pending'
      };
      dispatch(global.actions.successBookingCall(params));
    }, 1000);
    setbookingDetails(successBookingResponse?.Details)
  }, []);
 
  const renderItem = ({ item }) => {
    return (
      <View style={styles.order_view}>
        <Image source={images.facial} style={{ height: 90, width: 90, borderRadius: 20 }} />
        <View style={styles.order_details}>
          <View style={{ flexDirection: 'row', width: '93%', alignSelf: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <Text style={styles.order_text}>{item.facialtype}</Text>
            <Text style={styles.order_text}>{item.orderid}</Text>
          </View>
          <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.descTextStyle}>{item.hour}</Text>
          </View>
          <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.descTextStyle}>{item.info}</Text>
          </View>
        </View>

      </View>
    )
  }

  const viewBookingTimeout = () => {
    navigation.navigate('ServiceCompleted')
    // setModalVisible(true)
    // setTimeout(() => {   
    //   setModalVisible(false)
    // }, 2000)
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1, flexDirection: 'row' }}>
          <View style={{ flex: 0.85 }}></View>
          <View style={{ flex: 0.15, justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{ backgroundColor: '#EBEBEB', borderRadius: 32, height: 20, width: 20, justifyContent: 'center', alignItems: 'center' }}>
              <CloseIcon name={'close'} size={12} color={styleFrom.iconColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <Image source={require('../../assets/png/Approved.png')} style={{ height: 70, width: 70 }} />
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#000' }}>Booking Successful !</Text>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '400', color: styleFrom.Indigo, margin: 10 }}>{`Dear ${successBookingResponse?.Details?.[0]?.user_name} you have successfully scheduled booking of`}<Text style={{ fontSize: 16, color: styleFrom.Indigo, fontWeight: '700' }}>{` ${successBookingResponse?.Details?.[0]?.listservicesDetails?.facialname}`} </Text>for the upcoming date <Text style={{ fontSize: 16, color: styleFrom.Indigo, fontWeight: '700' }}>{`${successBookingResponse?.Details?.[0]?.date}`}</Text> Our service provider will contact you soon.</Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '400', color: styleFrom.Indigo }}>Your<Text style={{ fontSize: 16, fontWeight: '700', color: styleFrom.Indigo }}>{` Order ID: ${successBookingResponse?.Details?.[0]?.order_id}`}</Text></Text>
          </View>
        </View>
        <View style={{ flex: 0.2 }} />
        <View style={{ flex: 0.15}}>
           <View style={{borderWidth:2,borderColor:styleFrom.borderColor,borderRadius:20,flexDirection:'row',marginLeft:'5%',marginRight:'5%'}}>
             <View style={{flex:0.3,margin:10}}>
               <Image source={{uri:
                                'https://horfay.colan.in/' +
                                successBookingResponse?.Details?.[0]?.listservicesDetails?.pic[0]?.image}}style={{height:90,width:95,borderRadius:20}}/>
             </View>
             <View style={{flex:0.7,flexDirection:'column',margin:10,justifyContent:'center'}}>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
        <Text numberOfLines={1} style={{fontSize:14,fontWeight:'700',color:styleFrom.Indigo,marginLeft:Platform.OS === 'ios'?10:0}}>{successBookingResponse?.Details?.[0]?.listservicesDetails?.facialname}</Text>
       <Text style={{fontSize:12,fontWeight:'700',color:styleFrom.Indigo,}}>{`Order ID: ${successBookingResponse?.Details?.[0]?.order_id}`}</Text>
       
        </View>
       <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.descTextStyle}>{successBookingResponse?.Details?.[0]?.listservicesDetails?.duration}</Text>
        </View>
        <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
             <Text style={styles.descTextStyle}>{successBookingResponse?.Details?.[0]?.listservicesDetails?.description2}</Text>
        </View>
      </View>
           </View>
        </View>
        <View style={{ flex: 0.15, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => viewBookingTimeout()} style={{ backgroundColor: "#000", justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: 50, margin: 20 }}>
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: '700' }}>View Booking</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modal_container}>
            <TouchableWithoutFeedback>
              <View style={styles.modal_view}>
                <View style={styles.booking}>
                  <Image source={images.clock} style={styles.logo} />
                  <Text style={styles.bookingtext}>Booking Delayed {'\n'}by 20 mins</Text>
                  <Text style={styles.time}>Don’t worry our service boy will reach to you by<Text style={{fontWeight:'700'}}> 2.30 pm</Text> as he is running late due to heavy traffic.</Text>
                </View>
                <View style={{ flex: 0.6 }}>
                  <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                  />
                </View>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
    </SafeAreaView>
  )
}
export default SuccessBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'flex-end',
  },
  modal_view: {
    flex: 0.6,
    width: '100%',
    backgroundColor: styleFrom.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  booking: {
    flex: 0.4,
    width: '68%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  bookingtext: {
    fontSize: 20,
    fontWeight: '700',
    color: styleFrom.Indigo,
    textAlign: 'center'
  },
  time: {
    fontSize: 16,
    fontWeight: '400',
    color: '#161616',
    textAlign: 'center',
    width:'90%'
  },
  logo: {
    height: 50,
    width: 50
  },
  order_view: {
    flex: 0.2,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: styleFrom.primaryGrey,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10
  },
  order_details: {
    height: '70%',
    width: '68%',
    justifyContent: 'center',
  },
  order_text: {
    fontSize: 14,
    fontWeight: '700',
    color: styleFrom.Indigo,
  },
  descView: {
    marginLeft: 10, flexDirection: "row", alignItems: 'center',
  },
  descTextStyle: {
    marginLeft: 10, fontSize: 14, fontWeight: '400', color: styleFrom.iconColor
  },
})



