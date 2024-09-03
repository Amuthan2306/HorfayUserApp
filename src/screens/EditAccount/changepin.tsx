import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import {AppHeader} from '../../common/components/Header';
import translate from '../../utils/i18n';
import InputText from '../../common/components/InputText';
import styles from '../Profile/styles';
import Button from '../../common/components/Button';
import styleFrom from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/Entypo';
import TextInputComponents from '../../common/components/TextInputComponents';
export const ChangePin = props => {
  const [newpin, setnewpin] = useState('');
  const [confirmpin, setconfirmpin] = useState('');
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);

  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(newpin)) {
      global.functions.ShowAlert(
        translate('changepin.newpin'),
        global.const.warning,
      );
 
    } else if (newpin.length != 4) {
      global.functions.ShowAlert(
        translate('changepin.fourdigitnewpin'),
        global.const.warning,
      );
   
    } else if (global.functions.isNullOrEmpty(confirmpin)) {
      global.functions.ShowAlert(
        translate('changepin.confirmpin'),
        global.const.warning,
      );
      
    } else if (confirmpin.length != 4) {
      global.functions.ShowAlert(
        translate('changepin.fourdigitconfirmpin'),
        global.const.warning,
      );
      
    } else if (newpin != confirmpin) {
      global.functions.ShowAlert(
        translate('changepin.pinalert'),
        global.const.warning,
      );
    
    }
    props.navigation.navigate('PinSuccessScreen', {pinsuccess: 'Pin'});
  };

  const secureText = () => {
    setEye(!eye);
  };

  const secureText1 = () => {
    setEye1(!eye1);
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: styleFrom.white}}>
      <View style={Styles.header_view}>
      <TouchableOpacity style={{backgroundColor: styleFrom.white}} onPress={()=>props.navigation.navigate('Login')}>
        <Icon name="chevron-left" size={30} color={styleFrom.black} />
        </TouchableOpacity>
        <Text style={Styles.password_text}>Create New Pin</Text>
      </View>

      <View style={Styles.container}>
      

        <TextInputComponents
          onPress={() => setShow(!show)}
          keyboardType="default"
          secureTextEntry={show}
          secureText={secureText}
          secureValue={newpin}
          securePlaceHolder={translate('changepin.newpinPlaceHolder')}
          maxLength={4}
          visible={show}
          secureChangeText={(text: string) => setnewpin(text)}
        />

        <TextInputComponents
          onPress={() => setShow1(!show1)}
          keyboardType="default"
          secureTextEntry={show1}
          secureText={secureText1}
          secureValue={confirmpin}
          securePlaceHolder={translate('changepin.confirmpinPlaceHolder')}
          maxLength={4}
          visible={show1}
          secureChangeText={(text: string) => setconfirmpin(text)}
        />
      </View>
      <View style={Styles.buttoncover}>
        <Button
          label={translate('changepin.submit')}
          onPress={() => _onHandlerPress()}
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
    
    width: '50%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

  buttoncover: {
    flex: 0.1,
    marginTop:30,
    width: '95%',
    justifyContent: 'center',
    backgroundColor: styleFrom.white,
  },
  buttonText: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    fontWeight: '600',
    backgroundColor: styleFrom.black,
  },
  header_view: {
    // borderWidth: 1,
    width: '95%',
    height: '12%',
    alignItems: 'center',
    // justifyContent:'center',
    flexDirection: 'row',
  },
  backicon: {
    fontSize: 20,
    fontWeight: '700',
    color: styleFrom.black,
  },
  password_text: {
    fontSize: 20,
    fontWeight: '700',
    color: styleFrom.black,
    paddingLeft: 70,
  },
  faqView: {
    width: 360,
    height: 47,
    backgroundColor: '#F9FAFB',
    marginTop: 10,
    borderRadius: 10,
    padding: 8,
    marginBottom: 26,
  },
});
