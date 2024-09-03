import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Pressable,
  ImageBackground,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import App from '../../App';
import {SearchHeader} from '../../common/components/SearchHeader';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {StyleSheet} from 'react-native';
import {serviceLists} from '../../common/ConstantList';
import {RootState} from '../../store/store';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from '../../assets/Spinner';
import {setAppLoader} from '../../redux/Reducer/AppLoader';

const AllCategory = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const allCategory = useSelector(
    (state: RootState) => state?.root?.auth?.allCategories?.Details,
  );
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);
console.log('qwertyuyuoo',allCategory)


  useEffect(() => {
    dispatch(setAppLoader(true));
    dispatch(global.actions.allCategoryCall());
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <SearchHeader
          searchPlaceholder="Search Category"
          onLeftIconClick={() => navigation.goBack()}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 8,
          }}>
          <View
            style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
            <Image
              style={{height: 20, width: 4}}
              source={require('../../assets/png/tag.png')}
            />
            <Text
              style={{
                color: styleFrom.titleBlue,
                fontSize: 18,
                marginLeft: 10,
                flex: 0.98,
                fontWeight: '600',
              }}>
              All Categories
            </Text>
          </View>
          <FlatList
            keyExtractor={item => item.id}
            data={allCategory}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{flex: 0.35}}>
                <View style={styles.subCategoryView}>
                  <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                      navigation.navigate('DetailCategoryScreen', {
                        getID: item?.category_id,
                        getName: item?.categoryname,
                      })
                    }>
                    {/* onPress={() => navigation.navigate('SubCategory',{getID:item?.category_id})} */}
                    <Image
                      source={{uri: 'https://horfay.colan.in/' + item?.image}}
                      style={{height: 72, width: 72}}></Image>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 13,
                      color: styleFrom.blueText,
                      flex: 0.2,
                      marginTop: 5,
                      textAlign: 'center',
                    }}>
                    {item?.categoryname}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AllCategory;
const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  subCategoryView: {
    flex: 0.35,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBtn: {
    borderRadius: 30,
    height: 72,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
