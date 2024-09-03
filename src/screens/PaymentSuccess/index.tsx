import React, { useState, useRef } from 'react';
import { View,Image, Text,ScrollView, StyleSheet, SafeAreaView, StatusBar,FlatList } from 'react-native';
import styleFrom from "../../assets/styles/styles";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tickicon from 'react-native-vector-icons/AntDesign';
import { ViewBookingCard } from '../../common/components/ViewBookingCard';
import { billData } from '../../common/ConstantList';

const PaymentSuccess = (props) => {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
          <View style={{flex:1}}>
            <View style={{flex:0.15}}/>
            <View style={{flex:0.35,backgroundColor:'#fff',marginLeft:'6%',marginRight:'6%',borderTopRightRadius:14,borderTopLeftRadius:14,justifyContent:'center',alignItems:'center'}}>
              <View style={{height:45,width:45,borderRadius:32,backgroundColor:'#000',justifyContent:'center',alignItems:'center',marginTop:-50}}>
                <Tickicon name={'check'} size={32} color={'#fff'}/>
              </View>
              <Text style={{fontWeight:'400',fontSize:16,color:'#000',marginTop:10}}>Great</Text>
              <Text style={{fontWeight:'700',fontSize:20,color:styleFrom.Indigo,marginTop:10}}>Payment Success</Text>
              <View style={{flex:0.7,flexDirection:'row',marginTop:15}}>
              <FlatList
                keyExtractor={item => item.id}
                data={billData}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                 <View style={{flexDirection:'row',marginTop:10,marginLeft:30,marginRight:20}}>
                    <Text style={{flex:0.5,fontWeight:'500',fontSize:14,color:'#757575'}}>{item.title}</Text>
                    <Text style={{flex:0.5,fontWeight:'500',fontSize:14,color:styleFrom.Indigo}}>{item.value}</Text>
                  </View>
                )}
              />
              </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:"space-between",backgroundColor:'#fff',marginLeft:'6%',marginRight:'6%',}}>
             <View style={{backgroundColor:styleFrom.bgGrey,borderRadius:32,height:50,width:50,marginLeft:-20}}/>
             {/* <View style={{flex:0.4}}/> */}
             <View style={{backgroundColor:styleFrom.bgGrey,borderRadius:32,height:50,width:50,marginRight:-20}}/>
            </View>
            <View style={{flex:0.15,backgroundColor:'#fff',marginLeft:'6%',marginRight:'6%',borderBottomRightRadius:14,borderBottomLeftRadius:14,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:14,fontWeight:'500',color:'#757575'}}>Total Pay</Text>
              <Text style={{fontWeight:'700',fontSize:20,color:'#000'}}>₹ 749</Text>
            </View>
            <View style={{flex:0.35,justifyContent:'center',}}>
            <TouchableOpacity onPress={()=> navigation.navigate('ServiceCompleted')}style={{backgroundColor:"#000",justifyContent:'center',alignItems:'center',borderRadius:10,height:50,margin:20}}>
                <Text style={{color:"#fff",fontSize:14,fontWeight:'700'}}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
    )
}
export default PaymentSuccess;

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor:styleFrom.bgGrey
},
})



