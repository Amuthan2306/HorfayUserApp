/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, StatusBar, SectionList, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import styles from './styles'
import FilterIcon from '../../assets/svg/Dashboard/FilterIcon.svg';
import { deviceWidth } from '../../utils/screenRatio';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomModal from '../../common/components/BottomModal';
import { BottomModelWithAnimation } from '../../common/components/BottomModalWithAnimation';
import RupeeJson from '../../assets/lottieJSON/rupee.json';
import { newTaskData } from '../../common/ConstantList';

function WalletScreen(props) {
    const [walletBalanceIs, setWalletBalanceIs] = useState('5000');
    const [walletModal, setWalletModal] = useState(false);

    React.useEffect(() => {
        let changeBalance = walletBalanceIs.replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')
        setWalletBalanceIs(changeBalance)
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"} />
            <View style={styles.cardView}>
                <Text style={styles.balanceText}>Wallet Balance</Text>
                <Text style={styles.walletBalanceText}>{'\u20B9'}{" "}{walletBalanceIs}</Text>

                <View style={styles.walletView}>
                    <View style={styles.borderLeftView}>
                        <Text style={styles.moneyTtile}>Deposit Money</Text>
                    </View>
                    <Pressable
                        onPress={() => props.navigation.navigate('ContactUs')}
                        style={styles.borderRightView}>
                        <Text style={styles.moneyTtile}>Add Money</Text>
                    </Pressable>
                </View>

                <View style={styles.transactionHistoryView}>
                    <Text style={styles.transactionHistoryText}>Transaction History</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.filterText} >Filter</Text>
                        <FilterIcon width={18} height={18} />
                    </View>
                </View>
            </View>

            <SectionList
                style={{ marginTop: 25 }}
                sections={newTaskData}
                renderItem={({ item }) => (
                    <View style={styles.serviceView}>
                        <Image
                            source={require('../../assets/png/serviceImg.png')}
                            style={styles.serviceStatusImg} />
                        <View style={{ width: deviceWidth * .62, marginLeft: 10, marginTop: 4 }}>
                            <Text numberOfLines={2}
                                style={styles.serivceCategoryText}>{item.moneyStatus}</Text>
                            <Text style={styles.serviceTimetxt}>{"2.56 Pm"}</Text>
                        </View>
                        {item.isMoney ?
                            <Text style={styles.addSymbol}>+</Text> :
                            <Text style={styles.minusAmount}>-</Text>
                        }
                        {item.isMoney ?
                            <Text style={styles.addedAmount}>{'\u20B9'}{"488"}</Text> :
                            <Text style={styles.minusAmount}>{'\u20B9'}{"488"}</Text>}
                    </View>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: '#F3F3F3', marginTop: 8, marginBottom: 8 }}>
                        <Text style={styles.headerTitle}>{section.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                stickySectionHeadersEnabled
            />

            <BottomModelWithAnimation
                onDrop={() => setWalletModal(false)}
                visible={walletModal}
                animationJson={RupeeJson}
                autoPlayProp={true}
                rightButtonText={"Add now"}
                leftButtonText={"Add later"}
                onRightButtonPress={()=>setWalletModal(false)}
                onLeftButtonPress={()=>setWalletModal(false)}
                >
                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={styles.bottomModalText}>Dear user,</Text>
                    <Text style={styles.bottomModalText}> Add money to your wallet</Text>
                    <Text style={styles.bottomModalText1}>For the amount you receieved in cash</Text>
                </View>

                <View style={styles.bottomModalAmountView}>
                   <Text style={styles.bottomModalAmountText}>{'\u20B9'}{walletBalanceIs}</Text>
                </View>
            </BottomModelWithAnimation>

        </SafeAreaView>
    );
}

export default WalletScreen;
