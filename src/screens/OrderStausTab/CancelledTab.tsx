import React, { useState, useEffect} from 'react';
import {
    Pressable,
    View,
    Keyboard,
    StatusBar,
    TextInput,
    FlatList,
    Text
} from 'react-native';
import styles from './styles';
import { bookingDetail } from '../../common/ConstantList';
import styleFrom from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterIcon from '../../assets/svg/Dashboard/FilterIcon.svg';
import translate from '../../utils/i18n';
import { useDispatch, useSelector } from 'react-redux';

const bookingDetails = [
    {
        name: 'Harry Styles',
        time: '11 Apr, 02:30 pm',
        definition: 'Facial for glow - Diamond facial',
        definition2: 'Clean up',
        orderId: '6587412',
        method: '* Payment Done by Cash',
    },
];

const CancelledTab = () => {
    const [searchName, setSearchName] = useState('');
    const [filterdata, setFilteredData] = useState(bookingDetails);
    const [plus, setplus] = useState('')
    const dispatch = useDispatch();
    const loginID = useSelector(
        (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
      );
      const cancelledResponse = useSelector(
        (state: RootState) => state?.root?.auth?.cancelledData?.Details
      );
    useEffect(() => {
        setFilteredData(bookingDetails);
    }, []);

    const searchFilterFunction = text => {
        if (text) {
            const newData = filterdata.filter(function (item) {
                const itemData = item.definition2
                    ? item.definition2.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearchName(text);
        } else {
            setFilteredData(bookingDetails);
            setSearchName(text);
        }
    };
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={{ marginLeft: 12, marginTop: 4 }}>
                <View style={styles.categoryTitleView}>
                    <Text style={styles.title}>{item?.listservicesDetails?.provider_details?.businessname}</Text>
                    <Text style={styles.categoryTitle}>{"Order ID:"}{item?.order_id}</Text>
                </View>
                <Text style={styles.timeText}>{item?.date}</Text>
                <Text style={{fontWeight:'700',fontSize:10,color:'#000'}}>₹ {Number(item?.listservicesDetails?.BillingDetails?.amount)+Number(item?.listservicesDetails?.BillingDetails?.fee)+Number(item?.listservicesDetails?.BillingDetails?.tax)}</Text>
                <View style={styles.defintionView}>
                    <View style={styles.dot} />
                    <Text style={styles.categoryText}>{item?.listservicesDetails?.description1}</Text>
                </View>
                <View style={[styles.defintionView, { marginTop: 5 }]}>
                    <View style={styles.dot} />
                    <Text style={styles.categoryText}>{item?.listservicesDetails?.description2}</Text>
                </View>
                <View style={{ height: 25, width: '50%', borderRadius: 15, backgroundColor: '#ABABAB', marginTop: 16, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: '#fff' }}>Reason for cancellation</Text>
                </View>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={[styles.categoryText, { marginTop: 8, marginBottom: 20 }]}>{item?.reason_cancel}</Text>
                </View>

            </View>
        </View>
    );
    useEffect(() => {
    const params = {
        user_id: loginID,
        order_status: 'cancelled'
      };
      dispatch(global.actions.cancelledCall(params));
    }, []);
    return (
        <Pressable style={{ flex: 1, }} onPress={Keyboard.dismiss}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#fff'} />
            <View style={{ flexDirection: 'row',justifyContent:'center', }}>
                <View style={styles.searchSection}>
                    <Icon
                        style={styles.searchIcon}
                        name="ios-search"
                        size={15}
                        color="#757575"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={translate('login.search')}
                        onChangeText={text => searchFilterFunction(text)}
                        underlineColorAndroid="transparent"
                        value={searchName}
                        placeholderTextColor={"#757575"}
                    />
                </View>

                <View style={styles.filterIconView}>
                    <FilterIcon width={25} height={25} />
                </View>
            </View>
            <FlatList
                data={cancelledResponse}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.alertView}>
                <Text style={styles.alertAstrisk}>*</Text>
                <Text style={styles.alertTxt}>{"Refunds if applicable will be issued within 7 days"}</Text>
            </View>
        </Pressable>
    );

};



export default CancelledTab;
