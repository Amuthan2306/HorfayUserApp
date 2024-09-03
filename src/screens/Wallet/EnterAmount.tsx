import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, KeyboardAvoidingView, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader } from '../../common/components/Header';
import InputText from '../../common/components/InputText';
import { deviceHeight } from '../../utils/screenRatio';
import Button from '../../common/components/Button';
import { useState } from 'react';
import { amount } from '../../common/ConstantList';

const EnterAmount = () => {
  const naviagtion = useNavigation();
  const[isamount,setAmount] = useState(0);
  const[isValue,setValue] = useState(true)
  const[selectedBalance,setBalncedItem] = useState({});

 const changeValue= (item) =>{
  setBalncedItem(item);
  setValue(false)
 }

  const renderItem = ({ item,index }:any) => (
    <Pressable onPress={()=>changeValue(item)} style={styles.item}>
      <Text style={styles.title}>{"+"}{" "}{item.title}</Text>
    </Pressable>

  );

  return <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <KeyboardAvoidingView>
      <AppHeader
        label="Enter Amount"
        onLeftIconClick={() => naviagtion.goBack()} />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '30%' }}>
        <InputText
          placeHolder={"\u20B9 0"}
          value={selectedBalance.title}
          placeholderTextColor='#000'
        />
      </View>
      <Text style={{ textAlign: 'center' }}>Current Balance : <Text style={styles.selectedBalnceText}> {selectedBalance.title}</Text></Text>

      <FlatList
      style={{marginTop:'20%',marginLeft:10}}
        data={amount}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
      />


    </KeyboardAvoidingView>
    <Button
      label={"Continue"}
      round={false}
      buttonStatus={!isValue?false:true}
      style={!isValue?styles.buttonText:styles.inActiveButton}
      labelStyle={!isValue? styles.labelText : styles.inActiveText}
      onPress={() => null}
    />
  </SafeAreaView>
}

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f3f3f3',
    height: 50,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    marginLeft: 10,
    marginRight: 15
  },
  buttonText: {
    width: '94%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    marginTop: 20,
    fontWeight: '600',
    position: 'absolute',
    bottom: 20,
    backgroundColor:'#000'
  },
  inActiveButton:{
    width: '94%',
    height: 45,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 0,
    marginTop: 20,
    fontWeight: '600',
    position: 'absolute',
    bottom: 20,
    backgroundColor:'#F3F3F3'
  },
  labelText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600'
  },
  inActiveText:{
    fontSize: 14,
    color: '#ABABAB',
    fontWeight: '600'
  },
  selectedBalnceText:{
    fontSize:16,
    color:'#000',
    fontWeight:'800'
  }
}
export default EnterAmount;