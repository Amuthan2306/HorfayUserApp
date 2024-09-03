import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { Platform, Pressable, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../common/components/Button';
import { AppHeader } from '../../common/components/Header';
import InputText from '../../common/components/InputText';
import translate from '../../utils/i18n';
import styles from './styles'
import styleFrom from "../../assets/styles/styles";
import TextCustom from '../../common/components/TextWrapper';
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
} from 'react-native-document-picker'

const MyDocuments = () => {
    const navigation = useNavigation();
    const [result, setResult] = React.useState<
        Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
    >()

    const handleError = (err: unknown) => {
        if (DocumentPicker.isCancel(err)) {
            console.warn('cancelled')
            // User cancelled the picker, exit any dialogs or menus and move on
        } else if (isInProgress(err)) {
            console.warn('multiple pickers were opened, only the last will be considered')
        } else {
            throw err
        }
    }

    const onPickDocuments = async () => {
        try {
            const pickerResult = await DocumentPicker.pickMultiple({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
            })
            console.info("Picker result", pickerResult)
            setResult([pickerResult])

        } catch (e) {
            handleError(e)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader
                label="My Documents"
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />

            <View style={styles.detailsView}>
                <ScrollView style={{ width: '98%', backgroundColor: '#fff', padding: 10, marginTop: 15, height: '100%' }}>

                    <TextCustom
                        fontSize={15}
                        color={styleFrom.lightBlack}
                        fontWeight='600'
                        marginTop={15}
                    >
                        {translate('dashboard.idPrrof')}
                    </TextCustom>
                    <ChooseFileView onPress={() => onPickDocuments()} />

                    <TextCustom
                        fontSize={15}
                        color={styleFrom.lightBlack}
                        fontWeight='600'
                        marginTop={15}
                    >
                        {translate('dashboard.redidencyProof')}
                    </TextCustom>
                    <ChooseFileView />

                    <TextCustom
                        fontSize={15}
                        color={styleFrom.lightBlack}
                        fontWeight='600'
                        marginTop={15}
                    >
                        {translate('dashboard.busRegistration')}
                    </TextCustom>
                    <ChooseFileView />

                    <TextCustom
                        fontSize={15}
                        color={styleFrom.lightBlack}
                        fontWeight='600'
                        marginTop={15}
                    >
                        {translate('dashboard.others')}
                    </TextCustom>
                    <ChooseFileView />




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


const ChooseFileView = ({ onPress }) => {
    return <View style={styles.textInputView}>
        <Pressable onPress={() => onPress()} style={styles.chooseFileView}>
            <Text style={styles.chooseFileText}>{translate('dashboard.chooseFile')}</Text>
        </Pressable>
        <TextCustom
            fontSize={14}
            color={styleFrom.darkGrey}
            marginLeft={30}
            fontWeight='500'>
            {translate('dashboard.noFileChoose')}
        </TextCustom>
    </View>
}

export default MyDocuments;