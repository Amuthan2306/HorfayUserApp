import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FeatherICON from 'react-native-vector-icons/Fontisto';
import SmallCircle from '../SmallCircle';
import styles from './styles';
import TextCustom from '../../../common/components/TextWrapper';
import styleFrom from '../../../assets/styles/styles';

interface ServiceCardProps {
  text?: string;
  data?: any;
  add?: Boolean;
}

export const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({
  data,
  add,
}) => {
  return (
    <View style={styles.parentView}>
      <Image
        source={data.serviceImg}
        style={{width: 100, height: 100, borderRadius: 10, flex: 0.3}}
      />
      <View style={{width: '55%', marginLeft: 10, marginBottom: 15, flex: 0.5}}>
        <Text style={styles.categoryText}>{data.serviceName}</Text>
        <Text style={styles.priceText}>{data.price} onwards</Text>
        {data?.ratings && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{width: 13, height: 10}}
              source={require('../../../assets/png/star.png')}></Image>
            <TextCustom
              fontSize={12}
              color={styleFrom.iconColor}
              fontWeight="400"
              marginLeft={5}>
              {data.ratings}
            </TextCustom>
          </View>
        )}
        <View
          style={{flexDirection: 'row', alignItems: 'center', paddingTop: 6}}>
          <SmallCircle color="grey" />
          <Text style={styles.subCategoryText}>{data.duration}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width:'120%',
          }}>
          <SmallCircle color="grey" />
          <Text style={styles.subCategoryText}>{data.definition2}</Text>
        </View>
      </View>
      {add ? (
        <TouchableOpacity style={styles.addStyles}>
          <TextCustom
            fontSize={14}
            color={styleFrom.black}
            fontWeight="700"
            align="center">
            + ADD
          </TextCustom>
        </TouchableOpacity>
      ) : (
        <View style={{flex: 0.2}}></View>
      )}
    </View>
  );
};
