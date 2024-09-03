import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../common/components/Button';
import { AppHeader } from '../../common/components/Header';
import InputText from '../../common/components/InputText';
import translate from '../../utils/i18n';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo'
import BottomModal from '../../common/components/BottomModal';

const genderProps = [
    { key: '1', value: 'Male' },
    { key: '2', value: 'Female' },
    { key: '3', value: 'Transgender' },
];

const maritalStats = [
    { key: '1', value: 'Single' },
    { key: '2', value: 'Married' },
    { key: '3', value: 'Widow' },
];

const qualification = [
    { key: '1', value: 'BE' },
    { key: '2', value: 'Higer Education' },
    { key: '3', value: 'Diplomo' },
    { key: '4', value: 'B.Sc' },
]


const Aboutme = () => {
    const navigation = useNavigation();
    const [userName, setUsername] = useState('');
    const [genderModal, setGenderModal] = useState(false);
    const [maritalStatusModal, setMaritalStatusModal] = useState(false);
    const [qualificationModal, setQualificationModal] = useState(false);
    const [genderName, setGenderName] = useState('');
    const [maritalStatus, setmaritalStatus] = useState('');
    const [qualificationStatus, setQualification] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <AppHeader
                label="About Me"
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />
            <ScrollView>
                <View style={styles.detailsView}>
                    <View style={{ width: '98%', backgroundColor: '#fff', padding: 10, marginTop: 15, height: '100%' }}>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.fullName')}
                                maxLength={100}
                                inputTextStyle={{ padding: 10 }} />
                        </View>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.mobileNum')}
                                maxLength={100}
                                inputTextStyle={{ padding: 10 }} />
                        </View>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.emailAddress')}
                                maxLength={100}
                                
                                inputTextStyle={{ padding: 10 }} />
                        </View>
                        <View style={[styles.textInputView, { justifyContent: 'space-between' }]}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={genderName === ""?translate('dashboard.gender'):genderName}
                                maxLength={100}
                                editable={false}
                                placeholderTextColor={genderName === "" ? 'grey' : '#000'}
                                inputTextStyle={{ padding: 10, }} />
                            <Icon
                                onPress={() => setGenderModal(true)}
                                name="chevron-thin-down"
                                color={"grey"}
                                size={14}
                                style={{ marginRight: 18 }} />
                        </View>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.age')}
                                maxLength={100}
                                inputTextStyle={{ padding: 10 }} />
                        </View>
                        <View style={[styles.textInputView, { justifyContent: 'space-between' }]}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={maritalStatus === ""?translate('dashboard.martialStatus'):maritalStatus}
                                maxLength={100}
                                editable={false}
                                placeholderTextColor={maritalStatus === "" ? 'grey' : '#000'}
                                inputTextStyle={{ padding: 10 }} />
                            <Icon
                                onPress={() => setMaritalStatusModal(true)}
                                name="chevron-thin-down"
                                color={"grey"}
                                size={14}
                                style={{ marginRight: 18 }} />
                        </View>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.permannentAddress')}
                                maxLength={100}
                                inputTextStyle={{ padding: 10 }} />
                        </View>
                        <View style={styles.textInputView}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={translate('dashboard.city')}
                                maxLength={100}
                                inputTextStyle={{ padding: 10 }} />
                        </View>

                        <View style={[styles.textInputView, { justifyContent: 'space-between' }]}>
                            <InputText
                                value={userName}
                                onChangeText={(text: string) => setUsername(text)}
                                placeHolder={qualificationStatus === ""?translate('dashboard.yourQualification'):qualificationStatus}
                                maxLength={100}
                                editable={false}
                                placeholderTextColor={qualificationStatus === "" ? 'grey' : '#000'}
                                inputTextStyle={{ padding: 10, }} />
                            <Icon
                                onPress={() => setQualificationModal(true)}
                                name="chevron-thin-down"
                                color={"grey"}
                                size={14}
                                style={{ marginRight: 18 }} />
                        </View>

                        <Button
                            label={"Submit"}
                            round={false}
                            style={styles.buttonText}
                            labelStyle={styles.labelText}
                            onPress={() => navigation.navigate('BusinessInfo')} />
                    </View>

                </View>
            </ScrollView>
           
           {/* Gender Selction Modal */}
            <BottomModal
                onDrop={() => setGenderModal(false)}
                visible={genderModal}>
                <View style={{ marginBottom: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 12 }}>
                            {genderProps?.length !== 0 &&
                                genderProps?.map((item: any) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.modalParentContainer}
                                            onPress={() => {
                                                setGenderName(item.value)
                                                setGenderModal(false)
                                            }}>
                                            <Text style={[styles.modalText]}>
                                                {item.value}
                                            </Text>
                                            <View style={styles.radioCircleModal}>
                                                {genderName === item.value && (
                                                    <View style={styles.selectedRb} />
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                    </ScrollView>
                </View>

            </BottomModal>

            {/* Marital Status Modal */}
            <BottomModal
                onDrop={() => setMaritalStatusModal(false)}
                visible={maritalStatusModal}>
                <View style={{ marginBottom: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 12 }}>
                            {maritalStats?.length !== 0 &&
                                maritalStats?.map((item: any) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.modalParentContainer}
                                            onPress={() => {
                                                setmaritalStatus(item.value)
                                                setMaritalStatusModal(false)
                                            }}>
                                            <Text style={[styles.modalText]}>
                                                {item.value}
                                            </Text>
                                            <View style={styles.radioCircleModal}>
                                                {maritalStatus === item.value && (
                                                    <View style={styles.selectedRb} />
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                    </ScrollView>
                </View>

            </BottomModal>
           
           {/* Qualification Status Modal */}
            <BottomModal
                onDrop={() => setQualificationModal(false)}
                visible={qualificationModal}>
                <View style={{ marginBottom: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginTop: 12 }}>
                            {qualification?.length !== 0 &&
                                qualification?.map((item: any) => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.modalParentContainer}
                                            onPress={() => {
                                                setQualification(item.value)
                                                setQualificationModal(false)
                                            }}>
                                            <Text style={[styles.modalText]}>
                                                {item.value}
                                            </Text>
                                            <View style={styles.radioCircleModal}>
                                                {qualificationStatus === item.value && (
                                                    <View style={styles.selectedRb} />
                                                )}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                        </View>
                    </ScrollView>
                </View>

            </BottomModal>


        </SafeAreaView>
    )
};

export default Aboutme;