import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
  Pressable
} from 'react-native';
import translate from '../../utils/i18n';
import InputText from '../../common/components/InputText';
import styles from './styles';
import Button from '../../common/components/Button';
import TextCustom from '../../common/components/TextWrapper';
import styleFrom from '../../assets/styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import TextInputComponent from '../../common/components/TextInputComponents';
import PhoneInput from '../../common/components/PhoneInput';
import {useNavigation} from '@react-navigation/native';
import { Spinner } from '../../assets/Spinner';
import { setAppLoader } from '../../redux/Reducer/AppLoader';

const Login = props => {
  const dispatch = useDispatch();
  const navigateForgotPassword = () =>
    props.navigation.navigate('ForgotPassword');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [isActiveRemeber, setActiveRemember] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, setDialcode] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const [show, setShow] = useState(true);
  const navigation = useNavigation();
  const [eye, setEye] = useState(true);
  
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);
  
  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(phoneNumber)) {
      global.functions.ShowAlert(
        translate('login.phoneNumbervalidate'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(passwordLogin)) {
      global.functions.ShowAlert(
        translate('login.password'),
        global.const.warning,
      );
      
    } else if (global.functions.PasswordValidate(passwordLogin)) {
      global.functions.ShowAlert(
        translate('login.passwordvaild'),
        global.const.warning,
      );
  
    } else if (passwordLogin.length < 8) {
      global.functions.ShowAlert(
        translate('login.passwordcondtion'),
        global.const.warning,
      );
    } else {
      const params = {
        phone_number:dialcode + phoneNumber,
        password: passwordLogin,
      };
      dispatch(setAppLoader(true));
      dispatch(global.actions.loginCall(params,props));
    }
  };

  const onChangeNumber = ({dialCode, phoneNumber}: any) => {
    setDialcode(dialCode);
    const num = dialCode + phoneNumber;
    setPhoneNumber(phoneNumber);
  };

  const secureText = () => {
    setEye(!eye);
  };

  return (
    <SafeAreaView style={styles.screen}>
        {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="height"
        style={[styles.flexOne]}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TextCustom
          fontSize={32}
          color={styleFrom.headerColor}
          marginBottom={18}
          fontWeight="600">
          {translate('login.LOGINFORM_BUTTON')}
        </TextCustom>

        <TextCustom
          fontSize={15}
          color={styleFrom.headerColor}
          fontWeight="600"
          marginTop={10}
          marginBottom={10}>
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

        <TextInputComponent
          headerTitle={translate('login.PASSWORDPlaceholders')}
          onPress={() => setShow(!show)}
          keyboardType="default"
          secureTextEntry={show}
          secureText={secureText}
          nameColor={styles.textcolor}
          secureValue={passwordLogin}
          securePlaceHolder={translate('login.PASSWORDPlaceholders')}
          maxLength={14}
          visible={show}
          secureChangeText={(text: string) => setPasswordLogin(text)}
        />

        <View style={styles.forgotPasswordView}>
          <View
            style={{
              marginLeft: 5,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 35,
                height: 35,
                // borderWidth:1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isActiveRemeber ? (
                <Icon
                  onPress={() => setActiveRemember(!isActiveRemeber)}
                  name={'checkbox'}
                  size={28}
                  color="black"
                />
              ) : (
                <EntypoIcons
                  onPress={() => setActiveRemember(!isActiveRemeber)}
                  name={'controller-stop'}
                  style={{
                    borderRadius: 5,
                    backgroundColor: '#c2c2c2',
                    overflow: 'hidden',
                  }}
                  size={24}
                  color={'#c2c2c2'}
                />
              )}
            </View>
            <TextCustom
              fontSize={12}
              color={styleFrom.grey}
              fontWeight="600"
              marginLeft={5}>
              {translate('login.rememberMe')}
            </TextCustom>
          </View>
          <View style={{marginRight: 10}}>
            <TextCustom
              fontSize={12}
              color={styleFrom.linkColor}
              fontWeight="500"
              onPress={() => navigateForgotPassword()}>
              {translate('login.FORGOTPASS_LINK')}
            </TextCustom>
          </View>
        </View>
        <Button
          label={translate('login.LOGINFORM_BUTTON')}
          disabled={phoneNumber && passwordLogin ? false : true}
          round={false}
          style={{
            width: '100%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 6,
            padding: 0,
            marginTop: 20,
            fontWeight: '600',
            backgroundColor: phoneNumber && passwordLogin ? styleFrom.black : '#EFEFEF',
          }}
          labelStyle={{
            fontSize: 14,
            color: phoneNumber && passwordLogin ? styleFrom.white : styleFrom.black,
            fontWeight: '600',
          }}
          onPress={() => {
            _onHandlerPress();
          } }        />
      </KeyboardAvoidingView>
      </Pressable>

      <Text
        onPress={() => navigation.navigate('Signup')}
        style={styles.bottomText}>
        {translate('login.createAccount')}
        <Text style={styles.linkingText}>
          {' '}
          {translate('login.registerText')}
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default Login;
