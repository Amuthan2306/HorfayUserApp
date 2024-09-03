import React from 'react';
import {
    Image, Text,
    TouchableOpacity,
    View
} from 'react-native';
import { BillingSubView } from './BillingSubView';
import styles from './styles'

interface OrderDeatilsCardProps {
    text?: string;
    totel?: any;
    fee?: any;
    tax?: any;
    grandtotel?: any;
}

export const OrderDeatilsCard: React.FunctionComponent<OrderDeatilsCardProps> = ({
    text,
    totel,
    fee,
    tax,
    grandtotel
}) => {
    return (
        <View style={[styles.parentView, { height: 180, alignItems: 'center' }]}>
            <View style={{ width: '93%', marginTop: 5 }}>
                <Text style={{ textDecorationLine: 'underline', fontSize: 16, fontWeight: '700', marginBottom: 10, color: '#000' }}>Payment Summary</Text>
                <BillingSubView
                    leftText='Item Total'
                    rightText={totel} />

                <BillingSubView
                    leftText='Convenience Fee'
                    rightText={fee} />
                <BillingSubView
                    leftText='Service Tax'
                    rightText={tax} />
            </View>

            <View style={{
                backgroundColor: '#fff', height: 47, width: '93%',
                flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center',
            }}>
                <Text style={{ color: '#000', fontWeight: '700', fontSize: 14 }}>Grand Total</Text>
                <Text style={{ color: '#000', fontWeight: '700', fontSize: 14,marginRight:15 }}>₹{grandtotel}</Text>
            </View>
        </View>
    );
};
