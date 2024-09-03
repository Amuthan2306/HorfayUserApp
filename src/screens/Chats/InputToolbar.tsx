import React from 'react';
import { Image, TouchableOpacity, View, Text, Pressable } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import AttachICon from 'react-native-vector-icons/Entypo';
import FEAICon from 'react-native-vector-icons/Feather';

export const renderInputToolbar = (props: any) => {
  return (
    <View style={styles.textInputParentView}>
      <View style={{ width: props.text != "" ? '100%' : '100%', height: '100%', }}>
        <InputToolbar
          {...props}
          placeholder="Send Message"
          containerStyle={styles.textInputContainerStyle}
          renderSend={(props) =>
            <View style={styles.iconParentView}>
              <AttachICon name='attachment' size={20} color={'#000'} style={{ marginRight: 10 }} />
              {props?.text !== "" && <Pressable  onPress={() => props?.onSend({ text: props?.text.trim() }, true)} 
              style={styles.sendIconView}>
                <FEAICon name='send' size={14} color={'#fff'}  />
              </Pressable>}
            </View>
          }
          textInputStyle={styles.textInputStyle}
          textInputProps={{
            multiline: true,
            returnKeyType: 'go',
            onSubmitEditing: () => {
              if (props.text && props.onSend) {
                let text = props.text;
                props.onSend({ text: text.trim() }, true);
              }
            },
          }}
        />
      </View>

    </View>

  );
};


export const renderActions = (props) => (
  <Actions
    {...props}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
  />
);

export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      color: '#222B45',
      // backgroundColor: '#EDF1F7',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingHorizontal: 10,
      marginLeft: 0,
    }}
  />
);

export const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 60,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 5,
      right: 10
    }}

  >
  </Send>
);

const styles={
  textInputParentView:{ 
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal:8,
    backgroundColor:'#fff',
    marginBottom:8
  },
  textInputContainerStyle:{  
    borderRadius: 25,
    borderColor:'#f3f3f3',
    borderTopWidth: 0,
    width: '100%',
    
  },
  iconParentView:{ flexDirection: 'row', right: 10, bottom:8, position: 'absolute', alignItems: 'center', },
  sendIconView:{ width: 28, height: 28, borderRadius: 28 / 2, backgroundColor: '#000',justifyContent:'center',alignItems:'center' },
  textInputStyle :{ color: '#000', width: '80%', height: '100%', borderWidth: .5, borderColor: '#DADADA', borderRadius: 20,paddingLeft:8 },
}