import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  Image,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
  TextInput,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styleFrom from '../../assets/styles/styles';
import {RadioButton} from 'react-native-paper';
import Button from '../../common/components/Button';
import translate from '../../utils/i18n';
import images from '../../common/components/ImageAssets';
import {AppHeader} from '../../common/components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthHeader} from '../../common/components/Header/authheader';
import {addresslist} from '../../common/ConstantList';
import CreditCard from 'react-native-credit-card';
import TextinputComponents from '../../common/components/TextInputComponents';
import { useSelector } from 'react-redux';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Debitcard() {
  const [card, setCard] = useState({
    cardholdername: '',
    cardnumber: '',
  });
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  const [isFocused, setIsFocused] = useState(true);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [cvv, setCvv] = useState('');

  const placeholder = {
    cardholdername: 'Card Holder name',
    cardnumber: 'Card Number',
  };

  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(name)) {
      global.functions.ShowAlert(
        translate('login.cardname'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(number)) {
      global.functions.ShowAlert(
        translate('login.cardnumber'),
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(month)) {
      global.functions.ShowAlert(
        translate('login.month'),
        global.const.warning,
      );
    }

    if (month === 'MM/YY') {
      if (text.length === 3 && text[2] != '/') {
        reg_details[name] = text[0] + text[1] + '/' + text[2];
      } else {
        reg_details[name] = text.replace(/[^0-9'/']/g, '');
      }
      setReg_details({...reg_details});
    } else if (global.functions.isNullOrEmpty(cvv)) {
      global.functions.ShowAlert(translate('login.cvv'), global.const.warning);
    } else {
      navigation.navigate('SuccessBooking');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
      <AuthHeader label={'Card'} onPress={() => navigation.goBack()} />
      <Pressable style={{flex:1,backgroundColor:'#fff'}} onPress={()=> Keyboard.dismiss()}>
      
      <View
        style={{
          flex: 0.4,
          backgroundColor: '#fff',
        }}>
        <KeyboardAwareScrollView>
          <CreditCard
            //  type={'mastercard'}
            imageFront={images.frontcard}
            style={{
              marginTop: 20,
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            imageBack={images.backcard}
            shiny={false}
            bar={false}
            focused={isFocused}
            name={name}
            number={number}
            expiry={month}
            cvc={cvv}
          />
        </KeyboardAwareScrollView>
      </View>
      <View style={{flex: 0.5, backgroundColor: '#fff'}}>
        {Object.keys(card).map((item, index) => {
          return (
            <TextinputComponents
              headerTitle={index == [0] ? 'Detail' : null}
              keyboardType={index == [0] ? 'default' : 'numeric'}
              maxLength={index == [0] ? 10 : 16}
              placeholder={placeholder[item]}
              inputText={index == [0] || index == [1] ? true : false}
              textInputValue={
                index == [0] ? name : index == [1] ? number : null
              }
              onchangeText={
                index == [0]
                  ? (text: string) =>
                      setName(
                        text.replace(/[^a-z^A-Z]/g, ''),
                        setIsFocused('name'),
                      )
                  : index == [1]
                  ? (text: string) =>
                      setNumber(
                        text.replace(/[^0-9]/g, ''),
                        setIsFocused('name'),
                      )
                  : null
              }
              //onchangeText={(text: any ) => _onChangeText(text, item)}
            />
          );
        })}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '8.5%',
          }}>
          <TextInput
            placeholder="MM/YY"
            keyboardType="numeric"
            maxLength={5}
            value={month}
            style={{
              //   borderWidth: 1,
              height: (height / 95) * 5.2,
              width: (width / 25) * 5.6,
              borderRadius: 6,
              left: 5,
              // backgroundColor: '#F5F5F5',
              color: '#000',
            }}
            // onChangeText={(text: any) => (setMonth(text), setIsFocused('name'))}
            onChangeText={(text: any) => {
              if (text.length === 3 && text[2] != '/') {
                setMonth(text[0] + text[1] + '/' + text[2]);
              } else {
                setMonth(text.replace(/[^0-9'/']/g, ''));
              }
              setIsFocused('name');
            }}
            placeholderTextColor="#9B9E9F"
          />
          <TextInput
            placeholder="CVV"
            keyboardType="numeric"
            maxLength={3}
            value={cvv}
            style={{
              //   borderWidth: 1,
              height: (height / 95) * 5.2,
              width: (width / 25) * 5.6,
              borderRadius: 8,
              left: 20,
              // backgroundColor: '#F5F5F5',
              color: '#000',
            }}
            placeholderTextColor="#9B9E9F"
            onChangeText={(text: any) => (
              setCvv(text.replace(/[^0-9'/']/g, '')), setIsFocused('cvc')
            )}
          />
        </View>
      </View>
      </Pressable>
      <View style={{flex: 0.25 , backgroundColor: '#fff'}}>
        <Button
          label={'Submit'}
          disabled={name && number && month && cvv ? false : true}
          round={false}
          style={{
            width: '90%',
            height: 45,
            alignSelf: 'center',
            borderRadius: 6,
            padding: 0,
            marginTop: 20,
            fontWeight: '600',
            backgroundColor:
              name && number && month && cvv ? styleFrom.black : '#EFEFEF',
          }}
          labelStyle={{
            fontSize: 14,
            color:
              name && number && month && cvv
                ? styleFrom.white
                : styleFrom.black,
            fontWeight: '600',
          }}
          onPress={() => {
            _onHandlerPress();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
