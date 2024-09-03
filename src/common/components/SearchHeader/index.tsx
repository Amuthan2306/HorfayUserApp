import React from 'react';
import {Image, Text,TouchableOpacity,View,TextInput} from 'react-native';
import FeatherICON from 'react-native-vector-icons/Ionicons';
import styles from './styles'

interface SearchHeaderProps {
  label?: string;
  onLeftIconClick?: () => void;
  headerContainerStyle?: any;
  containerStyle?:any;
  leftAlign?:boolean;
  searchPlaceholder:string;
}

export const SearchHeader: React.FunctionComponent<SearchHeaderProps> = ({
  label,
  onLeftIconClick,
  headerContainerStyle,
  containerStyle,
  leftAlign,
  searchPlaceholder,
}) => {
  return (
    <View style={[styles.commonNavBarStyles,containerStyle]}> 
     <View style={styles.greetingSearch}>
         <TouchableOpacity onPress={onLeftIconClick} style={[styles.imgCommon,{ flex:0.1}]}>
           <FeatherICON name="arrow-back-sharp" color="#000" size={22}/>
          </TouchableOpacity>
          <TextInput
           placeholder={searchPlaceholder}
           style={{flex:0.85,height:43,color:'#000'}}
           placeholderTextColor='#9B9E9F'
          />
          <TouchableOpacity style={styles.searchBtn}>
           <Image source={require('../../../assets/png/search.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
    </View>
  );
};
