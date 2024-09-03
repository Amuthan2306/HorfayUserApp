import stylesFrom from "../../../assets/styles/styles";
const styles ={
    parentView:{
        backgroundColor:'#F9F9F9',
        height:140,
        width:'98%',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:8,
        borderColor:stylesFrom.lightGrey,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center'
    },
    categoryText:{
       fontSize:16,
       color:'#161616',
       fontWeight:'700',
       marginBottom:2
    },
    priceText:{
        fontSize:14,
        color:'#161616',
        fontWeight:'500',
        marginBottom:2
     },
    subCategoryText:{
        fontSize:14,
       color:'#757575',
       fontWeight:'400',
       marginLeft: 8
      // marginTop:3
    },
    addStyles: {
        shadowColor: '#757575',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16.0,
        elevation: 20,
        flex:0.2,
        width: 45, 
        height: 30, 
        borderRadius: 5,
        borderWidth:0.3,
        marginLeft: 10, 
        justifyContent: 'center', 
        backgroundColor: '#FFF',
        right:5 
    }
}

export default styles;