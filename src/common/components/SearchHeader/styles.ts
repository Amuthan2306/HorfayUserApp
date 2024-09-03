import {Platform, StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/screenRatio';

const createStyles =  {
    greetingSearch:{
        width:'92%',
        borderWidth:0.5,
        borderColor:'#F2F2F2',
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#fbfbfb',
        marginLeft:16,
        marginRight:16,
        marginBottom:12,
        marginTop:12,
        justifyContent:'center',
        alignItems:'center'
      },
      searchBtn:{
        backgroundColor:'#000',borderRadius:8,
      },
      searchIcon:{
        height:15,width:15,margin:5
      },
    commonNavBarStyles: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor:'#fff'
    },

 
};

export default createStyles;
