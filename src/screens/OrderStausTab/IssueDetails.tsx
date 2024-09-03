import React from 'react';
import {
  View,
  Keyboard,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Pressable,
  FlatList,
  ImageBackground
} from 'react-native';
import styleFrom from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';
import TextCustom from '../../common/components/TextWrapper';
import BottomModal from '../../common/components/BottomModal'
import translate from '../../utils/i18n';
import InputText from '../../common/components/InputText';
import images from '../../common/components/ImageAssets';
import Button from '../../common/components/Button';
// import { launchImageLibrary } from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { AuthHeader } from '../../common/components/Header/authheader';
import { cos } from 'react-native-reanimated';


export const issueDetails = ({ route }) => {
  const { IssueType } = route?.params
  const Header = IssueType
  const navigation = useNavigation();
  const [modal, setmodal] = React.useState(false)
  const [descrip, setdescrip] = React.useState('');
  const [imagepick, setimagepick] = React.useState([]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [imageAfterRemove, setRemovedImage] = React.useState([]);


  const requestCameraPermission = async () => {
    try {
      if (Platform.OS == 'ios') {
        let result = await launchImageLibrary({
          mediaType: 'photo',
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          selectionLimit: 3
        });
        setimagepick(result?.assets);
        console.log('You can use the camera', result);
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          let result = await launchImageLibrary({
            mediaType: 'photo',
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 3
          });
          setimagepick(result?.assets);
          console.log('You can use the camera', result?.assets);
        } else {
          console.log('Camera permission denied');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const _onHandlerPress = () => {
    Keyboard.dismiss();
    if (global.functions.isNullOrEmpty(Header)) {
      global.functions.ShowAlert('please Enter Title', global.const.warning);
    }
    else if (global.functions.isNullOrEmpty(descrip)) {
      global.functions.ShowAlert(
        'please Enter Description',
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(imagepick)) {
      global.functions.ShowAlert('please Upload Image', global.const.warning);
    } else {
      setModalVisible(!modalVisible);
    }
  };
 
  const onModalClose = () => {
    setTimeout(() => {
      setModalVisible(!modalVisible);
      navigation.navigate('Home');
    }, 500);
  };

  const removeImageInTheList =(item,index) =>{
    console.info("---->>>",imagepick)
    const newArr = imagepick.filter((object,indexitem) => {
      return indexitem !== index;
    });

    // imagepick.splice(indexOfObject, 1);
    setRemovedImage(newArr);
    setimagepick(newArr)
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center',backgroundColor:'#F5F5F5' }}>
      <AuthHeader
        onPress={() => navigation.goBack()}
        label={translate('login.refund')}
      />

      <View style={styles.container}>
        <TextCustom style={styles.title}>{translate('login.title')}</TextCustom>
        <View
          style={styles.textInputView}>
          <Text style={styles.issuetext}>{Header}</Text>
        </View>
        <Pressable onPress={() => Keyboard.dismiss()}>
          <TextCustom style={styles.title}>
            {translate('login.describe')}
          </TextCustom>
          <InputText
            value={descrip}
            onChangeText={(text: string) => setdescrip(text)}
            maxLength={1000}
            multiline
            inputTextStyle={styles.descriptionView}
          />
        </Pressable>
      </View>

      <View style={styles.imagecover}>
        <View style={styles.imageborder}>
          <TouchableOpacity
            style={{ width: '35%' }}
            onPress={() => requestCameraPermission()}>
            <Text style={styles.uploadtext}>
              {translate('login.upload_image')}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          data={imagepick}
          extraData={imagepick}
          style={{ marginTop: 30 }}
          renderItem={({ item,index }) => (
            <View style={styles.smallimageview}>
              <ImageBackground
                source={{ uri: item.uri }}
                style={{ height: '100%', width: '100%', }}
                borderRadius={20}
              >
                <Pressable onPress={()=>removeImageInTheList(item,index)} style={{width:20,height:20,borderRadius:20/2,backgroundColor:'#EBEBEB',position:'absolute',right:-0,top:-5,justifyContent:'center',alignItems:'center'}}>
                   <Icon name="close" size={10} color="#DE0000" />
                </Pressable>
              </ImageBackground>
            </View>
          )}
        />

        <Button
          onPress={() => _onHandlerPress()}
          label={translate('login.submit')}
          round={false}
          style={styles.buttonText}
          labelStyle={styles.labelText}
        />
      </View>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modal_container}>
          <View style={styles.modal_View}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View
                style={{
                  flex: 0.9,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={images.kyc_image}
                  style={{ width: 200, height: 150, left: 20 }}
                />
              </View>
              <TouchableOpacity
                style={styles.modalClose}
                onPress={() => onModalClose()}>
                <Icons name={'close'} size={18} color={'#757575'} />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalText}>
              {translate('login.refund_model')}
            </Text>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};
export default issueDetails;
const styles = StyleSheet.create({
  container: {
    flex: 0.45,
    width: '90%',
    marginTop: 15,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },

  title: {
    fontSize: 15,
    color: '#150B3D',
    fontWeight: '700',
    top: 10,
  },
  descriptionView: {
    height: '65%',
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: styleFrom.white,
  },
  imagecover: {
    flex: 0.6,
    width: '90%',
    // borderWidth: 2,
    marginBottom: 30,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  imageborder: {
    flex: 0.7,
    width: '100%',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    width: '95%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    marginTop: 15,
    fontWeight: '600',
    backgroundColor: styleFrom.black,
  },
  labelText: {
    fontSize: 15,
    color: styleFrom.white,
    fontWeight: '700',
  },
 
  uploadtext: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'grey',
  },
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal_View: {
    flex: 0.35,
    width: '90%',
    borderRadius: 20,
    backgroundColor: styleFrom.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontWeight: '700',
    color: '#161616',
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    marginBottom: 30,
  },
  modalClose: {
    backgroundColor: '#EBEBEB',
    flex: 0.085,
    height: 30,
    width: 12,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    borderRadius: 35,
  },

  textInputView: {
    width: '100%',
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8
  },
  issuetext: {
    fontSize: 18,
    fontWeight: '500',
    color: styleFrom.black
  },
  imageview: {
    // borderWidth: 1,
    height: 110,
    width: '48%',
    backgroundColor: '#D2D2D2',
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  smallimageview: {
    height: 90,
    width: 100,
    borderRadius: 20,
    backgroundColor: '#D2D2D2',
    marginLeft: 15
  }
});
