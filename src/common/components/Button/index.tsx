import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
interface Props {
  round: boolean,
  labelStyle?: object,
  style?: object,
  label: string,
  onPress: () => void,
  color:string,
  size:string,
  buttonStatus:boolean,
  disabled:any
}
const Button = ({
  round,
  labelStyle,
  style,
  label,
  onPress,
  disabled,
  color,
  size,
  buttonStatus

}: Props) => {
  return <TouchableOpacity
  disabled={disabled}
    activeOpacity={0.8}
    style={[styles.container, { ...style, borderRadius: round ? 50 : (style?.borderRadius ? style.borderRadius : 0) }]}
    onPress={() => disabled === false || disabled === undefined ?  onPress():null}>
    <Text style={[labelStyle ]}>{label}</Text>
  </TouchableOpacity>
};

Button.defaultProps = {
  round: true,
}

export default Button;



