import { scale,moderateScale } from "../../../utils/screenRatio"
import stylesFrom from "../../../assets/styles/styles";
const styles={
      tabItem: {
        alignItems: 'center',
       // paddingHorizontal: scale(10),
        paddingTop: scale(10),
        justifyContent:'space-between',
        width:120,
       // backgroundColor:'red'
      },
      indicator: {
        flex: 1,
        width: '100%',
        borderBottomWidth: scale(3),
        borderBottomColor:stylesFrom.black,
        borderRadius:5,
      },
      animatedText: {
        fontSize: moderateScale(14.2),
        paddingBottom: scale(10),
        fontWeight:'700',
        textAlign:'center'
      },
      txtCount: {
        alignSelf: 'center',
        fontSize: moderateScale(12),
        color: '#fff',
      },
      viewCountListItem: {
        width: scale(20),
        height: scale(20),
        backgroundColor: 'red',
        justifyContent: 'center',
        borderRadius: moderateScale(10),
        marginLeft: scale(5),
      },
  
    
    
}

export default styles