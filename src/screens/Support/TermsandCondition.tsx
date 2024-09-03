import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { iteratorSymbol } from 'immer/dist/internal';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import { AppHeader } from '../../common/components/Header';
import { data } from '../../common/ConstantList';
import { AuthHeader } from '../../common/components/Header/authheader';
import { useDispatch, useSelector } from 'react-redux';

const TermsandCondition = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const termsconditions = useSelector(state => state?.root?.auth?.termandconditionsData?.Details);

  useEffect(() => {
    // dispatch(setAppLoader(true));

    dispatch(global.actions.TermsAndConditionsCall());
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <AuthHeader
        label={'Terms and Conditions'}
        onPress={() => navigation.goBack()}
      />

      <ScrollView>
        <FlatList
          data={termsconditions}
          renderItem={({ item }) => (
            <View style={Styles.container}>
              {/* <Text style={{color: '#150B3D', fontWeight: '700', fontSize: 10}}>
                {item.title}
              </Text> */}
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  color: '#000',
                  margin: 5,
                }}>
                {termsconditions?.[0]?.terms_and_condition}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsandCondition;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    margin: 15,
  },
});
