import React from 'react';
import { Bubble,MessageText } from 'react-native-gifted-chat';
import Text from '../../common/components/TextWrapper';
import {View } from 'react-native'


export const renderBubble = (props) => (
  <>
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
     // left: { backgroundColor:'#000000'},
      right: {},
    }}
    wrapperStyle={{
      left: {backgroundColor:'#000000',padding:5 },
      right: {backgroundColor:'#F3F3F3',padding:5},
    }}
    bottomContainerStyle={{
      //left: { borderColor: 'purple', borderWidth: 4 },
      right: {},
    }}
    usernameStyle={{ color: 'tomato', fontWeight: '100' }}
    containerToNextStyle={{
      left: { borderColor: 'navy', borderWidth: 4 },
      right: {},
    }}
    containerToPreviousStyle={{
     // left: { borderColor: 'mediumorchid', borderWidth: 4 },
      right: {},
    }}
    timeTextStyle={{ left: { color: '#fff' },right: { color:'black'} }}
    tickStyle={{ color: props.currentMessage.seen ? '#34B7F1' : '#999' }}
  />
  </>
);

const renderTick = (props) => {
  console.info("Porps as",props)
  return (
    <Text >
      {props.currentMessage.isSent && "✓"}
      {props.currentMessage.isReceived && "✓"}
    </Text>
  )
}

export const renderMessageText = (props) => (
  <View>
  <MessageText
    {...props}
    containerStyle={{
      //left: { backgroundColor: 'yellow' },
      //right: { backgroundColor: 'purple' },
    }}
    textStyle={{
      left: { color: '#fff' },
      right: { color: '#161616',},
    }}
    linkStyle={{
      left: { color: '#000' },
      right: { color: '#000' },
    }}
    customTextStyle={{ fontSize:16,  }}
  />
   {/* { renderTick(props)} */}
  </View>
);
