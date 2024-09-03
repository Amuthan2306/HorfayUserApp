import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  I18nManager,
  Platform,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SmallCircle from '../SmallCircle';
import DownArrow from 'react-native-vector-icons/AntDesign';
import styleFrom from '../../../assets/styles/styles';
import {useNavigation} from '@react-navigation/native';
import translate from '../../../utils/i18n';
import {useDispatch} from 'react-redux';
import {changeLanguage} from '../../../redux/Reducer/AuthReducer';
import RNRestart from 'react-native-restart';

const SideNavOptions = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {support} = props;
  const [logoutModal, setLogoutModal] = useState('');
  const [supportDetails, setSupportDetails] = useState(false);
  const [language, setLanguage] = useState(false);
  const [isLanguage, setLanguageFrom] = useState('en');

  const clickLogout = () => {
    setLogoutModal(!logoutModal),
      navigation.navigate('Login'),
       dispatch({ type: 'USER_LOGOUT' });
      AsyncStorage.clear();
  };

  const changeLanguageFrom = async (value: any) => {
    await global.functions.setDetails('isLanSelected', 'True');
    languageChange(value);
  };

  const languageChange = async (language: string) => {
    AsyncStorage.setItem('isScreen', 'home');
    dispatch(changeLanguage(language));
    if (language === 'urdu' || isLanguage === 'urdu') {
      AsyncStorage.setItem('lan', 'urdu');
      I18nManager.forceRTL(true);
    } else {
      AsyncStorage.setItem('lan', 'en');
      I18nManager.forceRTL(false);
    }
    RNRestart.Restart();
  };

  const redirection = () => {
    if (props.routeName == 'language') {
      setLanguage(!language);
    }
    if (props.routeName == 'support') {
      setSupportDetails(!supportDetails);
    }
    if (props.routeName == 'password') {
      navigation.navigate('EditAccounts')
    }
    if (props.routeName == 'logout') {
      setLogoutModal(!logoutModal);
      return false;
    }
    props.navigation.navigate(props.routeName);
  };

  return (
    <TouchableOpacity onPress={() => redirection()}>
      <View
        style={{paddingLeft: 5, flexDirection: 'row', alignItems: 'center'}}>
        <Image source={props.icon} style={{height: 20, width: 20}} />
        <Text style={[styles.drawerText, {color: '#fff', marginLeft: 5}]}>
          {props.name}
        </Text>
        {support && (
          <DownArrow
            name={'down'}
            color={'#fff'}
            size={12}
            style={{marginLeft: 5, marginTop: 3}}
          />
        )}
      </View>
      {language ? (
        <View style={{marginLeft: 15}}>
          <TouchableOpacity
            onPress={() => changeLanguageFrom('en')}
            style={styles.buttonStyle}>
            <SmallCircle color="#fff" />
            <Text style={styles.subTitle}>
              {translate('login.englishText')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLanguageFrom('urdu')}
            style={styles.buttonStyle}>
            <SmallCircle color="#fff" />
            <Text style={styles.subTitle}>{translate('login.urduText')}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {supportDetails ? (
        <View
          style={{
            marginLeft: 15,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('AboutUs')}>
            <SmallCircle color="#fff" />
            <Text style={styles.subTitle}>
              {translate('dashboard.aboutus')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('TermsandCondition')}>
            <SmallCircle color="#fff" />
            <Text style={styles.subTitle}>
              {translate('dashboard.termsandconditions')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ContactUs')}>
            <SmallCircle color="#fff" />
            <Text style={styles.subTitle}>
              {translate('dashboard.contactus')}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={logoutModal}
          onRequestClose={() => {
            setLogoutModal(!logoutModal);
          }}>
          <View style={styles.modal_container}>
            <View style={styles.modal_View}>
              <View style={styles.modalSecondaryView}>
                <Text style={styles.modalText}>
                  {translate('login.logout')}
                </Text>
              </View>
              <View style={styles.btnView}>
                <TouchableOpacity
                  onPress={() => clickLogout()}
                  style={[
                    styles.btnViewStyle,
                    {backgroundColor: styleFrom.black},
                  ]}>
                  <Text style={[styles.textStyle, {color: '#fff'}]}>
                    {translate('login.yes')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setLogoutModal(!logoutModal)}
                  style={[styles.btnViewStyle, {backgroundColor: '#D8D8D8'}]}>
                  <Text style={[styles.textStyle, {color: '#858585'}]}>
                    {translate('login.no')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

export {SideNavOptions};

const styles = {
  userProfileWrapper: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: '#00000076',
    borderBottomWidth: 1,
    width: '100%',
    paddingLeft: 5,
  },
  drawerText: {
    fontSize: 16,
    color: '#111010',
    paddingVertical: 12,
    textAlign: 'left',
    left: 10,
  },
  imageView: {
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: '#00000025',
  },
  profile: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  userDetailsWrapper: {
    justifyContent: 'center',
    width: '50%',
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    color: '#111010',
    textAlign: 'left',
    marginBottom: 10,
  },
  userMobile: {
    fontSize: 16,
    color: '#111010',
    textAlign: 'left',
  },
  arrowIcon: {
    width: 22,
    height: 22,
    alignSelf: 'center',
    transform: [{rotate: '-90deg'}],
  },
  sectionText: {
    fontSize: 14,
    color: '#111010',
    padding: 8,
    marginLeft: 45,
  },
  drawerText: {
    fontSize: 16,
    color: '#111010',
    paddingVertical: 12,
    textAlign: 'left',
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 10,
    color: '#fff',
    left: 10,
    textAlign: 'center',
    // marginTop:Platform.OS === 'ios'?10:0,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  Logoutmodal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_View: {
    flex: 0.25,
    width: '90%',
    borderRadius: 20,
    backgroundColor: styleFrom.white,
    alignItems: 'center',
  },
  modalSecondaryView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1D1F',
  },
  btnView: {
    flex: 0.5,
    flexDirection: 'row',
  },
  textStyle: {
    // color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  btnViewStyle: {
    margin: 15,
    height: 50,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
