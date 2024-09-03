import { Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import styleFrom from "../../assets/styles/styles";
const styles = {
    screen: {
        flex: 1,
        backgroundColor: styleFrom.white,
    },
    flexOne: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25,
        //alignSelf:'center'
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
        backgroundColor: '#f8f8f8',
        borderRadius: 10
    },
    phoneInputView: {
        // width: '100%',
        height: 45,

        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignSelf: 'flex-start',
        // alignItems: 'center',
        // borderBottomWidth: 1.5,
        // borderColor: '#D8ECFE',
        backgroundColor: '#f8f8f8',
        borderRadius: 10
    },
    buttonText: {
        width: '100%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor: styleFrom.black
    },
    labelText: {
        fontSize: 14,
        color: styleFrom.white,
        fontWeight: '600'
    },
    bottomText: {
        marginTop: 10,
        fontSize: 13,
        fontWeight:'600',
        color: styleFrom.grey,
        textAlign: 'center',
        //position:'absolute',
        bottom: Platform.OS === 'android' ? 40 : 100,
    },
    linkingText: {
        fontSize: 13,
        fontWeight:'700',
        color: styleFrom.blueText
    },
    countrycodeInputStyle: {
        backgroundColor: '#fbfbfb',
        fontSize: 16,
        fontStyle: 'normal',
        textAlign: 'left',
        width: '100%',
        padding: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordView: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    forgotPasswordViewUrdu: {
        flexDirection: 'row-reverse',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    container: {
       // flex: 1,
       height:35,
       
       
    },
    textcolor: {
        color: '#2D4379',
    },

}

export default styles;