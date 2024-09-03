import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  Keyboard,
  SectionList,Image, Pressable
} from 'react-native';
import translate from '../../utils/i18n';
import InputText from '../../common/components/InputText';
import Button from '../../common/components/Button';
import TextCustom from '../../common/components/TextWrapper';
import styleFrom from '../../assets/styles/styles';
import {useSelector} from 'react-redux';
import TextInputComponent from '../../common/components/TextInputComponents';

import PhoneInput from '../../common/components/PhoneInput';
import {useNavigation} from '@react-navigation/native';
import { AuthHeader } from '../../common/components/Header/authheader';

const NotificationScreen = props => {
    const navigation = useNavigation();
    const notificationData = [
      {
        title: 'TODAY',
        data: [
          {
            image: require('../../assets/image/CoinWallet.png'),
            id: '1',
            moneyStatus: 'Payment Successful',
            history:'You have made a Service Payment'
          },
        ],
      },
      {
        title: '03 FEB 2023',
        data: [
          {
            image: require('../../assets/image/OrderCompleted.png'),
            id: '1',
            moneyStatus: 'Your Order has been Confirmed',
            history:'Further details will be received shortly'
          },
          {
            image: require('../../assets/image/VerifiedAccount.png'),
            id: '2',
            moneyStatus: 'Your Service Completed',
            history:'Diamond Facial Pack'
          },
        ],
      }
    ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}} >
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <AuthHeader label="Notification"
                onPress={() => navigation.goBack()}
                 />
      <SectionList
        style={{ marginTop: -10}}
        sections={notificationData}
        renderItem={({ item }) => (
          <View style={{flexDirection:'row',margin:5}}>
            <View style={{backgroundColor:'#000',borderRadius:35,height:70,width:70,justifyContent:'center',alignItems:'center',marginLeft:10}}>
              <Image style={{height:40,width:40}}source={item.image}/>
            </View>
            <View style={{margin:5,marginLeft:10,alignSelf:'center'}}>
              <Text style={{color:styleFrom.Indigo,fontSize:14,fontWeight:'500',marginBottom:5}}>{item?.moneyStatus}</Text>
              <Text style={{color:'#757575',fontWeight:'400',fontSize:12}}>{item?.history}</Text>
             {item.id == '2' ?
              <Pressable>
                <Text>View Detail</Text>
              </Pressable> : <></>} 
            </View>
            
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View
            style={{ backgroundColor: '#F3F3F3', marginTop: 8, marginBottom: 8 }}>
            <Text style={styles.headerTitle}>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled
      />
      {/* <View style={{alignItems:'center',margin:10}}>
        <Text style={{fontSize:16,fontWeight:'600',color:'#000'}}>No Records Found !</Text>
      </View> */}
    </SafeAreaView>
  );
};
export default NotificationScreen;
const styles = {
  container: {
      flex: 1,
      backgroundColor:'#fff'
  },
  headerTitle:{
      fontSize: 12,
      fontWeight: "bold",
      padding: 12,
      marginBottom: 0,
      borderRadius: 10,
      color: '#757575',
      marginLeft: 5,
  },
  
};
