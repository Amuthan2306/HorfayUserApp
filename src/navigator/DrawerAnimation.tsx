
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import HomeScreen from './AppNavigator';
import DrawerDetails from './DrawerDetails';
import EnterAmount from '../screens/Wallet/EnterAmount';
import WalletScreen from '../screens/Wallet';
import { ProfileDetails,Aboutme } from '../screens/Profile';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View style={[styles.stack, style]}>
      <Stack.Navigator
        screenOptions={{headerShown:false
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EnterAmount" component={EnterAmount} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </Animated.View>
  );
};
  function  DrawerAnimations () {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, .9],
    outputRange: [1, 0.75],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 0.45],
    outputRange: [0, 10],
  });
  const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <View style={styles.container} >
      <Drawer.Navigator
        backBehavior="none"
        initialRouteName="Home"
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={styles.container}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={styles.scene}
        screenOptions={{
          swipeEnabled: false,
        }}
        drawerContent={(props) => {
          setProgress(props?.progress);
          return <DrawerDetails {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Wallet" component={WalletScreen}/>
        
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerAnimations;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#545454'
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});