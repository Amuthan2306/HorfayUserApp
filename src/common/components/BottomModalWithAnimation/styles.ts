import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/screenRatio';
import stylesFrom from "../../../assets/styles/styles";
const createStyles = {
  containerView: {
    width: '100%',
    marginTop: 'auto',
    alignSelf: 'center',
    backgroundColor: stylesFrom.white,
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  lottieContainer: {
    width: scale(110),
    height: verticalScale(108),
    backgroundColor:stylesFrom.white,
    borderRadius:  moderateScale(70),
    position: 'absolute',
    top: moderateScale(-10),
    alignSelf: 'center',
  },
  lottieAnimStyle: {
    // top: moderateScale(-10),
    width: scale(70),
    height: verticalScale(70),
    alignSelf: 'center',
    marginTop:  6,
  },
  childrenView: {
    top: moderateScale(12),
    marginBottom:0
  },
  confirmText: {
    fontSize: moderateScale(16),
    color: stylesFrom.black,
  },
  confirmMsgText: {
    fontSize: moderateScale(14),
    color: stylesFrom.black,
    marginTop: moderateScale(5),
    marginHorizontal: moderateScale(10),
    textAlign: 'center',
  },
  confirmView: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop:22,
    paddingBottom: Platform.OS === 'android'? moderateScale(60):moderateScale(60)
  },
  buttonModelText: {
    fontSize: 14,
    color:stylesFrom.white,
    fontWeight:'500'
  },
  touchableOpacity: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
};

export default createStyles;
