import stylesFrom from "../../../assets/styles/styles";
const styles = {
    parentView: {
        backgroundColor: stylesFrom.white,
        height: 122,
        width: '90%',
        // justifyContent:'center',
        alignSelf: 'center',
        borderRadius: 8,
        borderColor: stylesFrom.lightGrey,
        marginTop: 20,
        //flexDirection: 'row',
        // alignItems:'center'
    },
    categoryView: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 16,
    },
    subCategoryView: {
        marginLeft: 16,
        marginTop: 2
    }

}

export default styles;