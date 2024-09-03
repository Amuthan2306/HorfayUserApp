import { scale } from 'react-native-size-matters';
import styleFrom from "../../assets/styles/styles";
const styles = {
    screen: {
        flex: 1,
        backgroundColor:styleFrom.white
    },
    flexOne: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal:25,
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
        backgroundColor:'#f8f8f8',
        borderRadius:10
    },
    textInputViewUrdu: {
        width: '100%',
        height: 45,
        marginTop: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderBottomWidth:2,
        borderColor: '#D8ECFE',
        marginBottom: 10
    },
    buttonText: {
        width: '100%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor:styleFrom.black
    },
    labelText: {
        fontSize: 14,
        color: styleFrom.white,
        fontWeight: '600'
    },
    phoneInputView: {
         height: 45,
         backgroundColor:'#f8f8f8',
         borderRadius:10,
         marginTop:10
     },
     container: {
        // flex: 1,
        height:45,
        
     },
     textcolor: {
         color: '#2D4379',
     },
}

export default styles;