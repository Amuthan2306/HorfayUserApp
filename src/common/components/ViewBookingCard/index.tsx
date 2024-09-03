import React from 'react';
import {
  Image, Platform, Text,
  TouchableOpacity,
  View
} from 'react-native';
import FeatherICON from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import styleFrom from "../../../assets/styles/styles";
import SmallCircle from '../SmallCircle';

interface ViewBookingCardProps {
  text?: string;
}

export const ViewBookingCard: React.FunctionComponent<ViewBookingCardProps> = ({
  text,
}) => {
  return (
    <View style={{borderWidth:2,borderColor:styleFrom.borderColor,borderRadius:20,flexDirection:'row',marginLeft:'5%',marginRight:'5%'}}>
      <View style={{flex:0.3,margin:10}}>
        <Image source={require('../../../assets/image/facial.jpg')} style={{height:100,width:110,borderRadius:20}}/>
      </View>
      <View style={{flex:0.7,flexDirection:'column',margin:10,justifyContent:'center'}}>
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
        <Text numberOfLines={1} style={{fontSize:14,fontWeight:'700',color:styleFrom.Indigo,marginLeft:Platform.OS === 'ios'?10:0}}>Facial</Text>
       <Text style={{fontSize:12,fontWeight:'700',color:styleFrom.Indigo,}}>Order ID:5214796</Text>
       
        </View>
       <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
            <Text style={styles.descTextStyle}>1 hr</Text>
        </View>
        <View style={styles.descView}>
            <SmallCircle color={styleFrom.iconColor} />
             <Text style={styles.descTextStyle}>Includes dummy info</Text>
        </View>
      </View>
    </View>
  );
};
