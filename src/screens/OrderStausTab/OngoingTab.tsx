import React, { useState, useRef } from 'react';
import {
  Pressable,
  View,
  Keyboard,
  StatusBar,
  TextInput,
  FlatList,
  Text,
  Alert,Platform
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterIcon from '../../assets/svg/Dashboard/FilterIcon.svg';
import Button from '../../common/components/Button';
import { useEffect } from 'react';
import ReactNativeModal from 'react-native-modal';
import Swiper from "../../common/components/Swiper";
import SmallCircle from '../../common/components/SmallCircle';
import styleFrom from '../../assets/styles/styles';
import TextCustom from '../../common/components/TextWrapper';
import { BillingDeatilsCard } from "../../common/components/BillingDetailsCard";
import { ServiceCard } from "../../common/components/ServiceCard";
import { ServiceAddressCard } from "../../common/components/ServiceAddressCard";
import translate from '../../utils/i18n';
import { useNavigation } from '@react-navigation/native';
import { useDispatch ,useSelector} from 'react-redux';

const OngoingTab = ({ activeTab }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchName, setSearchName] = useState('');
  const [viewDetailModal, setViewDetailModal] = useState(false);
  const loginID = useSelector(
    (state: RootState) => state?.root?.auth?.loginDetails?.Details?.id,
  );

  const successBookingResponse = useSelector(
    (state: RootState) => state?.root?.auth?.successBookingList,
  );
 
  const stages = [
    {
      id: 0,
      src: require("../../assets/image/facial.jpg")
    },
    {
      id: 1,
      src: require("../../assets/image/pedicure.jpg")
    },
    {
      id: 2,
      src: require("../../assets/image/facial.jpg")
    }
  ];
 
  useEffect(() => {
     setTimeout(() => {
      const params = {
        user_id: loginID,
        order_status: 'inProgress'
      };
      dispatch(global.actions.successBookingCall(params));
  
     }, 1000);
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
          <Text style={styles.title}>{item.listservicesDetails?.provider_details?.businessname}</Text>
          <Text style={styles.categoryTitle}>{"Order ID:"}{item.order_id}</Text>
        </View>
        
        <Text style={styles.timeText}>{item.date}</Text>
        <Text style={{fontWeight:'700',fontSize:7,color:'#757575',marginTop:9}}>{`*Payment Done by ${successBookingResponse?.Details?.[0]?.payment_type}`}</Text>
        <View style={styles.defintionView}>
          <View style={styles.dot} />
          <Text style={styles.categoryText}>{item?.listservicesDetails?.duration}</Text>
        </View>
        <View style={[styles.defintionView, { marginTop: 5 }]}>
          <View style={styles.dot} />
          <Text style={styles.categoryText}>{item?.listservicesDetails?.description}</Text>
        </View>
      </View>
      <Button
        label={"Cancel Booking"}
        round={false}
        onPress={() => navigation.navigate('CancelBooking')}
        color="black"
        size="small"
        style={styles.smallbuttonView}
        labelStyle={styles.buttonText}
      />
    </View>
  );

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <StatusBar barStyle={'dark-content'}  />
      <View style={{ flexDirection: 'row',marginLeft:15,marginBottom:15 }}>
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
        data={successBookingResponse?.Details}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <ReactNativeModal
        avoidKeyboard={true}
        style={{ margin: 0 }}
        onBackdropPress={() => setViewDetailModal(false)}
        isVisible={viewDetailModal}
        onBackButtonPress={() => setViewDetailModal(false)}>
        <View style={{
          marginTop: 'auto',
          backgroundColor: '#fff',
          height: '88%',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10
        }}>
          <Swiper swiperImage={stages} />

          <View style={{ flexDirection: 'row', width: '94%', justifyContent: 'space-between', alignSelf: 'center', height: 50, marginTop: 20}}>
            <View>
              <TextCustom
                fontSize={16}
                color={styleFrom.lightBlack}
                fontWeight="700"
              >
                {"Diamond Facial"}
              </TextCustom>
              <TextCustom
                fontSize={14}
                color={styleFrom.lightBlack}
                fontWeight="700"
                marginTop={5}
              >
                {'\u20B9'}{"699"}
              </TextCustom>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center', marginTop: 8, marginBottom: 10 }}>
            <SmallCircle color="grey" />
            <Text style={styles.subCategoryText}>{"For all skin types. Pinacolada mask."}</Text>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center', }}>
            <SmallCircle color="grey" />
            <Text style={styles.subCategoryText}>{"6-step process. Includes 10-min massage"}</Text>
          </View>

          <BillingDeatilsCard />
          <ServiceAddressCard />
          <View style={{ height: '10%' }} />
        </View>
      </ReactNativeModal >

      <View style={styles.alertView}>
        <Text style={styles.alertAstrisk}>*<Text style={styles.alertTxt}>{" Cancel booking button should remain there for only 12 hours after the booking."}</Text></Text>
      </View>
    </Pressable>
  );
};

export default OngoingTab;
