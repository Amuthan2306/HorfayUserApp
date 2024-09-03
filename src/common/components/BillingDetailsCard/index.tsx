import React from 'react';
import {
    Image, Text,
    TouchableOpacity,
    View
} from 'react-native';
import ANTICON from 'react-native-vector-icons/AntDesign';
import IONICON from 'react-native-vector-icons/Ionicons';
import { BillingSubView } from './BillingSubView';
import styles from './styles'

interface BillingDeatilsCardProps {
    text?: string;

}

export const BillingDeatilsCard: React.FunctionComponent<BillingDeatilsCardProps> = ({
    text,
}) => {
    return (
        <View style={styles.parentView}>
            <View style={{ marginLeft: 16, marginTop: 16 }}>
                <Text style={{ textDecorationLine: 'underline', fontSize: 14, fontWeight: '700',marginBottom:10 }}>Billing Details</Text>

                <BillingSubView
                    leftText='Diamond Facial'
                    rightText='699' />

                <BillingSubView
                    leftText='Clean up'
                    rightText='99' />

                <BillingSubView
                    leftText='Convinience Fee'
                    rightText='11' />
                
                 <BillingSubView
                    leftText='Grand Total'
                    rightText='801'
                    fontStyle={true} />


            </View>
            <View style={{ backgroundColor: '#f3f3f7', height: 47, position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 6, borderColor: '#fff', borderWidth: .8 }}>
                <Text style={{ marginLeft: 16 }}>Payment mode</Text>
                <Text style={{ marginRight: 16 }}>Cash</Text>
            </View>
        </View>
    );
};
