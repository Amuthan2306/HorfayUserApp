import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tab from '../../common/components/Tab';
import styles from './styles'
import CancelledTab from './CancelledTab';

const OrderStatusTab = () => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [routes, setroutes] = useState([
    {
      key: 'Cancel Booking',
      title: `Cancel Booking`,
    },
  
  ]);

  useEffect(() => {
    setroutes([
      {
        key: 'Cancel Booking',
        title: 'Cancel Booking',
      },
     
    ]);
  }, []);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'Cancel Booking':
        return <CancelledTab />;
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
        }}>
        <Tab
          key={item.title + indices}
          route={item}
          index={index}
          indices={indices}
          setIndex={setIndex}
          count={0}
          tabHeaderLabelStyle={{width:130}}

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
          style={{flex:1}}
          data={props.navigationState.routes}
          renderItem={({item, index}) => renderTab(item, index)}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };


  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#fff'}}>

      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={true}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    </SafeAreaView>
  );
};
export default OrderStatusTab;
