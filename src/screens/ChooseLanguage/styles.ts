import styleFrom from "../../assets/styles/styles";

const styles={
    chooseLanguage:{
        ...styleFrom.flex1,
        ...styleFrom.justifyContentCenter,
        ...styleFrom.alignItemsCenter,
        backgroundColor : styleFrom.white,
    },
    chooseLangugaeSubView:{
        ...styleFrom.flexRow,
        ...styleFrom.justifyContentCenter,
        ...styleFrom.alignItemsCenter,
    },
    chooseLangugaeSubViewUrdu:{
        ...styleFrom.flexRowReverse,
        ...styleFrom.justifyContentCenter,
        ...styleFrom.alignItemsCenter,
    },
    languageTxt:{
        fontSize:23,
        color:styleFrom.headerColor,
        fontWeight:'600'
    },
    bottomText:{
        marginTop:10,
        fontSize:12,
        color:'#070707',
        textAlign:'center',
        position:'absolute',
        bottom:50,
    },
    linkingText:{
        fontSize:12,
        color:styleFrom.navyBlue
    }
   
};
export default styles;