import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { useKeyboard } from '../../../utils/useKeyboard';
import styles from './styles';
import styleFrom from "../../../assets/styles/styles";

interface Props {
  children: React.ReactChild;
  visible?: boolean;
  onDrop: () => void;
  containerStyle?: {};
  onModalHide?: () => void;
  modalHeight?: number;
  statusBarTranslucent?: boolean;
  autoHeight?: boolean
}

const BottomModal = ({
  children,
  visible,
  onDrop,
  onModalHide,
  containerStyle = {},
  modalHeight,
  statusBarTranslucent = true,
  autoHeight
}: Props) => {
  const keyboardHeight = useKeyboard();
  const [modalViewHeight, setModalViewHeight] = useState(0)
  useEffect(() => {
    if (keyboardHeight === 0) setModalViewHeight((prev) => prev !== 0 ? prev : 0)
    if (keyboardHeight !== 0) {
      let keyboard = Number(String(keyboardHeight).charAt(0));
      let mHeight = Number(String(modalViewHeight).charAt(0));
      if (keyboard < mHeight) setModalViewHeight(modalViewHeight);
      if (keyboard >= mHeight) setModalViewHeight(modalViewHeight + 60 + (Platform.OS === 'android' ? keyboardHeight : 0));
    }
  }, [keyboardHeight])

  const customBottomSectionStyles = modalHeight ? { height: modalHeight } : {};
  const customContainerStyles = modalHeight ? { height: modalHeight } : {};
  return (
    <ReactNativeModal
      // verticalScale(Platform.OS === 'ios' ? 80 : Platform.OS === 'android'? 100:270)
      avoidKeyboard={true}
      style={{ margin: 0 }}
      onBackdropPress={onDrop}
      onModalHide={onModalHide}
      isVisible={visible}
      statusBarTranslucent={statusBarTranslucent}
      onBackButtonPress={onDrop}>
      <View style={[styles.bottomSection]}>
        <View style={styles.line} />
        <View
          style={{
            ...styles.container,
            backgroundColor: styleFrom.white,
            ...customContainerStyles,
            ...containerStyle,
          }}>
          {autoHeight ?
            <KeyboardAvoidingView
              behavior={'height'}
              onLayout={(event) => {
                let { height } = event.nativeEvent.layout;
                setModalViewHeight(height)
              }}
              style={{
                height: keyboardHeight === 0 ? 'auto' : modalViewHeight,
              }}>
              {children}
            </KeyboardAvoidingView>
            :
            <>
              {children}
            </>
          }
        </View>
      </View>
    </ReactNativeModal >
  )
};

BottomModal.defaultProps = {
  visible: false,
  autoHeight: false
};

export default BottomModal;
