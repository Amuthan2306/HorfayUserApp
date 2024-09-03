

import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const SwiperComponent = ({ swiperImage, border }) => {
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.wrapper}
                height={350}
                onMomentumScrollEnd={(e, state, context) =>
                    console.log('index:', state.index)
                }
                autoplay
                dot={
                    <View
                        style={styles.inActiveDot}
                    />
                }
                activeDot={
                    <View
                        style={styles.activeDotIndicator}
                    />
                }
                paginationStyle={{
                    bottom:border ? 18 : 5,
                }}
                loop
            >

                {swiperImage.map((item, index) => {
                    return <View
                        style={border? styles.slideOne :styles.slide}
                    >
                        {border ?
                            <ImageBackground
                            borderTopLeftRadius={20}
                            borderTopRightRadius={20}
                                style={styles.image}
                                source={item.image == null ? item.src : { uri:'https://horfay.colan.in/' +item.image}} 
                            /> :
                            <ImageBackground
                                borderTopLeftRadius={15}
                                borderTopRightRadius={15}
                                style={styles.image}
                                source={item.image == null ? item.src : { uri:'https://horfay.colan.in/' +item.image}}
                            />}
                    </View>
                })}
            </Swiper>
        </View>
    )
}
export default SwiperComponent;

const styles = {
    container: {
        margin:-11,
        marginTop:-30,
        height:220,
       //flex: 3,
        
    },
    wrapper: {},
    slide: {
        width: '100%',
        height: 300,
    },
    slideOne:{
      width:'100%',
      height:300
    },
    image: {
        width:'100%',
        height: '100%'
    },
    inActiveDot: {
        width: 32,
        height: 5,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDotIndicator: {
        backgroundColor: '#5E17EB',
        width: 32,
        height: 5,
        borderRadius: 20,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }
}
