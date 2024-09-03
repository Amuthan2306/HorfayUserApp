
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import { AuthHeader } from '../../common/components/Header/authheader'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ReportIssues = () => {
    const navigation = useNavigation();


    const Report = [
        {
            id: '1',
            issue: 'Not Satisfied with the Services'
        },
        {
            id: '2',
            issue: 'Issues not resolved'
        },
        {
            id: '3',
            issue: 'Rude Behaviour'
        },
        {
            id: '4',
            issue: 'Vendor did not came '
        },
        {
            id: '5',
            issue: 'Charged extra for the service'
        },
        {
            id: '6',
            issue: 'Vendor did not pick the call'
        },
        {
            id: '7',
            issue: 'Number is invalid'
        },
        
    ]

const Button = (issue:any) => {
    navigation.navigate('issueDetails',{
    IssueType:issue
    })
}
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity  onPress={() =>{Button(item.issue)}} style={{marginVertical:10}}>
            <View style={styles.issue_view}>
                <TouchableOpacity onPress={() =>{Button(item.issue)}}
                style={styles.icon_view}>
                    <Icon name={'chevron-right-box'} size={25} color='black' />
                </TouchableOpacity>
                <Text style={styles.issue_text}>{item.issue}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader
                onPress={() => navigation.goBack()}
                label='Report an issue'/>

                <FlatList
                    data={Report}
                    renderItem={renderItem}
                    // showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                />
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    issue_view: {
        // borderWidth:1,
        height:40,
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#EBEBEB'
    },
    icon_view: {
        // borderWidth:1,
        width: '12%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    issue_text: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black'
    }
}