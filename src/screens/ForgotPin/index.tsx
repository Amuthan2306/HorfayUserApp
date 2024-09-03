import React, { useState, useRef } from 'react';
import { View, Text, Platform, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
import PhoneInput from '../../common/components/PhoneInput';
import translate from '../../utils/i18n';
import Button from '../../common/components/Button';
import TextCustom from '../../common/components/TextWrapper';
import styleFrom from "../../assets/styles/styles";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import ForgotPasswprdSVG from '../../assets/svg/Dashboard/forgotPassword.svg';
 const ForgotPin = (props) => {
        const navigation = useNavigation();
        const phoneInput = useRef<PhoneInput>(null);
        const [value, setValue] = useState("");
        const [formattedValue, setFormattedValue] = useState("");
        const [phoneNumber, setPhoneNumber] = useState('');
        const [dialcode, setDialcode] = useState('');
        
    
        const onChangeNumber = ({
            dialCode,
            phoneNumber,
    
        }: any) => {
            setDialcode(dialCode);
            const num = dialCode + phoneNumber;
            setPhoneNumber(phoneNumber);
        };
    
        const _onHandlerPress = () => {
            if (global.functions.isNullOrEmpty(phoneNumber)) {
                global.functions.ShowAlert(
                    'Please Enter Phone Number',
                    global.const.warning,
                );
            }
            navigation.navigate('Otp',{isFromForgot:'false'})
        }
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
            <KeyboardAvoidingView
                behavior="height"
                style={[styles.flexOne]}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >  
                 <TextCustom
                    fontSize={30}
                    color={styleFrom.linkColor}
                    fontWeight='700'
                    align="center"
                >
                    {translate('login.forgotPin_link')}
                </TextCustom>

                <TextCustom
                    fontSize={12}
                    color={styleFrom.pinText}
                    fontWeight='400'
                    align="center"
                    marginTop={11}
                >
                    {translate('login.forgotPinText')}
                </TextCustom>
           
                <ForgotPasswprdSVG
                    width={110}
                    height={90}
                    style={{ marginTop: 52,marginBottom:46, justifyContent: 'center', alignSelf: 'center' }} />

                <TextCustom
                    fontSize={12}
                    color={styleFrom.linkColor}
                    fontWeight='700'
                    marginTop={10}
                    marginBottom={8}
                >
                    {translate('login.phoneNumber')}
                </TextCustom>

                <PhoneInput
                    container={styles.container}
                    name="Phone Number"
                    value={phoneNumber}
                    keyboardType="numeric"
                    nameColor={styles.textcolor}
                    secureTextEntry={false}
                    onChangeNumber={(text: any) => onChangeNumber(text)}
                />

                <Button
                    label={translate('login.resetPin')}
                    round={false}
                    style={styles.buttonText}
                    labelStyle={styles.labelText}
                    onPress={() => _onHandlerPress()} color={''} size={''} buttonStatus={false} /> 
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
 }
 export default ForgotPin;


// const ForgotPin = (props) => {
//     const navigation = useNavigation();
//     const phoneInput = useRef<PhoneInput>(null);
//     const [value, setValue] = useState("");
//     const [formattedValue, setFormattedValue] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [dialcode, setDialcode] = useState('');

//     const onChangeNumber = ({
//         dialCode,
//         phoneNumber,

//     }: any) => {
//         setDialcode(dialCode);
//         const num = dialCode + phoneNumber;
//         setPhoneNumber(phoneNumber);
//     };

//     const _onHandlerPress = () => {
//         if (global.functions.isNullOrEmpty(phoneNumber)) {
//             global.functions.ShowAlert(
//                 'Please Enter Phone Number',
//                 global.const.warning,
//             );
//             return;
//         }
//         navigation.navigate('Otp')
//     }
//     return (
//         <SafeAreaView style={styles.screen}>
//             <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
//             <KeyboardAvoidingView
//                 behavior="height"
//                 style={[styles.flexOne,]}
//                 keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
//             >

//                 <TextCustom
//                     fontSize={30}
//                     color={styleFrom.linkColor}
//                     fontWeight='700'
//                     align="center"
//                 >
//                     {translate('login.FORGOTPASS_LINK')}
//                 </TextCustom>

//                 <TextCustom
//                     fontSize={12}
//                     color={styleFrom.lightBlack}
//                     fontWeight='400'
//                     align="center"
//                     marginTop={11}
//                 >
//                     {translate('login.forgotPasswordText')}
//                 </TextCustom>

//                 <ForgotPasswprdSVG
//                     width={110}
//                     height={90}
//                     style={{ marginTop: 52, justifyContent: 'center', alignSelf: 'center' }} />

//                 <TextCustom
//                     fontSize={15}
//                     color={styleFrom.lightBlack}
//                     fontWeight='600'
//                     marginTop={10}
//                     marginBottom={8}
//                 >
//                     {translate('login.phoneNumber')}
//                 </TextCustom>

//                 <PhoneInput
//                     container={styles.container}
//                     name="Phone Number"
//                     value={phoneNumber}
//                     keyboardType="numeric"
//                     nameColor={styles.textcolor}
//                     secureTextEntry={false}
//                     onChangeNumber={(text: any) => onChangeNumber(text)}
//                 />

//                 <Button
//                     label={translate('login.resetPassword')}
//                     round={false}
//                     style={styles.buttonText}
//                     labelStyle={styles.labelText}
//                     onPress={() => _onHandlerPress()} color={''} size={''} buttonStatus={false} />
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     )
// }
// export default ForgotPin;



