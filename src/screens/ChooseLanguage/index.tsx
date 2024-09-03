import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  View,
  Text,
  I18nManager,
  StatusBar
} from 'react-native';
import RNRestart from 'react-native-restart';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../common/components/Card';
import { changeLanguage } from '../../redux/Reducer/AuthReducer';
import translate from '../../utils/i18n';
import stylesFrom from './styles';


const ChooseLangugae =()=> {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const[activeStatus,setActiveStatus] = useState(true);
  const[isLanguage,setLanguage] = useState('en');
  const[activeStatusCardTwo,setActiveStatusCardTwo] = useState(false);
  const languageIs = useSelector(
    (state: RootState) => state?.root?.auth.languageIs,
  );

  useEffect(()=>{
   selectedLng();
   console.info("Is languageIs from redux",languageIs)
  // setLanguage(languageIs);
  },[languageIs])

  const selectedLng = async () => {
    const lngData = (await AsyncStorage.getItem('lan')) ?? '';
    console.info("Is lang as",lngData)
    if(lngData === "urdu"){
      setActiveStatusCardTwo(true)
      setActiveStatus(false)
    }
    else{
      setActiveStatus(true)
      setActiveStatusCardTwo(false)
    }
   
  }
  const languageChange = async (language: string) => {
    dispatch(changeLanguage(language));
    if (language === 'urdu' || isLanguage === "urdu" ) {
      AsyncStorage.setItem('lan', 'urdu');
      I18nManager.forceRTL(true);
      setActiveStatusCardTwo(true)
      setActiveStatus(false)
    } else {
      AsyncStorage.setItem('lan', 'en');
      I18nManager.forceRTL(false);
      setActiveStatus(true)
      setActiveStatusCardTwo(false)
    }
    
     RNRestart.Restart();
  };

  const signUpScreen=()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }
 const setlanguage=async(value:any)=> {
   await global.functions.setDetails("isLanSelected","True")
  languageChange(value)
 }
  return (
    <View style={stylesFrom.chooseLanguage}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <Text style={stylesFrom.languageTxt}>{translate('login.chooseLanguage')}</Text>
      <View style={isLanguage === "en" ?stylesFrom.chooseLangugaeSubView : stylesFrom.chooseLangugaeSubViewUrdu}>
        <Card name={"English"}  activeState={activeStatus}  languageChange={() => setlanguage("en")}  />
        <Card name={"اردو"}  activeStateTwo={activeStatusCardTwo} languageChange={() => setlanguage("urdu")} />
      </View>
      {/* <Text style={{fontSize:30,color:'#000',textAlign:'center'}}>{languageIs}</Text> */}
      {/* <Text onPress={()=>signUpScreen()} 
      style={stylesFrom.bottomText}>{translate('login.createAccount')}
      <Text  style={stylesFrom.linkingText}> {translate('login.login')}</Text></Text> */}
    </View>
  );
}

export default ChooseLangugae;

