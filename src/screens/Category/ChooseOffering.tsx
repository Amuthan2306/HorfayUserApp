import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppHeader} from '../../common/components/Header';
import TextCustom from '../../common/components/TextWrapper';
import styleFrom from '../../assets/styles/styles';
import SmallCircle from '../../common/components/SmallCircle';
import {stages} from '../../common/ConstantList';
import {Spinner} from '../../assets/Spinner';
import {useSelector} from 'react-redux';
const ChooseOffering = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState({
    id: 0,
    src: stages[0].src,
  });

  function moveAhead() {
    if (active.id === 2) {
      setActive({id: 0, src: stages[0].src});
    }
    if (active.id < 2) {
      let nextId = active.id + 1;
      const newItem = stages[nextId];
      setActive({id: nextId, src: newItem.src});
    }
  }
  function moveBack() {
    if (active.id === 0) {
      setActive({id: 2, src: stages[2].src});
    }
    if (active.id > 0) {
      let nextId = active.id - 1;
      setActive({id: nextId, src: stages[nextId].src});
    }
  }

  const RenderIndicators = ({id}) => {
    if (id === active.id) {
      return <View style={styles.activeIndicator} />;
    } else {
      return <View style={styles.indicator} />;
    }
  };
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <AppHeader
        label="Choose Service Offering"
        onLeftIconClick={() => navigation.goBack()}
        leftAlign
      />
      <GestureRecognizer
        style={styles.imageContainer}
        onSwipeRight={moveBack}
        onSwipeLeft={moveAhead}>
        <ImageBackground
          resizeMode="cover"
          borderRadius={15}
          style={{width: '100%', height: '100%'}}
          source={active.src}
        />
      </GestureRecognizer>

      <View style={styles.indicatorContainer}>
        {stages.map(item => (
          <RenderIndicators key={item.id} id={item.id} />
        ))}
      </View>

      <View
        style={{
          width: '90%',
          height: 90,
          justifyContent: 'flex-start',
          alignSelf: 'center',
          alignItems: 'flex-start',
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <View style={{width: '90%', height: 80}}>
          <TextCustom
            fontSize={16}
            color={styleFrom.black}
            fontWeight="700"
            marginLeft={10}
            marginBottom={7}>
            Facial Name
          </TextCustom>
          <TextCustom
            fontSize={12}
            color={styleFrom.black}
            fontWeight="500"
            marginLeft={20}
            marginBottom={7}>
            4.2 (32k)
          </TextCustom>
          <TextCustom
            fontSize={14}
            color={styleFrom.black}
            fontWeight="700"
            marginLeft={10}
            marginBottom={7}>
            $499
          </TextCustom>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon
            onPress={() => navigation.navigate('EditSubCategory')}
            name="edit"
            size={22}
            color={'#000'}
          />
          {/* <View style={{ width: 79, height: 25, borderRadius: 8, marginLeft: 10, justifyContent: 'center', backgroundColor: '#F9F9F9' }}>
                        <TextCustom
                            fontSize={14}
                            color={styleFrom.black}
                            fontWeight='700'
                            align='center'
                        >
                            + ADD
                        </TextCustom>
                    </View> */}
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 16,
        }}>
        <SmallCircle color="grey" />
        <TextCustom
          fontSize={12}
          color={styleFrom.darkGrey}
          fontWeight="400"
          marginLeft={10}>
          45 mins
        </TextCustom>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 16,
        }}>
        <SmallCircle color="grey" />
        <TextCustom
          fontSize={12}
          color={styleFrom.darkGrey}
          fontWeight="400"
          marginLeft={10}>
          For all skin types. Pinacolada mask.
        </TextCustom>
      </View>
    </SafeAreaView>
  );
};

export default ChooseOffering;

const styles = StyleSheet.create({
  activeIndicator: {
    width: 32,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#ABABAB',
  },
  indicator: {
    width: 32,
    height: 5,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    display: 'flex',
    //marginVertical:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 14,
  },
  imageContainer: {
    width: '92%',
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
