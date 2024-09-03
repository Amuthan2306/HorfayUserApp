import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {Text,View} from'react-native';
import {
    Pressable,
    Dimensions,
    Keyboard,
    StatusBar,
} from 'react-native';
import OTPInput from '../../../common/components/OTPInput';
import { ButtonContainer, ButtonText } from '../../../common/components/OTPInput/styles';
import styles from '../styles'
import TextCustom from '../../../common/components/TextWrapper';
import translate from '../../../utils/i18n';
import styleFrom from "../../../assets/styles/styles";
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerifyPin = props => {
    const navigation = useNavigation();
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    const homeNavigation = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }
    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

            <TextCustom
                    fontSize={32}
                    color={styleFrom.lightBlack}
                    fontWeight='700'
                    marginBottom={15}
                    marginLeft={30}
                >
                    {translate('login.enterYurPin')}
                </TextCustom>
            
                <TextCustom
                    fontSize={16}
                    color={'#6B7280'}
                    fontWeight='400'
                    marginBottom={60}
                    marginLeft={30}
                >
                    {translate('login.verifyPinText')}
                </TextCustom>

            <OTPInput
                code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
            />

            <ButtonContainer
                disabled={!isPinReady ? null : homeNavigation()}
                style={{
                    backgroundColor: !isPinReady ? "#F5F5F5" : "#000000",
                    alignItems: "center",
                    justifyContent:'center',
                    alignSelf:'center'
                }}
            >
                <ButtonText
                    style={{
                        color: !isPinReady ? styleFrom.buttonText : "#EEEEEE",
                        fontWeight:'700',
                        fontSize:15
                        //textTransform: 'uppercase',
                    }}
                >
                    Continue
                </ButtonText>
            </ButtonContainer>
            <TouchableOpacity style={{flexDirection:'row',margin:5}} onPress={()=>navigation.navigate('ForgotPin')}>
                <View style={{flex:0.75}}></View>
                <Text style={{flex:0.25, fontWeight:'700',fontSize:12,color:'#120D26'}}>Forgot Pin</Text>
            </TouchableOpacity>
        </Pressable>
        
    );

};



export default VerifyPin;
