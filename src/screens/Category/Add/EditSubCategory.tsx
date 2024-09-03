import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../common/components/Button';
import { AppHeader } from '../../../common/components/Header';
import InputText from '../../../common/components/InputText';
import translate from '../../../utils/i18n';
import styles from '../../Profile/styles'
import styleFrom from "../../../assets/styles/styles";
import TextCustom from '../../../common/components/TextWrapper';

const EditSubCategory = () => {
    const navigation = useNavigation();
    const [isPriceAmount, setPriceAmount] = useState(0);
    const [isDescription, setDescription] = useState('');
    const [isIncluded, setIncluded] = useState('');
    const [panNum, setPanNum] = useState('');
    const [gstNum, setGSTNum] = useState('')
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader
                label="Facial "
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />

            <View style={styles.detailsView}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                 style={{ width: '98%', padding: 10, marginTop: 15, height: '100%' }}>

                    <TextCustom
                        fontSize={12}
                        color={styleFrom.linkColor}
                        fontWeight='700'
                    >
                        {translate('dashboard.setPrice')}
                    </TextCustom>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'red', fontWeight: '500', fontSize: 8 }}>*</Text>
                        <Text style={{ color: styleFrom.black, fontWeight: '500', fontSize: 8 }}>{translate('dashboard.setPriceDescription')}</Text>
                    </View>

                    <InputText
                        value={isPriceAmount}
                        onChangeText={(text: string) => setPriceAmount(text)}
                        placeHolder={"100"}
                        maxLength={3}
                        keyboardType='numeric'
                        inputTextStyle={styles.setPriceView} />

                    <TextCustom
                        fontSize={12}
                        color={styleFrom.linkColor}
                        fontWeight='700'
                        marginTop={17}
                    >
                        {translate('dashboard.description')}
                    </TextCustom>


                    <InputText
                        value={isDescription}
                        onChangeText={(text: string) => setDescription(text)}
                        maxLength={1000}
                        multiline
                        inputTextStyle={styles.descriptionView} />

                    <TextCustom
                        fontSize={12}
                        color={styleFrom.linkColor}
                        fontWeight='700'
                        marginTop={17}
                    >
                        {translate('dashboard.included')}
                    </TextCustom>

                    <InputText
                        value={isIncluded}
                        onChangeText={(text: string) => setIncluded(text)}
                        maxLength={1000}
                        multiline
                        inputTextStyle={styles.descriptionView} />
                    
                    <TextCustom
                        fontSize={12}
                        color={styleFrom.linkColor}
                        fontWeight='700'
                        marginTop={17}
                    >
                        {translate('dashboard.excluded')}
                    </TextCustom>

                    <InputText
                        value={isIncluded}
                        onChangeText={(text: string) => setIncluded(text)}
                        maxLength={1000}
                        multiline
                        inputTextStyle={styles.descriptionView} />
                    
                    <TextCustom
                        fontSize={12}
                        color={styleFrom.linkColor}
                        fontWeight='700'
                        marginTop={17}
                    >
                        {translate('dashboard.faqs')}
                    </TextCustom>

                    <InputText
                        value={isIncluded}
                        onChangeText={(text: string) => setIncluded(text)}
                        maxLength={500}
                        multiline
                        inputTextStyle={styles.faqView}/>


                    <Button
                        label={"Submit"}
                        round={false}
                        style={styles.meduimButton}
                        labelStyle={styles.labelText}
                       // onPress={() => navigation.navigate('AdditionalInfo')} 
                        />

                </ScrollView>
            </View>

        </SafeAreaView>
    )
};



export default EditSubCategory;