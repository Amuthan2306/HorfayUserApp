import React, { useEffect, useState } from 'react';
import { View, Dimensions, StatusBar } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab from '../../common/components/Tab';

import ChooseLangugae from '../ChooseLanguage';
import styles from './styles'
import CompletedTab from './CompletedTab';
import CancelledTab from './CancelledTab';
import translate from '../../utils/i18n';
import OngoingTab from './OngoingTab';
const OrderStatusTab = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [routes, setroutes] = useState([
    {
      key: 'Ongoing',
      title: `Ongoing`,
    },
    {
      key: 'Completed',
      title: `Completed`,
    },
    {
      key: 'Cancelled',
      title: `Cancelled`,
    },
  ]);

  useEffect(() => {
    setroutes([
      {
        key: 'Ongoing',
        title: translate('login.ongoingtab'),
      },
      {
        key: 'Completed',
        title: translate('login.completedtab'),
      },
      {
        key: 'Cancelled',
        title: translate('login.canceltab'),
      },
    ]);
  }, []);

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'Completed':
        return <CompletedTab />;
      case 'Cancelled':
        return <CancelledTab />;
      case 'Ongoing':
        return <OngoingTab />
    }
  };

  const renderTab = (item: any, indices: any) => {
    return (
      <View
        key={item.title + indices}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //width:110,
        }}>
        <Tab
          key={item.title + indices}
          route={item}
          index={index}
          indices={indices}
          setIndex={setIndex}
          count={0}
          indicatorStyle={{
            marginLeft: 0,
            width: '100%',
          }}
        />
      </View>
    );
  };
  const renderTabBar = (props: any) => {
    return (
      <View style={styles.subHeader}>
        <FlatList
          horizontal
          data={props.navigationState.routes}
          renderItem={({ item, index }) => renderTab(item, index)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };


  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      </ScrollView>
    </SafeAreaView>
  );
};
export default OrderStatusTab;
