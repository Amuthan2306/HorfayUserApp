import React from 'react';
import {
  View
} from 'react-native';
import stylesFrom from "../../../assets/styles/styles";


 const SmallCircle = ({
   color
 })=>{
  return (
    <View style={[styles.circle,{backgroundColor:color}]}>

    </View>
  );
};
const styles= {
    circle:{ 
        width: 6, 
        height: 5, 
        borderRadius: 5 / 2, 
       // top:10
    },
}
export default SmallCircle;


