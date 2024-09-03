import React from 'react';
import {
    Image, Text,
    TouchableOpacity,
    View
} from 'react-native';
import ANTICON from 'react-native-vector-icons/AntDesign';
import IONICON from 'react-native-vector-icons/Ionicons';
import styles from './styles'

interface BillingSubViewProps {
    leftText?: string;
    rightText?: string;
    fontStyle?: boolean;

}

export const BillingSubView: React.FunctionComponent<BillingSubViewProps> = ({
    leftText,
    rightText,
    fontStyle
}) => {
    return (
        < >
            <View style={[styles.categoryView]}>
                <Text style={fontStyle?styles.boldText:styles.normalText}>{leftText}</Text>
                <Text style={fontStyle?styles.boldText:styles.normalText}>₹{rightText}</Text>
            </View>
        </>
    );
};
