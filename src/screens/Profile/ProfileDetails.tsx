import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, FlatList, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import TextCustom from '../../common/components/TextWrapper';
import { AppHeader } from '../../common/components/Header';
import translate from '../../utils/i18n';
import styleFrom from "../../assets/styles/styles";
import styles from './styles';
import { profileData } from '../../common/ConstantList';




const ProfileDetails = () => {
    const navigation = useNavigation();
    const renderItem = ({ item,index }) => (
        <View style={styles.frameDetailsCard}>
            {item.selected ?
                <View style={styles.selctedCircleView}>
                    <Icon name="check" size={16} color="#fff" />
                </View> :
                <View style={styles.unselectedCircleView} />
            }
            <View style={{ marginLeft: 17 }}>
                <TextCustom
                    fontSize={14}
                    color={styleFrom.black}
                    fontWeight='700'
                    onPress={()=>index === 0?navigation.navigate('AboutMe'): index ===1 ? navigation.navigate('BusinessInfo') : index === 2 ? navigation.navigate('MyDocs') :null}
                >
                    {item.title}
                </TextCustom>
                <TextCustom
                    fontSize={12}
                    color={styleFrom.grey}
                    fontWeight='500'
                    marginTop={4}
                >
                    {item.description}
                </TextCustom>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <AppHeader
                label="Profile"
                onLeftIconClick={() => navigation.goBack()}
                leftAlign />

            <View style={styles.detailsView}>
                <View style={styles.avatarCard}>
                    <Image style={styles.avatar} />
                    <View style={{ marginLeft: 10 }}>
                        <TextCustom
                            fontSize={18}
                            color={styleFrom.black}
                            fontWeight='700'
                        >
                            {"John "}
                        </TextCustom>
                        <TextCustom
                            fontSize={14}
                            color={styleFrom.grey}
                            fontWeight='400'
                        >
                            {"Electrician"}
                        </TextCustom>
                    </View>
                </View>

                <View style={{ backgroundColor: '#fff', marginTop: 15, }}>
                    <TextCustom
                        fontSize={14}
                        color={styleFrom.grey}
                        fontWeight='400'
                    >
                        {"Frame"}
                    </TextCustom>
                    <ScrollView
                        horizontal
                        style={styles.frameParentView}
                    >
                        {profileData.map((person) => {
                            return (
                                <View style={styles.frameCardView}>
                                    {person.selected ?
                                        <View style={styles.selctedCard} /> :
                                        <View style={styles.unSelectedCard} />
                                    }
                                </View>
                            );
                        })}
                    </ScrollView>

                    <FlatList
                        data={profileData}
                        style={styles.flatListItem}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
};


export default ProfileDetails;