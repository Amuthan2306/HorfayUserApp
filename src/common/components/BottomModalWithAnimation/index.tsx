import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { verticalScale } from '../../../utils/screenRatio';
import Button from '../Button';
import { LottieAnimations } from '../LottieAnimations';
import styles from './styles';
import RupeeJson from '../../../assets/lottieJSON/rupee.json'
interface BottomModelWithAnimationProps {
    onDrop?: () => void;
    onRightButtonPress: () => void;
    onLeftButtonPress: () => void;
    visible?: boolean;
    children?: JSX.Element | React.ReactChild;
    animationJson?: any;
    autoPlayProp?: boolean;
    loopProp?: boolean;
    leftButtonText?: string;
    rightButtonText: string;
    viewStyle?: {};
}

export const BottomModelWithAnimation: React.FunctionComponent<
    BottomModelWithAnimationProps
> = ({
    onDrop,
    visible,
    children,
    animationJson,
    autoPlayProp,
    loopProp,
    onLeftButtonPress,
    onRightButtonPress,
    leftButtonText,
    rightButtonText,
    viewStyle,
}) => {
        return (
            <Modal
                transparent
                onRequestClose={onDrop}
                onDismiss={onDrop}
                visible={visible}
                statusBarTranslucent
                style={{ margin: 0 }}>
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    activeOpacity={1}
                    onPressOut={onDrop}>
                    <View style={{ ...styles.containerView, ...viewStyle }}>
                        <View style={{ height: 7, width: 38, backgroundColor: '#ABABAB', borderRadius: 20, top: 12, justifyContent: 'center', alignSelf: 'center' }}></View>
                        <LottieAnimations
                            animationJson={animationJson}
                            lottieStyle={styles.lottieAnimStyle}
                            autoPlayProp={autoPlayProp}
                            loopProp={loopProp}
                        />
                        <View style={styles.childrenView}>

                            {children}
                            <View style={styles.confirmView}>
                                <Button
                                    round={false}
                                    style={{
                                    marginRight: 16,
                                    marginLeft:6,
                                    backgroundColor:'#000',
                                    width: 165,
                                    height: verticalScale(40),
                                    borderRadius: 12
                                    }}
                                    labelStyle={[styles.buttonModelText]}
                                    label={leftButtonText}
                                    onCLick={onLeftButtonPress}
                                /> 
                                 <Button
                                    round={false}
                                    style={{
                                        marginRight: 16,
                                        marginLeft: 16,
                                        backgroundColor:'#5F5F5F',
                                        width: 165,
                                        height: verticalScale(40),
                                        borderRadius: 12
                                    }}
                                    labelStyle={[styles.buttonModelText]}
                                    label={rightButtonText}
                                    onClick={onRightButtonPress}
                                />





                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };
