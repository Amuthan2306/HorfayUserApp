import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SideNavOptions} from '../common/components/DrawerItems';
import ANTIcon from 'react-native-vector-icons/AntDesign';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import DummyAvatar from '../assets/svg/Dashboard/Account.svg';
import EditSvg from '../assets/svg/Dashboard/Frame.svg';
import translate from '../utils/i18n';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import dahsboard from '../common/translations/urdu/dahsboard';

const DrawerDetails = props => {
  const [imagepick, setimagepick] = useState(null);
  const loginData = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails,
  );
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        let result = await launchImageLibrary({
          mediaType: 'photo',
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        setimagepick(result.assets[0]?.uri);
        console.log('You can use the camera', result);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView
        style={{width: '95%', marginLeft: 10}}
        {...props}>
        <View style={{marginTop: '25%'}}>
          <ANTIcon
            onPress={() => props.navigation.closeDrawer()}
            name="close"
            color="#fff"
            size={20}
            style={{marginLeft: 10}}
          />
          <Pressable
            onPress={() => requestCameraPermission()}
            style={{
              marginTop: '20%',
              width: 80,
              height: 80,
              backgroundColor: '#1E1E1E',
              borderRadius: 40,
              alignItems: 'center',
            }}>
            {imagepick ? (
              <Image
                source={{uri: imagepick}}
                style={{height: 69, width: 68, borderRadius: 30}}
              />
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <DummyAvatar width={60} height={64} style={{marginLeft: 25}} />
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('EditAccounts')}>
                  <Image
                    style={{height: 15, width: 15,marginTop:48, right:3}}
                    source={require('../assets/image/Edit.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          </Pressable>
          <View style={{width: '85%', alignItems: 'flex-start'}}>
            <Text
              style={{
                marginTop: 8,
                color: '#fff',
                fontWeight: '600',
                paddingLeft: 6,
              }}>
              {/* {translate('dashboard.Username')} */}
              {loginData?.Details?.first_name}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              justifyContent: 'space-between',
              paddingLeft: 6,
            }}>
            <Text
              numberOfLines={1}
              style={{
                marginTop: 8,
                color: '#fff',
                fontWeight: '600',
              }}>
              {loginData?.Details?.phone_number}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1.5,
            borderColor: 'plum',
            marginTop: 30,
            width: '100%'
          }}
        />
        <View
          style={{
            marginTop: 20,
          }}>
          <SideNavOptions
            {...props}
            icon={require('../assets/png/Language.png')}
            name={translate('dashboard.language')}
            routeName="language"
            support={true}
          />
          <SideNavOptions
            {...props}
            icon={require('../assets/png/Customer.png')}
            name={translate('dashboard.support')}
            routeName="support"
            support={true}
          />
          <SideNavOptions
            {...props}
            icon={require('../assets/image/PasswordKey.png')}
            name={translate('dashboard.PasswordKey')}
            routeName="password"
          />
          <SideNavOptions
            {...props}
            icon={require('../assets/png/logout.png')}
            name={translate('dashboard.logout')}
            routeName="logout"
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerDetails;

const styles = {
  badgeCountView: {
    width: 25,
    height: 25,
    // padding: 5,
    borderRadius: 25 / 2,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  drawerContent: {
    flex: 1,
    marginBottom: 5,
    marginLeft: 20,
    backgroundColor: 'red',
  },
  userInfoSection: {paddingLeft: 8},
  drawerText: {
    fontSize: 16,
    // fontFamily: LATO_BOLD,
    color: '#111010',
    paddingVertical: 12,
    textAlign: 'left',
  },
  drawerCount: {
    color: '#6C6C6C',
    fontSize: 12,
    //fontFamily: LATO_BOLD,
    // marginRight: 5,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 14,
    //fontFamily: LATO_REGULAR,
    color: '#111010',
    padding: 8,
    marginLeft: 45,
  },
  sectionTextLight: {
    fontSize: 12,
    //fontFamily: LATO_REGULAR,
    color: '#111010',
    marginTop: 16,
  },
  loginText: {
    fontSize: 12,
    // fontFamily: LATO_REGULAR,
    color: '#000000',
    marginLeft: 20,
    marginTop: 5,
  },
  userText: {
    marginTop: 8,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'left',
  },
  outerCircle: {
    backgroundColor: '#fff',
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    // backgroundColor: '#52B46B',
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    borderColor: '#52B46B',
    borderWidth: 1.6,
  },
};
