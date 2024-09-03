import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  I18nManager,
  Text,
  Image,
  Easing,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../assets/styles/styles'
import { configureLanguage } from '../../utils/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../redux/Reducer/AuthReducer';
import images from '../../common/components/ImageAssets';


function SplashScreens() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [lan, setlan] = useState<string | null>(null);
  const languageIs = useSelector(
    (state: RootState) => state?.root?.authReducer,
  );
  const jumpValue = new Animated.Value(0);
 

  useEffect(() => {
    ActiveAnim()
    setTimeout(() => {
      selectedLng();
     },2500);   
  }, [])

  const selectedLng = async () => {
    const lngData = (await AsyncStorage.getItem('lan')) ?? '';
     const isScreenFrom = (await AsyncStorage.getItem('isScreen')) ?? '';
    console.info("Is lang as splash screen", lngData)
    const isLanSelected = await global.functions.getDetails('isLanSelected');
    if (isLanSelected === 'True') {
       if(isScreenFrom === 'home'){
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
      else{
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } else {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ChooseLanguage' }],
        });
      }, 1000);
    }

    if (lngData) {
      configureLanguage(lngData);
      setlan(lngData);
    }
    if (lngData === 'urdu') {
      await I18nManager.forceRTL(true);
      dispatch(changeLanguage('urdu'));
      AsyncStorage.setItem('lan', 'urdu');
      return;
    } else {
      await I18nManager.forceRTL(false);
      dispatch(changeLanguage('en'))
      AsyncStorage.setItem('lan', 'en');
      return;
    }
  };


  const ActiveAnim = () => {
    Animated.spring(jumpValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => jumpValue.setValue(0));
  };

  return (
    <View style={styles.flex1}>
      <ImageBackground
        style={[styles.flex1, styles.justifyContentCenter, styles.alignItemsCenter]}
        source={images.splashBgTheme}>

        <Animated.Image
          style={{ transform: [{ scale: jumpValue }], width: 120, height: 160, marginBottom: 20 }}
          source={images.HaLogo}
        >
        </Animated.Image>
        <Image style={{ width: 180, height: 60 }}
          source={images.horfayLogo} />

      </ImageBackground>

    </View>
  );
}

export default SplashScreens;
