import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18n-js';
import * as translations from '../common/translations';

// i18n.locale = getLanguageCode();
export const configureLanguage = (language: string) => {
  // configure language with on button click
  AsyncStorage.setItem('lan', language);
  i18n.locale = language ?? 'en';
  i18n.fallbacks = true;
  i18n.translations = {...translations};
};
// if the configurelanguage doesn't work please comment it and uncomment the below lines

i18n.fallbacks = true;
i18n.translations = { ...translations };

const translate = (path: string, values?: any) => i18n.t(path, values);

export default translate;
