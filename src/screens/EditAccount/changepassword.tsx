import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import translate from '../../utils/i18n';
import styles from '../Profile/styles';
import Button from '../../common/components/Button';
import styleFrom from '../../assets/styles/styles';
import TextinputComponents from '../../common/components/TextInputComponents';
import {AuthHeader} from '../../common/components/Header/authheader';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner} from '../../assets/Spinner';

export const ChangePassword = props => {
  const {isFromForgot} = props?.route?.params;

  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [text, setshowtext] = useState(false);
  const [newpassword, setnewpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const loginData = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails,
  );
  const passworddata = useSelector(
    (state: RootState) => state?.root?.auth?.passwordData,
  );

  if (passworddata.status === 'success') {
    global.functions.ShowAlert(passworddata.message, global.const.success);
    dispatch({type: 'USER_LOGOUT'});
    AsyncStorage.clear();
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 1000);
  }

  const secureText = () => {
    setEye(!eye);
  };

  const secureText1 = () => {
    setEye1(!eye1);
  };

  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(newpassword)) {
      global.functions.ShowAlert(
        translate('changepassword.newpassword'),
        global.const.warning,
      );
    } else if (newpassword.length < 8) {
      global.functions.ShowAlert(
        translate('changepassword.fourdigitnewpassword'),
        global.const.warning,
      );
    } else if (global.functions.PasswordValidate(newpassword)) {
      setshowtext(true);
    } else if (global.functions.isNullOrEmpty(confirmpassword)) {
      global.functions.ShowAlert(
        translate('changepassword.confirmpassword'),
        global.const.warning,
      );
    } else if (confirmpassword.length < 8) {
      global.functions.ShowAlert(
        translate('changepassword.fourdigitconfirmpassword'),
        global.const.warning,
      );
    } else if (newpassword != confirmpassword) {
      global.functions.ShowAlert(
        translate('changepassword.passwordalert'),
        global.const.warning,
      );
    } else {
      props.navigation.navigate('SuccessScreen', {
        isFromchangePassword: 'True',
      });
    }
  };
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}

      <AuthHeader
        label={translate('changepassword.createnewpassowrd')}
        onPress={() => props.navigation.goBack()}
      />
      <Pressable style={{flex: 1}} onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          <TextinputComponents
            onPress={() => setShow(!show)}
            keyboardType="default"
            secureTextEntry={show}
            secureText={secureText}
            secureValue={newpassword}
            securePlaceHolder={translate(
              'changepassword.newpasswordPlaceHolder',
            )}
            maxLength={10}
            visible={show}
            secureChangeText={(text: string) => setnewpassword(text)}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {text && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 8,
                }}>
                <Text
                  style={{
                    flex: 0.98,
                    color: '#6B7280',
                    fontWeight: '400',
                    fontSize: 13,
                  }}>
                  Password should contain minimum of 8 letters, uppercase,
                  lowercase, numeric, and special characters.
                </Text>
                <Image
                  source={require('../../assets/image/iicon.png')}
                  style={{height: 20, width: 20}}
                />
              </View>
            )}
          </View>
          <TextinputComponents
            onPress={() => setShow1(!show1)}
            keyboardType="default"
            secureTextEntry={show1}
            secureText={secureText1}
            secureValue={confirmpassword}
            securePlaceHolder={translate('login.confirmPassword')}
            maxLength={10}
            visible={show1}
            secureChangeText={(text: string) => setconfirmpassword(text)}
          />
        </View>

        {/* <View style={Styles.buttoncover}> */}
        <Button
          label={translate('changepassword.Submit')}
          onPress={() => _onHandlerPress()}
          round={false}
          style={Styles.buttonText}
          labelStyle={styles.labelText}
        />
        {/* </View> */}
      </Pressable>
    </SafeAreaView>
  );
};
const Styles = {
  container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  buttoncover: {
    flex: 0.4,
    borderWidth: 1,
    alignSelf: 'center',
    width: '95%',
    backgroundColor: styleFrom.white,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 6,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: styleFrom.black,
  },
};
