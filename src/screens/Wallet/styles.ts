import { deviceHeight, deviceWidth } from "../../utils/screenRatio";
import styleFrom from "../../assets/styles/styles";
const styles = {
    container: {
        flex: 1,
        backgroundColor:'#fff'
    },
    cardView: {
        width: '92%',
        backgroundColor: 'black',
        height: deviceHeight * .2,
        borderRadius: 20,
        marginTop: 50,
        // justifyContent: 'center',
        alignSelf: 'center',
        marginBottom:50,
    },
    balanceText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 24,
        marginTop: 24
    },
    walletBalanceText: {
        color: '#fff',
        fontSize: 34,
        marginLeft: 24,
        marginTop: 8,
        marginBottom: 15,
    },
    walletView: {
        height: 55,
        backgroundColor: '#000',
        borderTopWidth: 1,
        borderColor: '#fff',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    moneyTtile: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'
    },
    borderRightView: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottomRightRadius: 15,
    },
    borderLeftView: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161616',
        borderBottomLeftRadius: 15,
    },
    transactionHistoryView:{
        width:deviceWidth *.9,
        height:40,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        alignItems:'center',
       
    },
    transactionHistoryText:{
        fontWeight:'700',
        fontSize:14,
    },
    filterText:{
        fontSize:12,
        marginRight:5,
        color:'#757575'
    },
    serviceView:{ flexDirection: 'row', marginLeft: 10, marginTop: 15,marginBottom:10, alignContent: 'center', },
    serviceStatusImg:{ width: 57, height: 57, borderRadius: 57 / 2, backgroundColor: '#909090' },
    serivceCategoryText:{
        fontSize: 14,
        color: '#161616',
        fontWeight: '500'
    },
    serviceTimetxt:{
        fontSize: 12,
        color: '#757575',
        marginTop: 5
    },
    headerTitle:{
        fontSize: 12,
        fontWeight: "bold",
        padding: 12,
        marginBottom: 0,
        borderRadius: 10,
        color: '#757575',
        marginLeft: 5,
    },
    addSymbol:{ fontSize: 14, color:styleFrom.darkGreen,fontWeight:'700' },
    addedAmount:{ fontSize: 14, color: styleFrom.darkGreen, marginLeft: 3, marginTop: 2,fontWeight:'700' },
    minusSymbol:{fontSize: 14, color:styleFrom.darkRed,fontWeight:'700'},
    minusAmount:{ fontSize: 14, color: styleFrom.darkRed, marginLeft: 3, marginTop: 2,fontWeight:'700' },
    bottomModalText:{ textAlign: 'center', fontSize: 20, fontWeight: '700', color: '#000' },
    bottomModalText1:{textAlign: 'center', fontSize: 16, fontWeight: '400', color: '#000'},
    bottomModalAmountView:{height:38,backgroundColor:'#DEDEDE',borderRadius:15,justifyContent:'center',alignSelf:'center',margin:15,},
    bottomModalAmountText: {fontSize:18,textAlign:'center',color:'#000000',fontWeight:'800',paddingLeft:8,paddingRight:8,},
    
};

export default styles;