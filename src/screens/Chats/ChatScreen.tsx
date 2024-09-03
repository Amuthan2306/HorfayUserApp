import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
const Width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;

const ChatList = [
  {
    name: 'Odeusz Piotrowski',
    chat: 'Will do, super, thank you',
    day: 'Mon',
    notify: 'true',
  },
  {
    name: 'Annie Beasanr',
    chat: 'Wow,its Great!!!',
    day: 'Tue',
    notify: 'false',
  },

  {
    name: 'James Scary',
    chat: 'ok ,let you know',
    day: 'Sun',
    notify: 'true',
  },
  {
    name: 'Odeusz Piotrowski',
    chat: 'Will do, super, thank you',
    day: 'Wed',
    notify: 'false',
  },
  {
    name: 'Annie Beasanr',
    chat: 'Wow,its Great!!!',
    day: 'Thur',
    notify: 'false',
  },

  {
    name: 'James Scary',
    chat: 'ok ,let you know',
    day: 'Fri',
    notify: 'false',
  },
  {
    name: 'Odeusz Piotrowski',
    chat: 'Will do, super, thank you',
    day: 'Sat',
    notify: 'true',
  },
  {
    name: 'Annie Beasanr',
    chat: 'Wow,its Great!!!',
    day: 'Sat',
    notify: 'false',
  },

  {
    name: 'James Scary',
    chat: 'ok ,let you know',
    day: 'Wed',
    notify: 'true',
  },

  {
    name: 'Odeusz Piotrowski',
    chat: 'Will do, super, thank you',
    day: 'Mon',
    notify: 'true',
  },
  {
    name: 'Annie Beasanr',
    chat: 'Wow,its Great!!!',
    day: 'Thur',
    notify: 'true',
  },

  {
    name: 'James Scary',
    chat: 'ok ,let you know',
    day: 'Wed',
    notify: 'true',
  },
  {
    name: 'Odeusz Piotrowski',
    chat: 'Will do, super, thank you',
    day: 'Thur',
    notify: 'false',
  },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const [filterdata, setFilteredData] = useState(ChatList);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setFilteredData(ChatList);
  }, []);
  const searchFilterFunction = text => {
    if (text) {
      const newData = filterdata.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchName(text);
    } else {
      setFilteredData(ChatList);
      setSearchName(text);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ParticularChat')}
      style={{
        backgroundColor: '#292F3F',
        flex: 1,
        width: '100%',
        alignContent: 'center',
      }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <View style={{ flex: 0.25 }}>
          {item.notify == 'true' ? (
            <Image
              source={require('../../assets/image/profile.png')}
              style={{
                height: 44,
                width: 44,
                // alignSelf: 'center',
              }}
            />
          ) : (
            <View style={{ padding: 8 }}>
              <ImageBackground
                source={require('../../assets/image/profile.png')}
                style={{
                  height: 36,
                  width: 36,
                  // alignSelf: 'center',
                }}>
                <View
                  style={{
                    height: 34,
                    width: 34,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#414756',
                    right: 13,
                    bottom: 13,
                  }}>
                  <Text
                    style={{ fontSize: 15, fontWeight: '400', color: 'white' }}>
                    +3
                  </Text>
                </View>
              </ImageBackground>
            </View>
          )}
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#292F3F',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{ fontWeight: '600', fontSize: 15, color: '#fff' }}>
            {item.name}
          </Text>
          <Text style={{ fontWeight: '300', fontSize: 13, color: '#fff' }}>
            {item.chat}
          </Text>
        </View>

        <View
          style={{
            flex: 0.2,
            backgroundColor: '#292F3F',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 15,
              color: '#fff',
            }}>
            {item.day}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#292F3F' }}>
      <View style={{ flex: 1, backgroundColor: '#292F3F', marginHorizontal: 12 }}>
        <View
          style={{
            flex: 0.23,
            width: '92%',
            justifyContent: 'space-evenly',
            marginHorizontal: 14,
          }}>
          <View
            style={{
              flex: 0.4,
              backgroundColor: '#292F3F',
              justifyContent: 'center',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../assets/image/profile.png')}
                style={{ height: (height / 120) * 7, width: (height / 120) * 7 }}
              />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 20,
                  color: '#fff',
                  paddingLeft: '4%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Alexa
              </Text>
            </View>
          </View>

          {/* <View style={{flex: 0.1}}></View> */}
          <View
            style={{
              flex: 0.29,
              //height: (height / 38) * 1.8,
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              // borderWidth: 1,
              // borderColor: 'blue',
              borderRadius: 10,
              width: '100%',
              flexDirection: 'row',
            }}>
            <TextInput
              style={{
                width: '89%',
                borderRadius: 10,
                fontSize: 14,
                fontWeight: '400',
                color: 'white',
                paddingLeft: 5,
              }}
              placeholder="  Search..."
              placeholderTextColor={'lightgrey'}
              onChangeText={(text: any) => searchFilterFunction(text)}
              underlineColorAndroid="transparent"
              value={searchName}
            />
            <TouchableOpacity style={{ paddingRight: '0.1%', bottom: 1.2 }}>
              <Image
                source={require('../../assets/image/search.png')}
                style={{
                  height: Platform.OS == 'android' ?(height / 33) * 1.8 : (height / 36) * 1.8,
                  width: Platform.OS == 'android' ?(Width / 40) * 4 :(Width / 39) * 4
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 5 }}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 20,
                color: '#fff',
              }}>
              Recent Chat
            </Text>
          </View>
        </View>

        <View style={{ flex: 0.72 }}>
          <FlatList
            data={filterdata}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ChatScreen;
