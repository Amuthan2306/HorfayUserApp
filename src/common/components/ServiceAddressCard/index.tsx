import React from 'react';
import {
    Image, Text,
    TouchableOpacity,
    View
} from 'react-native';
import ANTICON from 'react-native-vector-icons/AntDesign';
import IONICON from 'react-native-vector-icons/Ionicons';
import styles from './styles'

interface ServiceAddressCardProps {
    text?: string;

}

export const ServiceAddressCard: React.FunctionComponent<ServiceAddressCardProps> = ({
    text,
}) => {
    return (
        <View style={styles.parentView}>
            <View style={styles.categoryView}>
                <ANTICON name="home" color="#000" size={18} />
                <View style={styles.subCategoryView}>
                    <Text >Address</Text>
                    <Text style={{ color: '#757575', fontSize: 12, marginRight: 15, marginTop: 5,textAlign:'left' }}>89, Bhel Nagar, Piplani, Ayodhya Bypass, Bhopal, Madhya Pradesh 462022, India </Text>
            </View>
            </View>

            <View style={styles.categoryView}>
            <IONICON name="time-outline" color="#000" size={18} />
            <Text style={{marginLeft:16,color: '#757575', fontSize: 12,marginTop: 2}}>Sat, Apr 09 - 07:30 PM</Text>
            </View>
                
            
    </View> 
  ); 
};
