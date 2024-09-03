import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import styles from './styles'
interface TabProps {
  route: any;
  index: number;
  indices: any;
  setIndex: (indice: any) => void;
  count: number;
  indicatorStyle?: object;
  tabHeaderLabelStyle?:object
}
const Tab = ({
  route,
  index,
  indices,
  setIndex,
  count,
  indicatorStyle,
  tabHeaderLabelStyle,
}: TabProps) => {

  return (
    <TouchableOpacity
      key={route.key + index}
      style={styles.tabItem}
      activeOpacity={0.4}
      onPress={() => setIndex(indices)}>
      <View style={{flexDirection: 'row-reverse',}}>
        <Animated.Text
          style={[
            styles.animatedText,
            {color: index === indices ?'#000000' : 'grey',},
            {...tabHeaderLabelStyle}
          ]}>
          {route.title}
        </Animated.Text>
      </View>

      {index === indices && (
        <View style={[styles.indicator]}></View>
      )}
    </TouchableOpacity>
  );
};
export default Tab;
