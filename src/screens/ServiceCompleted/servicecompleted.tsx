import React, { useState, useRef, useEffect } from 'react';
import { View,Image, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import styleFrom from "../../assets/styles/styles";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { ViewBookingCard } from '../../common/components/ViewBookingCard';
import images from '../../common/components/ImageAssets';
import styleForm from '../../assets/styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import SmallCircle from '../../common/components/SmallCircle';

const ServiceCompleted = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loginID = useSelector(
      (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
    );
    const successBookingResponse = useSelector(
      (state: RootState) => state?.root?.auth?.successBookingList,
    );

    useEffect(() => {
      setTimeout(() => {
        const params = {
          user_id: loginID,
          order_status: 'completed'
        };
        dispatch(global.actions.successBookingCall(params));
      }, 1000);
    }, []);

    return (
    <SafeAreaView style={styles.container}>
          <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
           <View style={{flex:1}}>
            <View style={{flex:0.1,flexDirection:'row'}}>
               <View style={{flex:0.85}}></View>
               <View style={{flex:0.1,alignItems:'flex-end',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}style={{ backgroundColor:'#EBEBEB',borderRadius:32,height:20,width:20,justifyContent:'center',alignItems:'center'}}>
                   <CloseIcon name={'close'} size={12} color={styleFrom.iconColor}/> 
                </TouchableOpacity>          
               </View>
            </View>
             <View style={{flex:0.33,borderWidth:0,justifyContent:'space-evenly',alignItems:'center',margin:20}}>
              <Image source={images.thumbsup} style={{height:64,width:64}}/>
              <Text style={{fontSize:20,fontWeight:'700',color:styleForm.darkyellow}}>Service Completed</Text>
              <Text style={{ textAlign: 'center',fontSize:16,fontWeight:'400',color:styleFrom.Indigo,margin:10}}>{`Dear ${successBookingResponse?.Details?.[0]?.user_name} please share your valuable feedback. This will help us improve our services.`}</Text>
              <View>
              </View>
             </View>
             <View style={{flex:0.29}}/>
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
             <View style={{flex:0.03}}/>
             <View style={{flex:0.15,justifyContent:'center'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('FeedbackScreen')}style={{backgroundColor:"#000",justifyContent:'center',alignItems:'center',borderRadius:10,height:50,margin:20}}>
                <Text style={{color:"#fff",fontSize:14,fontWeight:'700'}}>Share Feedback</Text>
              </TouchableOpacity>
             </View>
                      
         
                      
           </View>
    </SafeAreaView>
    )
}
export default ServiceCompleted;

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'
},
descView: {
  marginLeft: 10, flexDirection: "row", alignItems: 'center',
},
descTextStyle: {
  marginLeft: 10, fontSize: 14, fontWeight: '400', color: styleFrom.iconColor
},
})



