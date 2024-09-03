import React from 'react';
import {
  View,
  ActivityIndicator,
  Modal,
  Text,
  Image,
  Dimensions,
} from 'react-native';
// import { icons } from '../../Assets';

const Screen_Width = Dimensions.get('screen').height;
import Lottie from 'lottie-react-native';

const Spinner = ({size, visibility}) => {
  return (
    <Modal
      animationType={'none'}
      transparent
      visible={visibility}
      onRequestClose={() => {}}>
      <View style={styles.spinnerStyle}>
        <View style={{alignItems: 'center', belevation: 5}}>
          <Lottie
            style={{width: 40, height: 40, alignSelf: 'center', color: '#000'}}
            source={require('./lottieJSON/lottie.json')}
            autoPlay
            loop
          />
          {/* <ActivityIndicator size="small" color="#0000ff" /> */}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: (Screen_Width / 100) * 2.5,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            {'Loading ...'}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
};
export {Spinner};
