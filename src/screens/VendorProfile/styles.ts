import styleFrom from "../../assets/styles/styles";

const styles={
    labelText: {
        fontSize: 16,
        color: styleFrom.white,
        fontWeight: '700'
    },
    meduimButton:{
        width: '40%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor: styleFrom.black,
        marginBottom:25
    },
    mediumBtnGrey:{
        width: '40%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor: styleFrom.btnGrey,
        marginBottom:25
    },
    flatlistView: {
         marginLeft:20,
         borderRadius: 20,
      },
      flatlistImage: {
        width: 110,
        height: 85,
        borderRadius: 15,
      },
      moneyView: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        flex: 0.2,
        marginTop: 2,
        marginBottom: 8,
      },
      moneyText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
      },
      activeIndicator: {
        width: 32,
        height: 5,
        borderRadius: 20,
        backgroundColor: '#ABABAB',
      },
      item: {
        flex:0.8
      },
      header: {
        fontSize: 32,
        backgroundColor: '#fff',
        marginLeft:20
      },
      title: {
        fontSize: 24,
      },
}

export default styles;