import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {View, Text, StyleSheet, SafeAreaView, Keyboard} from 'react-native';
import translate from '../../utils/i18n';
import styles from '../Profile/styles';
import Button from '../../common/components/Button';
import styleFrom from '../../assets/styles/styles';
import TextinputComponents from '../../common/components/TextInputComponents';
import {AuthHeader} from '../../common/components/Header/authheader';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Spinner} from '../../assets/Spinner';

export const EditAccounts = props => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const dispatch = useDispatch();
  const [currentpassword, setcurrentpassword] = useState('');
  const [newpassword, setnewpassword] = useState('');
  const [password, setpassword] = React.useState(false);
  const [confirmpassword, setconfirmpassword] = useState('');
  const [text, settext] = useState({
    currentpassword: '',
    newpassword: '',
    confirmpassword: '',
  });

  const loginData = useSelector(state => state?.root?.auth);
  const loginid = loginData?.loginDetails?.Details?.id;
  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(currentpassword)) {
      global.functions.ShowAlert(
        translate('changepassword.currentpassword'),
        global.const.warning,
      );
    } else if (currentpassword === newpassword) {
      global.functions.ShowAlert(
        translate('changepassword.condition'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(newpassword)) {
      global.functions.ShowAlert(
        translate('changepassword.newpassword'),
        global.const.warning,
      );
    } else if (global.functions.PasswordValidate(newpassword)) {
      setpassword(!password);
    } else if (global.functions.isNullOrEmpty(confirmpassword)) {
      global.functions.ShowAlert(
        translate('changepassword.confirmpassword'),
        global.const.warning,
      );
    } else if (newpassword !== confirmpassword) {
      global.functions.ShowAlert(
        translate('changepassword.passwordalert'),
        global.const.warning,
      );
    } else if (global.functions.PasswordValidate(newpassword)) {
      setpassword(!password);
    } else {
      const params = {
        id: loginid,
        old_password: currentpassword,
        password: newpassword,
      };
      dispatch(global.actions.changepasswordCall(params, props));
    }
  };
  const placeholder = {
    currentpassword: 'Current Password',
    newpassword: 'New Password',
    confirmpassword: 'Confirm Password',
  };
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: styleFrom.white}}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <AuthHeader
        label={translate('changepassword.createpassword')}
        onPress={() => props.navigation.goBack()}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.container}>
          {Object.keys(text).map((item, index) => {
            return (
              <TextinputComponents
                securePlaceHolder={placeholder[item]}
                secureText={
                  index == [0] || index == [1] || index == [2] ? true : false
                }
                secureValue={
                  index == [0]
                    ? currentpassword
                    : index == [1]
                    ? newpassword
                    : index == [2]
                    ? confirmpassword
                    : null
                }
                secureChangeText={
                  index == [0]
                    ? (text: string) => setcurrentpassword(text)
                    : index == [1]
                    ? (text: string) => setnewpassword(text)
                    : index == [2]
                    ? (text: string) => setconfirmpassword(text)
                    : null
                }
                visible={
                  index == [0]
                    ? show
                    : index == [1]
                    ? show1
                    : index == [2]
                    ? show2
                    : null
                }
                secureTextEntry={
                  index == [0]
                    ? show
                    : index == [1]
                    ? show1
                    : index == [2]
                    ? show2
                    : false
                }
                onPress={
                  index == [0]
                    ? () => setShow(!show)
                    : index == [1]
                    ? () => setShow1(!show1)
                    : index == [2]
                    ? () => setShow2(!show2)
                    : null
                }
              />
            );
          })}
          {password ? (
            <View style={Styles.password_vaild}>
              <View style={{borderWidth: 0, width: 290}}>
                <Text style={Styles.password_text}>
                  Password should contain a minimum of 8 letters{'\n'}One
                  uppercase(A-Z), One lowercase(a-z){'\n'}One numeri(0-9), One
                  special characters(@,#.&/)
                </Text>
              </View>
              <Icons name="alert-circle" size={30} color={styleFrom.red} />
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
      <View style={Styles.buttoncover}>
        <Button
          label={translate('changepassword.submit')}
          onPress={() => {
            _onHandlerPress();
          }}
          round={false}
          style={Styles.buttonText}
          labelStyle={styles.labelText}
        />
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  buttoncover: {
    position: 'absolute',
    bottom: 25,
    width: '95%',
    backgroundColor: styleFrom.white,
    justifyContent: 'flex-end',
  },
  buttonText: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    fontWeight: '600',
    backgroundColor: styleFrom.black,
  },
  password_text: {
    fontSize: 13,
    fontWeight: '500',
    color: styleFrom.lightblue,
  },
  password_vaild: {
    //borderWidth:1,
    flexDirection: 'row',
    width: 330,
    justifyContent: 'space-between',
  },
});
