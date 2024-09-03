import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/screenRatio';

const createStyles =  {
  txtHeader: {
    fontSize:18,
    color: "#000",
    textAlign: 'left',
    alignItems:'center',
    fontWeight:'700'
  },
  viewCommon: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: Platform.OS === 'ios'
      ? verticalScale(32)
      : verticalScale(48),
    width: '100%',
    backgroundColor: '',
  },
  txtCommon: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
    justifyContent: "center",
    alignItems: 'center'
  },
  leftTxtCommon:{
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    marginLeft:5,
     justifyContent: "center",
    // alignItems: 'center'
  },
  imgCommon: {
    width: 38, 
    height: 33, 
    borderRadius: 12, 
  //  / backgroundColor: '#f3f3f3', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  rightView: {
    width: 38, 
    height: 33, 
    borderRadius: 12, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  imgIcon: {
    alignSelf: 'center',
    height: scale(24),
    margin: 8,
    resizeMode: 'contain',
    width: 24,
  },
  imgIconAR: {
    alignSelf: 'center',
    height: scale(24),
    margin: 8,
    resizeMode: 'contain',
    width: 24,
    transform: [{ rotate: '180deg'}]
  },
  imgSvgIcon: {
    marginLeft : 16, 
    alignSelf : 'center'
  },
  imgSvgIconAR: {
    marginLeft : 16, 
    alignSelf : 'center',
    transform: [{ rotate: '180deg'}]
  },
  notifcationImgView: {
    height: '100%',
    justifyContent: 'center',
    marginRight: 10,
  },
  chatIcon: {
    alignSelf: 'center',
    height: 24,
    margin:  0,
    resizeMode: 'contain',
    width: 24,
  },
  logoIcon: {
    alignSelf: 'center',
    margin: moderateScale(8),
    resizeMode: 'contain',
  },
  notificationView: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  notificationCount: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "red",
    position: 'absolute',
    bottom: 30,
    right:  0,
  },
  profileImageStyle: {
    height:  33,
    width:  33,
    borderRadius: 50,
    alignSelf:'baseline',
  },
  notificationCircle: {
    width: 20,
    height: 20,
    backgroundColor: '#F64444',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: '#F64444',
    borderRadius: 10,
    borderWidth: 1,
    position: 'absolute',
    left:  22,
   // bottom: isTabletMode ? 45 : Platform.OS === 'ios' ? 22 : 30,
    top:  Platform.OS === 'ios' ? 4 :6
  },
  tabNotificationCircle: {
    width: moderateScale(12),
    height: moderateScale(12),
    backgroundColor: '#F64444',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderColor: '#F64444',
    borderRadius: moderateScale(6),
    borderWidth: 1,
    position: 'absolute',
    left: 24,
    bottom: Platform.OS === 'ios' ? moderateScale(29) : moderateScale(30),
  },
  notificationText: {
    color: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 8,
  },
  notificationTextTab: {
    color: '#fff',
    position: 'absolute',
    left: 27,
    bottom: Platform.OS === 'ios' ? 30 : 40,
    fontWeight: 'bold',
    fontSize: 9,
  },
  arrowImg: {
    alignSelf: 'center',
    height: 24,
    width: 24,
    marginLeft: 10
  },
  commonNavBarStyles: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor:'#ffffff'
  },
  cornerButtonContainer: {
    flex: 0.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(40),
  },
  emptyImageView: {
    alignSelf: 'center',
    height: 20,
    marginRight:  10,
    width: 24,
  },
  tabIconContainer: {
    marginRight: moderateScale(12),
  },
  profileAvatarIcon: {
    width: moderateScale(42),
    height: moderateScale(42),
    backgroundColor:"red",
    borderRadius: moderateScale(21),
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtProfileAvatar: {
    color: "blue",
    fontSize: moderateScale(12),
  
  }
};

export default createStyles;
