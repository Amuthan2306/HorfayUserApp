import React from 'react';
import {
  Image, Text,
  TouchableOpacity,
  View
} from 'react-native';
import FeatherICON from 'react-native-vector-icons/Ionicons';
import styles from './styles'

interface AppHeaderProps {
  label?: string;
  onLeftIconClick?: () => void;
  headerContainerStyle?: any;
  containerStyle?:any;
  leftAlign?:boolean;
}

export const AppHeader: React.FunctionComponent<AppHeaderProps> = ({
  label,
  onLeftIconClick,
  headerContainerStyle,
  containerStyle,
  leftAlign,
}) => {
  return (
    <View
      style={[
        styles.commonNavBarStyles,
        containerStyle,

      ]}>
      <TouchableOpacity onPress={onLeftIconClick} style={[styles.imgCommon,{  marginLeft: 15, }]}>
          <FeatherICON name="arrow-back-sharp" color="#000" size={22}/>
      </TouchableOpacity>
      <View style={[ leftAlign ?styles.leftTxtCommon :styles.txtCommon , headerContainerStyle]}>
        <Text
          numberOfLines={1}
          style={styles.txtHeader}>
          {label}
        </Text>
      </View>
      {/* <View style={styles.rightView}/> */}
    </View>
  );
};
