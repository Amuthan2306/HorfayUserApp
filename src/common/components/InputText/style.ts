import {StyleSheet,Dimensions} from 'react-native';
import stylesFrom from "../../../assets/styles/styles";
const Width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  input: {
    color: stylesFrom.red,
    fontSize:16,
    height: 40,
    textAlign: 'right'
  },
  inputAR: {
    color: stylesFrom.mediumBlack,
    fontSize:16,
    height: 40,
    textAlign: 'left',
    width:(Width/88)*69
  },
  label: {
    fontSize:  16,
    color: stylesFrom.green,
    // margin: isTabletMode ? 0 : '3%',
    // marginVertical: isTabletMode ? '1%' : '3%',
    // marginHorizontal: isTabletMode ? '3%' : '3%',
  },
  asteriskText: {
    fontSize:  16,
    //color: Colors.darkRed,
  },
  error: {
    backgroundColor: '#cc0011',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default styles;
