import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { AppHeader } from '../../../common/components/Header';
import Button from "../../../common/components/Button";
import InputText from "../../../common/components/InputText";
import TextCustom from "../../../common/components/TextWrapper";
import translate from "../../../utils/i18n";
import styles from "../../Profile/styles";
import styleForm from "../../../assets/styles/styles";
import PhoneInput from "../../../common/components/PhoneInput";
export const ContactUs = () => {
    const navigation = useNavigation();
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [descrip, setdescrip] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dialcode, setDialcode] = useState('');
    const phoneInput = useRef<PhoneInput>(null);

    const onChangeNumber = ({
        dialCode,
        phoneNumber,

    }: any) => {
        setDialcode(dialCode);
        const num = dialCode + phoneNumber;
        setPhoneNumber(phoneNumber);
    };
    const _onHandlerPress = () => {
        if (global.functions.isNullOrEmpty(name)) {
            global.functions.ShowAlert(translate('contactus.name'), global.const.warning);
            
        } else if (global.functions.isNullOrEmpty(email)) {
            global.functions.ShowAlert(translate('contactus.email'), global.const.warning);
            
        } else if (global.functions.ValidateEmail(email)) {
            global.functions.ShowAlert(translate('contactus.validmail'),global.const.warning
            );
            return;
          } else if (global.functions.isNullOrEmpty(phoneNumber)) {
            global.functions.ShowAlert(translate('contactus.mobile'),global.const.warning,
            );
        }else if (global.functions.isNullOrEmpty(descrip)) {
            global.functions.ShowAlert(translate('contactus.descrip'), global.const.warning);
            
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader
                label={translate("contactus.contactus")}
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />
            <View style={styles.detailsView}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width: '98%', padding: 10, marginTop: 15, height: '100%' }}>

                    <TextCustom
                        fontSize={12}
                        color={styleForm.linkColor}
                        fontWeight='700'
                        marginTop={17}>
                        {translate('contactus.Name')}
                    </TextCustom>

                    <InputText
                        value={name}
                        onChangeText={(text: string) => setname(text.replace(/[^a-z.A-Z]/g, ''))}
                        maxLength={500}
                        multiline
                        inputTextStyle={styles.faqView} />
                    <TextCustom
                        fontSize={12}
                        color={styleForm.linkColor}
                        fontWeight='700'
                        marginTop={17}>
                        {translate('contactus.EMAILPlaceholders')}
                    </TextCustom>

                    <InputText
                        value={email}
                        onChangeText={(text: string) => setemail(text)}
                        maxLength={500}
                        multiline
                        inputTextStyle={styles.faqView} />
                    <TextCustom
                        fontSize={12}
                        color={styleForm.linkColor}
                        fontWeight='700'
                        marginTop={17}>
                        {translate('contactus.phoneNumber')}
                    </TextCustom>

                    <PhoneInput
                        container={styles.container}
                        name="Phone Number"
                        value={phoneNumber}
                        keyboardType="numeric"
                        nameColor={styles.textcolor}
                        secureTextEntry={false}
                        onChangeNumber={text => onChangeNumber(text)}
                    />
                    <TextCustom
                        fontSize={12}
                        color={styleForm.linkColor}
                        fontWeight='700'
                        marginTop={17}>
                        {translate('contactus.description')}
                    </TextCustom>

                    <InputText
                        value={descrip}
                        onChangeText={(text: string) => setdescrip(text)}
                        maxLength={1000}
                        multiline
                        inputTextStyle={styles.descriptionView} />
               

               <View style={{paddingTop:60}}>
                        <Button
                            label={translate("contactus.submit")}
                            onPress={() => _onHandlerPress()}
                            round={false}
                            style={styles.meduimButton}
                            labelStyle={styles.labelText}
                        />
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
