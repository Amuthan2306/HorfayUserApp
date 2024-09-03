import React, { useState, useRef } from 'react';
import {
    Pressable,
    View,
    Keyboard,
    StatusBar,
    TextInput,
    FlatList,
    Text, TouchableOpacity
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterIcon from '../../assets/svg/Dashboard/FilterIcon.svg';
import Button from '../../common/components/Button';
import { useEffect } from 'react';
import SmallCircle from '../../common/components/SmallCircle';
import styleFrom from '../../assets/styles/styles';
import { useNavigation } from '@react-navigation/native';
import { bookedDetails } from '../../common/ConstantList';
import translate from '../../utils/i18n';
import { useDispatch, useSelector } from 'react-redux';


const CompletedTab = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const [filterdata, setFilteredData] = useState(bookedDetails);
    const [newFilterdata, setNewFilteredData] = useState(bookedDetails);
    const loginID = useSelector((state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,);

    const completedResponse = useSelector((state: RootState) => state?.root?.auth?.completeddData?.Details);


    useEffect(() => {
        setFilteredData(bookedDetails);
        setNewFilteredData(bookedDetails);
    }, [])

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = filterdata.filter(function (item) {
                const itemData = item.definition2 ? item.definition2.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearchName(text);
        } else {
            setFilteredData(bookedDetails);
            setSearchName(text);
        }
    };
    useEffect(() => {
        const params = {
            user_id: loginID,
            order_status: 'completed'
          };
          dispatch(global.actions.completededCall(params));
        }, []);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{ marginLeft: 12, marginTop: 4, }}>
                <View style={styles.categoryTitleView}>
                    <Text style={styles.title}>{item?.listservicesDetails?.provider_details?.businessname}</Text>
                    <Text style={styles.categoryTitle}>{"Order ID:" + item.order_id}</Text>

                </View>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={styles.timeText}>{item?.date}</Text>
                    <Text style={styles.methodText}>{item?.payment_type}</Text>
                </View>

                <View style={styles.descView}>
                    <SmallCircle color={styleFrom.iconColor} />
                    <Text style={styles.descTextStyle}>{item?.listservicesDetails?.description}</Text>
                </View>
                <View style={styles.descView}>
                    <SmallCircle color={styleFrom.iconColor} />
                    <Text style={styles.descTextStyle}>{item?.listservicesDetails?.description1}</Text>
                </View>
                <View style={styles.descView}>
                    <SmallCircle color={styleFrom.iconColor} />
                    <Text style={styles.descTextStyle}>{item?.listservicesDetails?.description2}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('ReportIssues')} style={{ backgroundColor: "#000", justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: 50, marginBottom:10,marginTop:9 }}>
                <Text style={{ color: "#fff", fontSize: 14, fontWeight: '700' }}>{translate('login.reportIssue')}</Text>
            </TouchableOpacity>

        </View>
    );


    return (
        <Pressable style={{ flex: 1, }} onPress={Keyboard.dismiss}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
            <View style={{ flexDirection: 'row', marginLeft: 15, marginBottom: 15 }}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="ios-search" size={15} color="#757575" />
                    <TextInput
                        style={styles.input}
                        placeholder={translate('login.search')}
                        onChangeText={(text) => searchFilterFunction(text)}
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#757575"
                        value={searchName}
                    />
                </View>

                <View style={styles.filterIconView}>
                    <FilterIcon width={25} height={25} />
                </View>
            </View>

            <FlatList
                data={completedResponse}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <View style={styles.alertView}>
                <Text style={styles.alertAstrisk}>*</Text>
                <Text style={styles.alertTxt}>{"Raise a dispute button should remain there for only 12 hours after the booking"}</Text>
            </View>


        </Pressable>
    );

};



export default CompletedTab;
