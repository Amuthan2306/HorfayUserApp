import React, {useState, useRef} from 'react';
import {
  View,
  Keyboard,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  Pressable,
  TouchableOpacity
} from 'react-native';
import PhoneInput from '../../common/components/PhoneInput';
import translate from '../../utils/i18n';
import styles from './styles';
import Button from '../../common/components/Button';
import TextCustom from '../../common/components/TextWrapper';
import styleFrom from '../../assets/styles/styles';
import ForgotPasswprdSVG from '../../assets/svg/Dashboard/forgotPassword.svg';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPassword = props => {
  const navigation = useNavigation();
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, setDialcode] = useState('');

  const onChangeNumber = ({dialCode, phoneNumber}: any) => {
    setDialcode(dialCode);
    const num = dialCode + phoneNumber;
    setPhoneNumber(phoneNumber);
  };

  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(phoneNumber)) {
      global.functions.ShowAlert(
        'Please Enter Phone Number',
        global.const.warning,
      );
    }else {
      navigation.navigate('Otp', {isFromForgot: 'true'});
    }
   
  };
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="height"
        style={[styles.flexOne]}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TouchableOpacity
          style={{
            flex: 0.2,
            width: '100%',
            //marginTop: 35,
            justifyContent: 'center',
            marginBottom:10
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={'#000'} />
        </TouchableOpacity>

        <TextCustom
          fontSize={30}
          color={styleFrom.linkColor}
          fontWeight="700"
          align="center">
          {translate('login.FORGOTPASS_LINK')}
        </TextCustom>

        <TextCustom
          fontSize={12}
          color={styleFrom.lightBlack}
          fontWeight="400"
          align="center"
          marginTop={11}>
          {translate('login.forgotPasswordText')}
        </TextCustom>

        <ForgotPasswprdSVG
          width={110}
          height={90}
          style={{marginTop: 52, justifyContent: 'center', alignSelf: 'center'}}
        />

        <TextCustom
          fontSize={15}
          color={styleFrom.lightBlack}
          fontWeight="600"
          marginTop={10}
          marginBottom={8}>
          {translate('login.phoneNumber')}
        </TextCustom>

        <PhoneInput
          container={styles.container}
          name="Phone Number"
          value={phoneNumber}
          keyboardType="numeric"
          nameColor={styles.textcolor}
          secureTextEntry={false}
          onChangeNumber={(text: any) => onChangeNumber(text)}
        />

        <Button
          label={translate('login.resetPassword')}
          round={false}
          style={styles.buttonText}
          labelStyle={styles.labelText}
          onPress={() => _onHandlerPress()}
          color={''}
          size={''}
          buttonStatus={false}
        />
      </KeyboardAvoidingView>
      </Pressable>
    </SafeAreaView>
  );
};
export default ForgotPassword;
