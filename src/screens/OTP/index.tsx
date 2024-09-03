import React, {useState, useRef, useEffect} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Pressable, Dimensions, Keyboard, StatusBar, Alert} from 'react-native';
import OTPInput from '../../common/components/OTPInput';
import {
  ButtonContainer,
  ButtonText,
} from '../../common/components/OTPInput/styles';
import styles from './styles';
import TextCustom from '../../common/components/TextWrapper';
import translate from '../../utils/i18n';
import styleFrom from '../../assets/styles/styles';
import {AppHeader} from '../../common/components/Header';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../common/components/Button';

export default function OTP({route, navigation}) {
  const {isFromForgot} = route?.params;
  const isFocused = useIsFocused();
  const [otpCode, setOTPCode] = useState('');
  const [counter, setCounter] = useState(20);
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  function Interval() {
    setTimeout(() => {
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    }, 1000);
  }

  useEffect(() => {
    isFocused ? Interval() : null;
  }, [counter]);

  const navigationTo = () => {
    if (isFromForgot == 'true') {
      navigation.navigate('ChangePassword', {isFromForgot: 'true'});
    } else if (!isPinReady) {
      null;
    } else if (isFromForgot === false && isPinReady) {
      navigation.navigate('ChangePin');
    }
  };

  return (
    <>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
        <TouchableOpacity
          style={{
            flex: 0.2,
            width: '100%',
            marginLeft: 35,
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color={'#000'} />
        </TouchableOpacity>
        <View style={{flex: 0.2}} />
        <View style={{width: '80%', height: '16%', flex: 0.2}}>
          <TextCustom
            fontSize={30}
            color={styleFrom.black}
            fontWeight="700"
            marginBottom={15}
            // marginLeft={27}
          >
            {translate('login.enterOTP')}
          </TextCustom>

          <TextCustom
            fontSize={14}
            color={'#535763'}
            fontWeight="500"
            marginBottom={60}
          >
            {translate('login.verifyotpText')}
          </TextCustom>
        </View>
        <OTPInput
          code={otpCode}
          setCode={setOTPCode}
          maximumLength={maximumCodeLength}
          setIsPinReady={setIsPinReady}
        />

        <Button
          label={translate('login.continue')}
          disabled={isPinReady ? false : true}
          round={false}
          style={{
            width: '82%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 12,
            padding: 0,
            marginTop: 20,
            fontWeight: '600',
            backgroundColor: !isPinReady ? '#F5F5F5' : '#000000',
          }}
          labelStyle={{
            fontSize: 14,
            color: !isPinReady ? 'black' : '#EEEEEE',
            fontWeight: '600',
          }}
          onPress={() => {
            navigationTo();
          }}
        />

        {/* <ButtonContainer
          disabled={
            !isPinReady
              ? null
              : isFromForgot == 'true'
              ? navigation.navigate('ChangePassword', {isFromForgot: 'true'})
              : navigation.navigate('ChangePin')
          }
          style={{
            backgroundColor: !isPinReady ? '#F5F5F5' : '#000000',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <ButtonText
            style={{
              color: !isPinReady ? 'black' : '#EEEEEE',
            }}>
            {translate('login.continue')}
          </ButtonText>
        </ButtonContainer> */}
        {counter === 0 ? (
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20, flex: 0.45}}
            onPress={() => setCounter(20)}>
            <Text style={{fontWeight: '500', fontSize: 16, color: '#010101'}}>
              {translate('login.resendcode')}{' '}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20, flex: 0.45}}>
            <Text style={{fontWeight: '500', fontSize: 16, color: '#010101'}}>
              {translate('login.resendcode2') + counter}{' '}
            </Text>
          </TouchableOpacity>
        )}
      </Pressable>
    </>
  );
}
