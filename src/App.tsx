import React,{useEffect,useState} from 'react';
import { store } from './store/store';
import {  SafeAreaView, View, I18nManager, } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import RootNavigator from './navigator';
import { configureLanguage } from './utils/i18n';
import SnackBar from './common/components/SnackBar/SnackBar';
//LogBox.ignoreAllLogs()

const App = () => {
  const [lan, setlan] = useState<string | null>(null);

  useEffect(() => {
    selectedLng();
  }, []);

  const selectedLng = async () => {
    const lngData = (await AsyncStorage.getItem('lan')) ?? '';
    if (lngData) {
      configureLanguage(lngData);
      setlan(lngData);
    }
    if (lngData === 'urdu') {
      await I18nManager.forceRTL(true);
      AsyncStorage.setItem('lan', 'urdu');
      if (!I18nManager.isRTL) {
        RNRestart.Restart();
      }
      return;
    } else {
      await I18nManager.forceRTL(false);
      AsyncStorage.setItem('lan', 'en');
      if (I18nManager.isRTL) {
        RNRestart.Restart();
      }
      return;
    }
  };

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#ffff' }}>
      <ReduxProvider store={store} >
        <NavigationContainer>
          <RootNavigator />
          <SnackBar/>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}

export default App;