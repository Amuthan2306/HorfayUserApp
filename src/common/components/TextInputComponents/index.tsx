import React from 'react';
import {Animated, TouchableOpacity, View,Image,Dimensions,Text} from 'react-native';
import TextCustom from '../TextWrapper';
import InputText from '../InputText';
import PhoneInput from '../../components/PhoneInput';
import styles from './styles';
import styleFrom from '../../../assets/styles/styles';
import images from '../ImageAssets';
const height = Dimensions.get("screen").height;

interface TextInputProps {
  textInputValue: any;
  onchangeText: any;
  placeholder: any;
  headerTitle: any;
  onChangePhonenum: any;
  phoneNumberValue: any;
  phoneip: any;
  secureText: any;
  inputText: any;
  secureValue: any;
  secureChangeText: any;
  securePlaceHolder: any;
  visible:any;
  onPress:any;
  secureTextEntry:any
  keyboardType:any
  maxLength:any
  text:any
}

const TextInput = ({
  textInputValue,
  onchangeText,
  placeholder,
  headerTitle,
  onChangePhonenum,
  phoneNumberValue,
  phoneip,
  secureText,
  inputText,
  secureValue,
  secureChangeText,
  visible,
  securePlaceHolder,
  onPress,
  secureTextEntry,
  keyboardType,
  maxLength,
  text
}: TextInputProps) => {

  return (
    <View>
      <TextCustom
       fontSize={15}
       color={styleFrom.lightBlack}
       fontWeight='600'
       marginTop={10}>
       {headerTitle}
     </TextCustom>
     
    {inputText &&   
    <View style={styles.textInputView}>
     <InputText
        value={textInputValue}
        onChangeText={onchangeText}
        placeHolder={placeholder}
        keyboardType={keyboardType}
        maxLength={maxLength}
        inputTextStyle={{ padding: 10 }}
     />
    </View>}
   
    {secureText &&  
    <View style={styles.textInputView}>
       <InputText
        value={secureValue}
        onChangeText={secureChangeText}
        placeHolder={securePlaceHolder}
        maxLength={50}
        inputTextStyle={{ padding: 10 }}
        secureTextEntry={secureTextEntry}
       />
        <TouchableOpacity
                    onPress={onPress}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 13,
                    }}
                  >
       {visible == true ? (
                      <Image
                        source={images.eyeclose}
                        style={{
                          height: (height / 100) * 2.5,
                          width: (height / 100) * 2.5,
                          resizeMode: "contain",
                        }}
                      />
                    ) : (
                      <Image
                        source={images.eyeon}
                        style={{
                          height: (height / 100) * 2.5,
                          width: (height / 100) * 2.5,
                          resizeMode: "contain",
                        }}
                      />
                    )}
                    </TouchableOpacity>
    </View>}
    {text && 
               <View
               style={{
                 flexDirection: 'row',
                 alignItems: 'center',
                 marginLeft:8
               }}>
                <Text style={{flex:0.98,color:'#6B7280',fontWeight:'400',fontSize:13}}>
                Password should contain minimum of 8 letters, uppercase,
                lowercase, numeric, and special characters.
                </Text>
                <Image
              source={require('../../../assets/image/iicon.png')}
              style={{height: 20, width: 20}}
              />
                </View>
              }
    {phoneip && 
    <PhoneInput
        container={styles.container}
        name="Phone Number"
        value={phoneNumberValue}
        keyboardType="numeric"
        nameColor={styles.textcolor}
        secureTextEntry={false}
        onChangeNumber={onChangePhonenum}
    />}
    </View>
    
  )
};
export default TextInput;


