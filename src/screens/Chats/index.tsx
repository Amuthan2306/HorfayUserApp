import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './message';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
    renderAvatar,
    renderBubble,
    renderMessageText,
} from './MessageContainer';
import { AppHeader } from '../../common/components/Header';
import { useNavigation } from '@react-navigation/native';
import { AuthHeader } from '../../common/components/Header/authheader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar, View } from 'react-native'


const Chats = (props) => {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(initialMessages.reverse());
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    return (
        <>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"}/>
           {Platform.OS === 'ios' && <View style={{height:50,}}/>}
            <AuthHeader label="Harry Tales" onPress={() => props.navigation.goBack()} />
            <GiftedChat
                messages={messages}
                alwaysShowSend={false}
                shouldUpdateMessage={() => true}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                onSend={messages => onSend(messages)}
                onInputTextChanged={setText}
                messagesContainerStyle={{ backgroundColor: '#fff', }}
                renderMessageText={renderMessageText}
                user={{
                    _id: 1,
                }}
            />

        </>
    );
};

export default Chats;