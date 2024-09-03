import React, { useState } from 'react';
import { Button, Image, Text,  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
import Animated from 'react-native-reanimated';
import Home from '../screens/Home';
import OrderStatusTab from '../screens/OrderStausTab';
import NotificationScreen from '../screens/Notifications/index';
import WalletScreen from '../screens/Wallet';
import { createStackNavigator } from '@react-navigation/stack';
import { Aboutme, ProfileDetails,BusinessInfo,AdditionalInfo,MyDocs } from '../screens/Profile';
import AllCategory from '../screens/Category/AllCategories';
import Chats from '../screens/Chats';
import { ContactUs } from '../screens/Category/Add/ContactUs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import ChatScreen from '../screens/Chats/ChatScreen';
import CancelledTab from '../screens/CancelBooking';
import { ReportIssues } from '../screens/OrderStausTab/ReportIssues';
import issueDetails from '../screens/OrderStausTab/IssueDetails';
function MyNonTabStack() {
  const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown:false,
       }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="AboutMe" component={Aboutme} />
        <Stack.Screen name="BusinessInfo" component={BusinessInfo} />
        <Stack.Screen name="AdditionalInfo" component={AdditionalInfo} />
        <Stack.Screen name="MyDocs" component={MyDocs} />
        <Stack.Screen name="AllCategory" component={AllCategory} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="CancelBooking" component={CancelledTab} />
        <Stack.Screen name="ReportIssues" component={ReportIssues}/>
        <Stack.Screen name="issueDetails" component={issueDetails}/>

      </Stack.Navigator>
    );
  }

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height:70 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'md-home-outline'
              : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'file-text'
              : 'file-text';
          }
          else if (route.name === 'Notification') {
            iconName = focused
              ? 'bell-badge-outline'
              : 'bell-badge';
          }
          else if (route.name === 'Message') {
            iconName = focused
              ? 'message-text-outline'
              : 'message-text-outline';
          }

          return route.name === 'Home'?
          <Image  style={iconName = focused ?styles.active :styles.inactive} 
          source={ iconName = focused ? require('../assets/png/home.png') : require('../assets/png/HomeGrey.png')}/>:
           route.name === "Chat"?
           <FeatherIcon name={iconName} size={size} color={color}/> :
           <MatIcon name={iconName} size={size} color={color} />
           ;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
      
    >
      <Tab.Screen name="Home" component={MyNonTabStack} />
      <Tab.Screen name="Chat" component={OrderStatusTab} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Message" component={ChatScreen} />
    </Tab.Navigator>
  );
}

function TabBScreen() {
  return (
    <Animated.View 
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'plum',
    }}>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to TabB page!
      </Text>
    </Animated.View>
  );
}



export default HomeScreen;

const styles={
  active:{width:22,height:22},
  inactive:{width:26,height:26}
}