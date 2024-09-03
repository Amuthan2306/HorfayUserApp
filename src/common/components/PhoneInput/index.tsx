import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import { useSelector} from 'react-redux';
import IntlPhoneInput from 'react-native-intl-phone-input';

function PhoneInput(props) {
  const {
    inputStyles,
    onPress,
    onChangeNumber,

  } = props;

  const languageIs = useSelector(
    (state: RootState) => state?.root?.auth?.languageIs,
  );


  return (
    <View
      style={{
        // flex: 1,
        // marginTop: Platform.OS == 'ios' ? 5 : 10,
        // justifyContent: 'center',
      }}>
      <TouchableOpacity  onPress={onPress}>
        <View style={[LocalStyle.inputStyle, inputStyles]}>
            <IntlPhoneInput
              containerStyle={LocalStyle.countrycodeInputStyle}
              flagStyle={{fontSize: 25}}
              phoneInputStyle={{marginLeft:15}}
              onBlur={() => alert('hi')}
              onChangeText={onChangeNumber}
              defaultCountry={'IN'}
              placeholderTextColor="grey"
              dialCodeTextStyle={{color: '#000'}}
              phoneInputStyle={{color: '#000',textAlign: languageIs == 'urdu'?'right':'left'}}
              modalCountryItemCountryNameStyle={{color: '#000'}}
              filterInputStyle={{color: '#000'}}
              modalCountryItemCountryDialCodeStyle={{color: '#000'}}
            />
        </View>
      </TouchableOpacity>
    </View>
  );
}
const LocalStyle = {
  textStyle: {
    fontSize: 13,
    color: '#727272',
    fontWeight: '900',
    textAlign: 'left',
    letterSpacing: 0.03,
  },
  inputStyle: {
    borderRadius: 10,
   // borderStyle: 'solid',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Platform.OS === 'ios' ? 0 : 0,
    backgroundColor:'#f8f8f8'
  },
  textInputStyle: {
    color: '#141416',
    backgroundColor: '#fbfbfb',
    fontSize: 16,
    height: 40,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    width: '100%',
    
    borderBottomColor: '#000',
  },
  countrycodeInputStyle: {
    backgroundColor: '#f8f8f8',
    fontSize: 16,
    fontStyle: 'normal',
    textAlign: 'left',
    width: '100%',
  //  borderBottomWidth: 0.7,
    marginHorizontal: -8,
    paddingBottom: 0,
    flex: 1,
    height:46,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginLeft:5
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
};
export default PhoneInput;
