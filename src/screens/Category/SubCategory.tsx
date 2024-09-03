import {useNavigation} from '@react-navigation/native';
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {SearchHeader} from '../../common/components/SearchHeader';
import {Spinner} from '../../assets/Spinner';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import styleFrom from '../../assets/styles/styles';
import {StyleSheet} from 'react-native';
import {SensorType} from 'react-native-reanimated';
import {useEffect, useState} from 'react';
import BottomModal from '../../common/components/BottomModal';
import Icon from 'react-native-vector-icons/Ionicons';
import {CategoryList, sortData} from '../../common/ConstantList';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';

const SubCategory = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const particularSubCategory = useSelector(
    (state: RootState) => state?.root?.auth?.particularCategory,
  );
  console.log('particularSubCategory===>>>', particularSubCategory);
  const [selectList, setSelectlist] = useState(false);
  const [selectGrid, setSelectgrid] = useState(false);
  const [selectSort, setSelectsort] = useState(false);
  const [issortHightolow, setSortHightolow] = useState(false);
  const [issortlowtohigh, setSortLowtohigh] = useState(false);
  const [israteHightolow, setRateHightolow] = useState(false);
  const [isratelowtohigh, setRateLowtohigh] = useState(false);
  const [istopRate, setTopRate] = useState(false);
  const [sortModal, setSortModal] = useState(false);

  useEffect(() => {
    const {getID} = props?.route?.params;
    const params = {
      category_id: Number(getID),
    };
    dispatch(global.actions.particularSubCategoryCall(params));
  }, []);

