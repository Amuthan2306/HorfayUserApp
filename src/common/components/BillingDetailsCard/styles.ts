import stylesFrom from "../../../assets/styles/styles";
const styles = {
    parentView: {
        backgroundColor: stylesFrom.white,
        height: 240,
        width: '90%',
        // justifyContent:'center',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: 'lightgrey',
        borderWidth:1,
        marginTop: 20,
        //flexDirection: 'row',
        // alignItems:'center'
    },
    categoryView: {
        flexDirection: 'row',
        marginTop:9,
        justifyContent:'space-between',
        paddingRight:16
    },
    subCategoryView: {
        marginLeft: 16,
        marginTop: 2
    },
    boldText:{
        fontSize:14,
        fontWeight:'700',
        color:stylesFrom.black,
        marginTop:14 
    },
    normalText:{
        fontSize:14,
        fontWeight:'400',
        color:stylesFrom.black
    },


}

export default styles;