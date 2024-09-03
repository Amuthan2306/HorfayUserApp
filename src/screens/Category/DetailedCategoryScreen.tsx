import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {StyleSheet} from 'react-native';
import {RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {AuthHeader} from '../../common/components/Header/authheader';
import {Spinner} from '../../assets/Spinner';
import {setAppLoader} from '../../redux/Reducer/AppLoader';

const DetailCategoryScreen = (props: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {getID, getName} = props?.route?.params;
  const subCategory = useSelector(
    (state: RootState) => state?.root?.auth?.subCategories,
  );

  console.log('!!!!!!!!!', getID);
  console.log('@@@@@@', getName);

  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  useEffect(() => {
    const params = {
      category_id: Number(getID),
    };
    dispatch(setAppLoader(true));
    dispatch(global.actions.subCategoryCall(params));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <AuthHeader onPress={() => navigation.goBack()} label={getName} />
      <ScrollView>
        <View>
          {subCategory?.Details == '' ? (
            <View style={{alignItems: 'center', margin: 10}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Service Coming Soon...
              </Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={item => item.id}
              data={subCategory?.Details}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.flatlistView}
                  onPress={() =>
                    navigation.navigate('AddServiceScreen', {
                      subcategory_id: item?.subcategory_id,
                    })
                  }>
                  <View style={{margin: 10}}>
                    <Image
                      source={{uri: 'https://horfay.colan.in/' + item?.image}}
                      style={styles.flatlistImage}
                    />

                    <Text
                      style={{
                        width: 160,
                        fontSize: 16,
                        fontWeight: '500',
                        color: styleFrom.Indigo,
                        marginTop: 5,
                      }}>
                      {item?.subcategoryname}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  flatlistView: {
    marginTop: 10,
    alignItems: 'center',
    margin: 4,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: styleFrom.primaryGrey,
    justifyContent: 'center',
  },
  flatlistImage: {
    width: 160,
    height: 160,
    borderRadius: 15,
  },
  ratingViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  ratingTextRow: {
    flexDirection: 'row',
    flex: 0.2,
  },
  ratingStyle: {
    color: styleFrom.lightBlack,
    fontSize: 12,
    fontWeight: '700',
  },
  startsfromTextRow: {
    fontWeight: '500',
    fontSize: 12,
    color: styleFrom.darkGrey,
    marginTop: 5,
    flex: 0.7,
  },
  starView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceNameRow: {
    color: styleFrom.titleBlue,
    flex: 0.7,
  },
  moneyViewRow: {
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    flex: 0.3,
  },
  moneyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
});

export default DetailCategoryScreen;