console.log('subbu',)





  useEffect(() => {
    setSelectlist(!selectList);
  }, []);
  const List_View = () => {
    setSelectlist(!selectList);
    setSelectsort(false);
    setSelectgrid(false);
  };
  const Grid_View = () => {
    setSelectgrid(!selectGrid);
    setSelectlist(false);
    setSelectsort(false);
  };
  const Sort_View = () => {
    setSelectsort(!selectSort);
    setSelectlist(false);
    setSelectgrid(false);
    setSortModal(true);
  };
  const closeModal = () => {
    setSortModal(false);
    setSelectlist(!selectList);
    setSelectsort(false);
  };
  const isLoader = useSelector(state => state?.root?.appLoader?.isLoading);

  return (
    <SafeAreaView style={styles.container}>
      {isLoader ? <Spinner size={'small'} visibility={undefined} /> : null}
      <ScrollView>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <SearchHeader onLeftIconClick={() => navigation.goBack()} />
        <View style={{marginLeft: 15, marginRight: 15}}>
          <View style={styles.SubCategoryHeaderView}>
            <Image
              style={{height: 20, width: 4}}
              source={require('../../assets/png/greyTag.png')}
            />
            <Text style={styles.SubCategoryHeaderText}>Appliance Repair</Text>
            <View style={styles.sortListView}>
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  {backgroundColor: selectList ? '#fff' : '#f9f9f9'},
                ]}
                onPress={() => List_View()}>
                <SimpleLineIcons
                  name={'list'}
                  size={15}
                  color={selectList ? 'black' : styleFrom.darkGrey}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  {backgroundColor: selectGrid ? '#fff' : '#f9f9f9'},
                ]}
                onPress={() => Grid_View()}>
                <MaterialIcons
                  name={'grid-on'}
                  size={18}
                  color={selectGrid ? 'black' : styleFrom.darkGrey}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.sortButton,
                  {backgroundColor: selectSort ? '#fff' : '#f9f9f9'},
                ]}
                onPress={() => Sort_View()}>
                <MaterialCommunityIcons
                  name={'sort-ascending'}
                  size={18}
                  color={selectSort ? 'black' : styleFrom.darkGrey}
                />
              </TouchableOpacity>
            </View>
          </View>
          {selectGrid ? (
            <View>
              <FlatList
                keyExtractor={item => item.id}
                data={CategoryList}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.flatlistView}
                    onPress={() => navigation.navigate('DetailCategoryScreen')}>
                    <Image source={item.icon} style={styles.flatlistImage} />
                    <View style={styles.ratingViewRow}>
                      <Text style={styles.serviceNameRow}>{item.title}</Text>
                      <View style={styles.starView}>
                        <Image
                          style={{width: 15, height: 12}}
                          source={require('../../assets/png/star.png')}></Image>
                      </View>
                      <View style={styles.ratingTextRow}>
                        <Text style={styles.ratingStyle}>{item.rating}</Text>
                        {/* <Text style={{color:styleFrom.darkGrey,fontSize:12}}>{`(${item.review})`}</Text> */}
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 5,
                      }}>
                      <Text style={styles.startsfromTextRow}>Starts From</Text>
                      <View style={styles.moneyViewRow}>
                        <Text
                          style={styles.moneyText}>{`₹ ${item.price}`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          ) : (
            <FlatList
              keyExtractor={item => item.id}
              data={CategoryList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    style={{flex: 1, flexDirection: 'row', margin: 10}}
                    onPress={() => navigation.navigate('DetailCategoryScreen')}>
                    <View style={{flex: 0.3, marginRight: 5}}>
                      <Image
                        source={item.icon}
                        style={{
                          height: 150,
                          width: 120,
                          borderRadius: 20,
                        }}></Image>
                    </View>
                    <View style={styles.detailText}>
                      <View style={styles.ratingView}>
                        <View style={styles.starView}>
                          <Image
                            style={{width: 15, height: 12}}
                            source={require('../../assets/png/star.png')}></Image>
                        </View>
                        <View style={styles.ratingText}>
                          <Text style={styles.ratingStyle}>{item.rating}</Text>
                          <Text
                            style={{
                              color: styleFrom.darkGrey,
                              fontSize: 12,
                              marginLeft: 4,
                            }}>{`(${item.review})`}</Text>
                        </View>
                        <View style={styles.dotView}>
                          <Entypo
                            name={'dots-three-horizontal'}
                            size={15}
                            color={styleFrom.greyText}></Entypo>
                        </View>
                      </View>
                      <Text style={styles.serviceName}>{item.title}</Text>
                      <Text style={styles.startsfromText}>Starts From</Text>
                      <View style={styles.moneyView}>
                        <Text
                          style={styles.moneyText}>{`₹ ${item.price}`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: styleFrom.borderGrey,
                    }}></View>
                </View>
              )}
            />
          )}
        </View>
      </ScrollView>
      <BottomModal onDrop={() => closeModal()} visible={sortModal}>
        <View style={{height: 450}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: styleFrom.Indigo,
              marginBottom: 10,
            }}>
            Select a Sort option
          </Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            {issortHightolow ? (
              <Icon
                onPress={() => setSortHightolow(!issortHightolow)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icon
                onPress={() => setSortHightolow(!issortHightolow)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Sort by Price High to Low</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {issortlowtohigh ? (
              <Icon
                onPress={() => setSortLowtohigh(!issortlowtohigh)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icon
                onPress={() => setSortLowtohigh(!issortlowtohigh)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Sort by Price Low to High</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {israteHightolow ? (
              <Icon
                onPress={() => setRateHightolow(!israteHightolow)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icon
                onPress={() => setRateHightolow(!israteHightolow)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Rating - High to Low</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {isratelowtohigh ? (
              <Icon
                onPress={() => setRateLowtohigh(!isratelowtohigh)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icon
                onPress={() => setRateLowtohigh(!isratelowtohigh)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Rating - Low to High</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 5}}>
            {istopRate ? (
              <Icon
                onPress={() => setTopRate(!istopRate)}
                name={'checkbox'}
                size={22}
                color="#9A9A9A"
              />
            ) : (
              <Icon
                onPress={() => setTopRate(!istopRate)}
                name={'checkbox-outline'}
                size={22}
                color="#9A9A9A"
              />
            )}
            <Text style={{left: 10}}>Top Rating</Text>
          </View>
        </View>
      </BottomModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  sortButton: {
    flex: 0.1,
    height: 20,
    width: 23,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubCategoryHeaderView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  SubCategoryHeaderText: {
    color: styleFrom.titleBlue,
    fontSize: 18,
    marginLeft: 10,
    flex: 0.7,
    fontWeight: '600',
  },
  sortListView: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'space-evenly',
  },
  ratingStyle: {
    color: styleFrom.lightBlack,
    fontSize: 12,
    fontWeight: '700',
  },

  detailText: {
    flex: 0.7,
    flexDirection: 'column',
    marginLeft: 40,
    margin: 10,
  },
  ratingViewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 5,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTextRow: {
    flexDirection: 'row',
    flex: 0.2,
  },
  ratingText: {
    flexDirection: 'row',
    flex: 0.9,
  },
  dotView: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  serviceNameRow: {
    color: styleFrom.titleBlue,
    flex: 0.7,
  },
  serviceName: {
    color: styleFrom.titleBlue,
    marginTop: 8,
  },
  startsfromTextRow: {
    fontWeight: '500',
    fontSize: 12,
    color: styleFrom.darkGrey,
    marginTop: 5,
    flex: 0.7,
  },
  startsfromText: {
    fontWeight: '500',
    fontSize: 12,
    color: styleFrom.darkGrey,
  },
  moneyViewRow: {
    backgroundColor: '#000',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    flex: 0.3,
  },
  moneyView: {
    backgroundColor: '#000',
    borderRadius: 6,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 30,
  },
  moneyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  flatlistView: {
    alignItems: 'center',
    margin: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  flatlistImage: {
    width: 170,
    height: 170,
    borderRadius: 15,
  },
  flatlistText: {
    fontWeight: '600',
    fontSize: 14,
    color: styleFrom.subTitleblue,
  },
});

export default SubCategory;
