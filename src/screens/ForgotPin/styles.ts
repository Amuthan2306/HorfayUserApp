import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import styleFrom from "../../assets/styles/styles";
const styles = {
    screen: {
        flex: 1,
        backgroundColor:styleFrom.white
    },
    flexOne: {
        flex: 1,
        marginHorizontal:25,
        marginTop:'25%'
    },
    textInputView: {
        width: '100%',
        height: 45,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems: 'center',
        // borderBottomWidth: 1.5,
        // borderColor: '#D8ECFE',
        backgroundColor:'#f8f8f8',
        borderRadius:10
    },
    phoneInputView: {
        height: 45,
        backgroundColor:'#f8f8f8',
        borderRadius:10,
        marginTop:10,
        marginBottom:20
    },
    buttonText: {
        width: '100%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop:40,
        fontWeight: '600',
        backgroundColor:styleFrom.black
    },
    labelText: {
        fontSize: 12,
        color: styleFrom.white,
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing:2
    },
    bottomText:{
        marginTop:10,
        fontSize:12,
        color:'#070707',
        textAlign:'center',
        //position:'absolute',
        bottom:Platform.OS === 'android'?50 : 100,
    },
    linkingText:{
        fontSize:12,
        color:styleFrom.linkColor
    },
    countrycodeInputStyle: {
        backgroundColor: '#fbfbfb',
        fontSize: 16,
        fontStyle: 'normal',
        textAlign: 'left',
        width: '100%',
        padding:0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      lottieAnimStyle: {
        width: 130,
        height: 120,
        alignSelf: 'center',
        marginTop:  6,
      },
      container: {
        flex: 1,
        backgroundColor:styleFrom.white,
        //alignItems: "center",
        justifyContent: "center",
      },
     
     textcolor: {
         color: '#2D4379',
     },
}

export default styles;