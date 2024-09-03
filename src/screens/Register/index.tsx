import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../../common/components/Header';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import translate, {configureLanguage} from '../../utils/i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import styles from './styles';
import Button from '../../common/components/Button';
import styleFrom from '../../assets/styles/styles';
import TextCustom from '../../common/components/TextWrapper';
import TextinputComponents from '../../common/components/TextInputComponents';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {lastname} from '../../utils/global/constants';
import { setAppLoader } from '../../redux/Reducer/AppLoader';
import { Spinner } from '../../assets/Spinner';

const Register = props => {
  const navigateToLogin = () => props.navigation.navigate('Login');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);
  const [registrationDetails, setregistrationDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone_no: '',
    country: '',
    city: '',
    password: '',
    confirmpassword: '',
    pin: '',
    confirmpin: '',
  });
  
  const [show, setShow] = useState(true);
  const [isActiveRemeber, setActiveRemember] = useState(false);
  const [activeRemeber, setactiveRemember] = useState(false);
  const [showText, setshowText] = useState(false);
  const [show1, setShow1] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [reEnterPasswordReg, setReEnterPasswordReg] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, setDialcode] = useState('');
 

  const signUpMethod = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(firstName)) {
      global.functions.ShowAlert(
        translate('register.entername'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(lastName)) {
      global.functions.ShowAlert(
        translate('register.lastname'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(emailLogin)) {
      global.functions.ShowAlert(global.const.email, global.const.warning);
    } else if (global.functions.ValidateEmail(emailLogin)) {
      global.functions.ShowAlert(
        translate('register.validmail'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(phoneNumber)) {
      global.functions.ShowAlert(
        translate('register.enterphoneNumber'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(country)) {
      global.functions.ShowAlert(
        translate('register.validatecountry'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(city)) {
      global.functions.ShowAlert(
        translate('register.validatecity'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(passwordRegister)) {
      global.functions.ShowAlert(
        translate('register.enterpassword'),
        global.const.warning,
      );
    } else if (global.functions.PasswordValidate(passwordRegister)) {
      setshowText(!showText);
    } else if (global.functions.isNullOrEmpty(reEnterPasswordReg)) {
      global.functions.ShowAlert(
        translate('register.confirmpassword'),
        global.const.warning,
      );
    } else if (passwordRegister !== reEnterPasswordReg) {
      global.functions.ShowAlert(
        translate('register.passwordsamealert'),
        global.const.warning,
      );
    } else if (isActiveRemeber !== true) {
      global.functions.ShowAlert(
        translate('register.selfdeclare'),
        global.const.warning,
      );
    } else if (activeRemeber !== true) {
      global.functions.ShowAlert(
        translate('register.accept'),
        global.const.warning,
      );
    } else {
      let params = {
        password: passwordRegister,
        phone_number: dialcode+phoneNumber,
        city: city,
        email: emailLogin,
        last_name: lastname,
        first_name: firstName,
        country: country,
        action: 'User',
      };
      dispatch(setAppLoader(true));
      dispatch(global.actions.registerCall(params, props));
    }
  };
  const onChangeNumber = ({dialCode, phoneNumber}: any) => {
    setDialcode(dialCode);
    const num = dialCode + phoneNumber;
    registrationDetails['phoneNo'] = phoneNumber;
    setregistrationDetails({...registrationDetails});
    setPhoneNumber(phoneNumber);
  };

  const labelTextArray = {
    firstname: translate('login.firstName'),
    lastname: translate('login.lastName'),
    email: translate('login.EMAILPlaceholders'),
    phone_no: translate('login.phoneNumber'),
    country: translate('login.country'),
    city: translate('login.city'),
    password: translate('login.PASSWORDPlaceholders'),
    confirmpassword: translate('login.confirmPassword'),
  };

  const secureplaceholder = {
    password: translate('login.PASSWORDPlaceholders'),
    confirmpassword: translate('login.confirmPassword'),
  };

  const placeholder = {
    firstname: translate('login.firstName'),
    lastname: translate('login.lastName'),
    email: translate('login.EMAILPlaceholders'),
    phone_no: translate('login.phoneNumber'),
    country: translate('login.country'),
    city: translate('login.city'),
  };

  return (
    <SafeAreaView style={styles.screen}>
       {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <AppHeader onLeftIconClick={() => props.navigation.navigate('Login')} />
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <KeyboardAvoidingView
        behavior="height"
        style={[styles.flexOne]}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <TextCustom
            fontSize={32}
            color={styleFrom.black}
            fontWeight="600"
            marginBottom={10}>
            {translate('login.headerSignup')}
          </TextCustom>

          {Object.keys(registrationDetails).map((item, index) => {
            return (
              <TextinputComponents
                headerTitle={labelTextArray[item]}
                securePlaceHolder={secureplaceholder[item]}
                placeholder={placeholder[item]}
                phoneNumberValue={index == [3] ? phoneNumber : null}
                onChangePhonenum={index == [3] ? onChangeNumber : null}
                phoneip={index == [3] ? true : false}
                secureText={index == [6] || index == [7] ? true : false}
                inputText={
                  index == [0] ||
                  index == [1] ||
                  index == [2] ||
                  index == [4] ||
                  index == [5]
                    ? true
                    : false
                }
                text={index == [6] ? showText : false}
                visible={index == [6] ? show : index == [7] ? show1 : null}
                secureValue={
                  index == [6]
                    ? passwordRegister
                    : index == [7]
                    ? reEnterPasswordReg
                    : null
                }
                textInputValue={
                  index == [0]
                    ? firstName
                    : index == [1]
                    ? lastName
                    : index == [2]
                    ? emailLogin
                    : index == [4]
                    ? country
                    : index == [5]
                    ? city
                    : null
                }
                onPress={
                  index == [6]
                    ? () => setShow(!show)
                    : index == [7]
                    ? () => setShow1(!show1)
                    : null
                }
                //maxLength={(index == [6]&&index == [7])||(index == [8]||index == [9] )? 4:8}
                secureTextEntry={
                  index == [6] ? show : index == [7] ? show1 : false
                }
                secureChangeText={
                  index == [6]
                    ? (text: string) => setPasswordRegister(text)
                    : index == [7]
                    ? (text: string) => setReEnterPasswordReg(text)
                    : null
                }
                onchangeText={
                  index == [0]
                    ? (text: string) =>
                        setFirstName(text.replace(/[^A-Z,^a-z]/g, ''))
                    : index == [1]
                    ? (text: string) =>
                        setLastName(text.replace(/[^A-Z,^a-z]/g, ''))
                    : index == [2]
                    ? (text: string) => setEmailLogin(text)
                    : index == [4]
                    ? (text: string) =>
                        setCountry(text.replace(/[^A-Z,^a-z]/g, ''))
                    : index == [5]
                    ? (text: string) =>
                        setCity(text.replace(/[^A-Z,^a-z]/g, ''))
                    : null
                }
              />
            );
          })}
          <View style={{bottom: '5%'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {isActiveRemeber ? (
                  <Icon
                    onPress={() => (
                      setActiveRemember(!isActiveRemeber),
                      setactiveRemember(activeRemeber)
                    )}
                    name={'checkbox'}
                    size={18}
                    color={styleFrom.black}
                    style={{borderRadius: 8.5, overflow: 'hidden'}}
                  />
                ) : (
                  <Icons
                    onPress={() => (
                      setActiveRemember(!isActiveRemeber),
                      setactiveRemember(activeRemeber)
                    )}
                    name={'controller-stop'}
                    size={15}
                    style={{
                      borderRadius: 3,
                      backgroundColor: '#c2c2c2',
                      overflow: 'hidden',
                    }}
                    color={'#c2c2c2'}
                  />
                )}
              </View>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  color: '#9A9FA5',
                  paddingTop: '1.5%',
                }}>
                {' '}
                {translate('login.confirminfo')}
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {activeRemeber ? (
                  <Icon
                    onPress={() => (
                      setactiveRemember(!activeRemeber),
                      setActiveRemember(isActiveRemeber)
                    )}
                    name={'checkbox'}
                    size={18}
                    color={styleFrom.black}
                    style={{borderRadius: 8.5, overflow: 'hidden'}}
                  />
                ) : (
                  <Icons
                    onPress={() => (
                      setactiveRemember(!activeRemeber),
                      setActiveRemember(isActiveRemeber)
                    )}
                    name={'controller-stop'}
                    size={15}
                    style={{
                      borderRadius: 3,
                      backgroundColor: '#c2c2c2',
                      overflow: 'hidden',
                    }}
                    color={'#c2c2c2'}
                  />
                )}
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('TermsandCondition')}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 10,
                    color: '#9A9FA5',
                    paddingTop: '1.5%',
                  }}>
                  {' '}
                  {translate('login.termsconditions')}
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              label={translate('login.register')}
              disabled={
                firstName &&
                lastName &&
                emailLogin &&
                phoneNumber &&
                country &&
                city &&
                passwordRegister &&
                reEnterPasswordReg &&
                isActiveRemeber &&
                activeRemeber
                  ? false
                  : true
              }
              round={false}
              style={{
                width: '100%',
                height: 45,
                alignSelf: 'center',
                borderRadius: 6,
                padding: 0,
                marginTop: 20,
                fontWeight: '600',
                backgroundColor:
                  firstName &&
                  lastName &&
                  emailLogin &&
                  phoneNumber &&
                  country &&
                  city &&
                  passwordRegister &&
                  reEnterPasswordReg &&
                  isActiveRemeber &&
                  activeRemeber
                    ? styleFrom.black
                    : '#EFEFEF',
              }}
              labelStyle={styles.labelText}
              onPress={() => signUpMethod()}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 25,
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  color: styleFrom.darkGrey,
                  textAlign: 'center',
                }}>
                {translate('login.alreadyAccount')}
              </Text>
              <Text
                onPress={() => navigateToLogin()}
                style={{
                  fontSize: 13,
                  color: styleFrom.navyBlue,
                  marginLeft: 5,
                  color: '#000',
                  fontWeight: '700',
                }}>
                {translate('login.LOGINFORM_BUTTON')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Register;