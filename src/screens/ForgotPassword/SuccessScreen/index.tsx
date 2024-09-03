import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import translate from '../../../utils/i18n';
import styles from '../styles';
import Button from '../../../common/components/Button';
import TextCustom from '../../../common/components/TextWrapper';
import styleFrom from '../../../assets/styles/styles';
import {useNavigation} from '@react-navigation/native';
import {LottieAnimations} from '../../../common/components/LottieAnimations';
import succesJson from '../../../assets/lottieJSON/success.json';
const SuccessScreen = props => {
  const navigation = useNavigation();
  const {isFromchangePassword} = props?.route?.params;
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <KeyboardAvoidingView
        behavior="height"
        style={[styles.flextwo]}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <TextCustom
          fontSize={30}
          color={styleFrom.linkColor}
          fontWeight="700"
          align="center">
          {translate('login.successText')}
        </TextCustom>
        <View style={{alignItems: 'center'}}>
          {isFromchangePassword === 'True' ? (
            <TextCustom
              fontSize={12}
              color={styleFrom.lightblue}
              fontWeight="400"
              align="center"
              marginTop={11}
              marginBottom={25}
              width="80%">
              {
                'Your password has been updated, please change your password regularly to avoid this happening'
              }
            </TextCustom>
          ) : (
            <TextCustom
              fontSize={12}
              color={styleFrom.lightblue}
              fontWeight="400"
              align="center"
              marginTop={11}
              marginBottom={25}>
              {'Your password has been updated'}
            </TextCustom>
          )}
        </View>

        <Image
          source={require('../../../assets/png/successNew.png')}
          style={styles.successImg}
        />
        {/* <LottieAnimations
                        animationJson={succesJson}
                        lottieStyle={styles.lottieAnimStyle}
                        autoPlayProp={true} /> */}
        <View
          style={{borderWidth: 0, height: '30%', justifyContent: 'flex-end'}}>
          <Button
            label={translate('login.continue')}
            round={false}
            style={styles.buttonText2}
            labelStyle={styles.labelText}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SuccessScreen;
