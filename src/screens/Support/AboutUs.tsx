import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { AppHeader } from "../../common/components/Header";
import { AuthHeader } from '../../common/components/Header/authheader';


const AboutUs = () => {
    const navigation = useNavigation();
    const termsconditions = useSelector(state => state?.root?.auth?.termandconditionsData?.Details);
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#fffff"} />

            <AuthHeader
                label={'About us'}
                onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={{ fontWeight: '400', fontSize: 10, color: '#000' }}>
                        {termsconditions?.[0]?.about_us}
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};



export default AboutUs;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        margin: 15
    },

})