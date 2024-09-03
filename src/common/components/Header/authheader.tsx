import React from 'react';
import {
    Image, Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styleForm from '../../../assets/styles/styles';
import images from '../../components/ImageAssets';

interface AuthHeaderProps {
    label?: string;
    onPress?: () => void;
    headerContainerStyle?: any;
    containerStyle?: any;
    leftAlign?: boolean;
}

export const AuthHeader: React.FunctionComponent<AuthHeaderProps> = ({
    label,
    onPress,
    headerContainerStyle,
    containerStyle,
    leftAlign,
}) => {
    return (
        <View style={{
            height: '8%',
            width: '100%',
            flexDirection: 'row',
            backgroundColor: styleForm.white,
             alignItems: 'center',
             alignSelf:'center',
             alignContent:'center',
             borderBottomWidth:2,
             borderColor:styleForm.primaryGrey
            // justifyContent: 'center'
        }}>
            <View style={{
                height: '50%',
                width: '15%',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity onPress={onPress}>
                    <Icon name='arrow-left' size={30} color={styleForm.black} />
                </TouchableOpacity>

            </View>
            <View style={{
                height: '100%',
                width: '85%',
                // borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf:'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    right: 25,
                    color: styleForm.black
                }}>{label}</Text>
            </View>

        </View>

    );
};
