import React from 'react';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { useSelector} from 'react-redux';
import styles from './style';
import stylesFrom from "../../../assets/styles/styles";
import Icon from 'react-native-vector-icons';

interface InputTextProps {
  value: any;
  onChangeText: (value: any) => void;
  label?: any;
  required?: boolean;
  inputTextContainerStyle?: {};
  inputTextStyle?: {};
  placeHolder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  numberofLines?: number;
  editable?: boolean;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  autoFocus: boolean;
  onEndEditing: () => void;
  labelStyle?:{},
  secureTextEntry:Boolean,
  
}

const defaultProps = {
  label: undefined,
  required: false,
  inputTextContainerStyle: {},
  inputTextStyle: {},
  placeHolder: '',
  placeholderTextColor:stylesFrom.grey,
  keyboardType: 'default',
  maxLength: 1000,
  multiline: false,
  numberofLines: 1,
  editable: true,
  onBlur: () => { },
  onSubmitEditing: () => { },
  autoFocus: false,
  onEndEditing: () => { },
  labelStyle:{},
  secureTextEntry:false,
  
}

const InputText = ({
  value,
  onChangeText,
  label,
  required,
  inputTextContainerStyle,
  inputTextStyle,
  placeHolder,
  placeholderTextColor,
  keyboardType,
  maxLength,
  multiline,
  numberofLines,
  editable,
  labelStyle,
  onBlur,
  onSubmitEditing,
  autoFocus,
  onEndEditing,
  secureTextEntry,
  
}: InputTextProps & typeof defaultProps) => {
  const languageIs = useSelector(
    (state: RootState) => state?.root?.auth.languageIs
  );

  return (
    <>
     
      <View style={{ ...inputTextContainerStyle }}>
        <TextInput
          value={value}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          style={[ styles.inputAR, inputTextStyle]}
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={numberofLines}
          editable={editable}
          textAlign={languageIs == 'urdu'?'right':'left'}
          //onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          // onSubmitEditing={onSubmitEditing}
          // onEndEditing={onEndEditing} 
          />
      </View>
    </>
  )
};

InputText.defaultProps = defaultProps;

export default InputText;
