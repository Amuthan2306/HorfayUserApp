import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../common/components/Button';
import { AppHeader } from '../../common/components/Header';
import InputText from '../../common/components/InputText';
import translate from '../../utils/i18n';
import styles from './styles'

const AdditionalInfo = () => {
    const navigation = useNavigation();
    const [tradeCertify, settradeCertify] = useState('');
    const [uploadCertify, setuploadCertify] = useState('');
    const [convictedCrime, setconvictedCrime] = useState('');
    const [necessaryCrime, setnecessaryCrime] = useState('');
    const [physicallDiasability, setphysicallDiasability] = useState('');
    const [tellUsDisability, settellUsDisability] = useState('');
    const [ownVehicle, setownVehicle] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader
                label="Additional Information"
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />

            <View style={styles.detailsView}>
                <ScrollView style={{ height: '100%', backgroundColor: '#fff', padding: 10, marginTop: 15, }}>

                    <View style={styles.textInputView}>
                        <InputText
                            value={tradeCertify}
                            onChangeText={(text: string) => settradeCertify(text)}
                            placeHolder={translate('dashboard.tradeCertify')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={uploadCertify}
                            onChangeText={(text: string) => setuploadCertify(text)}
                            placeHolder={translate('dashboard.uploadCertify')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={convictedCrime}
                            onChangeText={(text: string) => setconvictedCrime(text)}
                            placeHolder={translate('dashboard.convictedCrime')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={necessaryCrime}
                            onChangeText={(text: string) => setnecessaryCrime(text)}
                            placeHolder={translate('dashboard.necessaryCrime')}
                            maxLength={100}
                            keyboardType='numeric'
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={physicallDiasability}
                            onChangeText={(text: string) => setphysicallDiasability(text)}
                            placeHolder={translate('dashboard.physicallDiasability')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={tellUsDisability}
                            onChangeText={(text: string) => settellUsDisability(text)}
                            placeHolder={translate('dashboard.tellUsDisability')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={ownVehicle}
                            onChangeText={(text: string) => setownVehicle(text)}
                            placeHolder={translate('dashboard.ownVehicle')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <Button
                        label={"Submit"}
                        round={false}
                        style={styles.buttonText}
                        labelStyle={styles.labelText}
                        onPress={() => null} />

                </ScrollView>
            </View>


        </SafeAreaView>
    )
};

export default AdditionalInfo;