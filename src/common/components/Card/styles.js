import stylesFrom from "../../../assets/styles/styles";
import {moderateScale, scale, verticalScale} from '../../../utils/screenRatio';
const styles ={
    cardView:{
        ...stylesFrom.justifyContentCenter,
        ...stylesFrom.alignItemsCenter,
        width:verticalScale(120),
        height:'50%',
        margin:25,
        borderRadius:10,
        backgroundColor:stylesFrom.mediumGrey
    },
    activeCardView:{
        ...stylesFrom.justifyContentCenter,
        ...stylesFrom.alignItemsCenter,
        width:verticalScale(120),
        height:'50%',
        margin:25,
        borderRadius:10,
        backgroundColor:stylesFrom.black
    },
    activeText:{
        fontSize:24,
        color:stylesFrom.white,
        fontWeight:'600'
    },
    inactiveText:{
        fontSize:24,
        color:stylesFrom.black,
        fontWeight:'600'
    }
}
export default styles;