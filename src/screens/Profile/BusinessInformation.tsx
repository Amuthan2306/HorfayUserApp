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

const BusinessInformation = () => {
    const navigation = useNavigation();
    const [busName, setbusName] = useState('');
    const [ageBus, setBusAge] = useState('');
    const [typeBus, setTypeBus] = useState('');
    const [panNum, setPanNum] = useState('');
    const [gstNum, setGSTNum] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader
                label="Business Information"
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />

            <View style={styles.detailsView}>
                <ScrollView style={{ width: '98%', backgroundColor: '#fff', padding: 10, marginTop: 15, height: '100%' }}>

                    <View style={styles.textInputView}>
                        <InputText
                            value={busName}
                            onChangeText={(text: string) => setbusName(text)}
                            placeHolder={translate('dashboard.busName')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={ageBus}
                            onChangeText={(text: string) => setBusAge(text)}
                            placeHolder={translate('dashboard.ageOfBus')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={typeBus}
                            onChangeText={(text: string) => setTypeBus(text)}
                            placeHolder={translate('dashboard.typeOfBus')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={panNum}
                            onChangeText={(text: string) => setPanNum(text)}
                            placeHolder={translate('dashboard.panNo')}
                            maxLength={100}
                            keyboardType='numeric'
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <View style={styles.textInputView}>
                        <InputText
                            value={gstNum}
                            onChangeText={(text: string) => setGSTNum(text)}
                            placeHolder={translate('dashboard.GSTNo')}
                            maxLength={100}
                            inputTextStyle={{ padding: 10 }} />
                    </View>

                    <Button
                        label={"Submit"}
                        round={false}
                        style={styles.buttonText}
                        labelStyle={styles.labelText}
                        onPress={() => navigation.navigate('AdditionalInfo')} />

                </ScrollView>
            </View>


        </SafeAreaView>
    )
};

export default BusinessInformation;