import styleFrom from "../../assets/styles/styles";

const styles={
    subHeader:{
        flexDirection: 'row',
        paddingHorizontal:10,
        paddingTop: 10,
        backgroundColor:styleFrom.white,
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'84%',
        marginTop:16,
        // marginLeft:16,
        borderRadius:10,
        borderColor:'#e3e3e3',
        borderWidth:.5
       
    },
    searchIcon: {
        padding: 10,
    },
    input: {
       width:'86%',
        paddingTop:5,
        paddingRight:5,
        paddingBottom:5,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color:'#000'
       
    },
    item: {
        backgroundColor:'#EBEBEB',
        marginTop: 16,
        // marginLeft:16,
        width:'94%',
        padding:10,
        borderRadius:20,
        alignSelf:'center'
      },
      title: {
        fontSize: 20,
        fontWeight:'700',
        color:styleFrom.Indigo,
      
      },
      timeText: {
        fontSize: 14,
        fontWeight:'500',
        color:styleFrom.Indigo,
      },
      methodText:{
        fontWeight:'800',
        fontSize:7,
        color:styleFrom.darkGrey,
        marginTop:5

      },
      descView:{
        flexDirection:"row",alignItems:'center',marginTop:2
    },
    descTextStyle:{
        marginLeft:5,fontSize:14,fontWeight:'400',color:styleFrom.iconColor
    },
      categoryText:{
          marginLeft:8,
        fontSize: 14,
        fontWeight:'400',
        color:'#757575'
      },
      filterIconView:{
        width: 40,
        height: 42, 
        marginLeft: 6, 
        backgroundColor: '#fff', 
        borderColor: '#e5e5e5', 
        marginTop: 16, 
        borderRadius: 15, 
        borderWidth: .7, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    defintionView:{ 
        flexDirection: 'row', 
        alignContent: 'center', 
        alignItems: 'center', 
        marginTop:9
    },
    dot:{
         width: 4, 
         height: 4, 
         backgroundColor: '#757575', 
         borderRadius: 4 / 2 
    },

    buttonView: {
        width: '92%',
        height: 45,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 17,
        marginBottom: 8
    },
    buttonText:{
        fontSize: 14,
        color: "#fff"
    },
    categoryTitleView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
  },
  categoryTitle: {
      fontSize: 14,
      fontWeight:'700',
      color:'#000',
      textAlign:'center',
      marginRight:8
    },
    reasonText:{
      color: '#150B3D', 
      fontSize: 12, 
      fontWeight: '700', 
      marginTop: 16,
      marginLeft: 16, 
      marginBottom: 12
  },
  descriptionView: {
      height: 100,
      width: '90%',
      fontSize: 14,
      backgroundColor: styleFrom.white,
      marginTop: 5,
      borderRadius: 10,
      textAlignVertical: 'top',
      padding: 10,
      lineHeight: 21,
      paddingStart: 15,
      marginLeft: 16, 
    },
    smallbuttonView: {
      width: '42%',
      height: 45,
      //alignSelf: 'center',
      borderRadius: 10,
      padding: 0,
      marginTop: 17,
      marginBottom: 8,
      backgroundColor:styleFrom.red,
      marginLeft:10
  },
  alertView:{ 
    flexDirection: 'row', 
    width: '95%',
    marginTop: Platform.OS === 'ios'? 8:5,
    marginLeft:8,
    justifyContent:'center' ,
   
  },
  alertAstrisk:{ 
    fontSize: 12, 
    fontWeight: '500', 
    color: styleFrom.red 
  },
  alertTxt:{ 
    fontSize: 12, 
    fontWeight: '500', 
    color: styleFrom.black, 
    marginLeft: 5, 
    marginRight: 5 
  },
}
export default styles;