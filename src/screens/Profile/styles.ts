import styleFrom from "../../assets/styles/styles";
import { scale } from "../../utils/screenRatio";

const styles =
{
    flatListItem: {
        marginTop: 5,
        borderBottomWidth: .4,
        borderBottomColor: styleFrom.primaryGrey
    },
    detailsView: {
        flex: 1,
        marginHorizontal: 10,

    },
    frameParentView: {
        borderBottomWidth: .8,
        borderBottomColor: styleFrom.mediumGrey,
        marginTop: 5,
        marginBottom: 5,
        height: 30
    },
    frameCardView: {
        marginLeft: 15,
        marginBottom: 10,
    },
    selctedCard: {
        width: 38,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 7
    },
    unSelectedCard: {
        width: 38,
        height: 10,
        backgroundColor: styleFrom.mediumGrey,
        borderRadius: 7
    },
    avatarCard: {
        height: 88,
        backgroundColor: '#fff',
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: 'grey',
        marginLeft: 15
    },
    frameDetailsCard: {
        marginLeft: 15,
        height: 60,
        marginTop: 12,
        borderBottomWidth: .6,
        borderColor: styleFrom.primaryGrey,
        flexDirection: 'row'
    },

    selctedCircleView: {
        width: 42,
        height: 42,
        borderRadius: 42 / 2,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    unselectedCircleView: {
        width: 42,
        height: 42,
        borderRadius: 42 / 2,
        borderColor: '#7a7a7a',
        borderWidth: .5
    },

    //Button Submit
    buttonText: {
        width: '40%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor: styleFrom.black,
        
    },
    labelText: {
        fontSize: 16,
        color: styleFrom.white,
        fontWeight: '700'
    },
    meduimButton:{
        width: '64%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        padding: 0,
        marginTop: 20,
        fontWeight: '600',
        backgroundColor: styleFrom.black,
        marginBottom:25
    },

    //About Me Styles
    textInputView: {
        width: '100%',
        height: 45,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderRadius: 8
    },
    //Modal
    modalParentContainer: {
        marginBottom: 13,
        paddingBottom: 13,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItem: 'center',
        borderBottomColor: styleFrom.grey,
        borderBottomWidth: .7,
    },
    modalText: {
        fontSize: 16,
        color: styleFrom.black,
        marginTop: 2,
        marginHorizontal: 0,

    },
    radioCircleModal: {
        height: 18,
        width: 18,
        borderRadius: 9,
        borderWidth: scale(1),
        borderColor: styleFrom.blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: scale(10),
        backgroundColor: styleFrom.blue,
    },
    //My DOcs
    chooseFileView: {
        width: 74,
        height: 24,
        borderRadius: 3, 
        backgroundColor: styleFrom.black, 
        justifyContent: 'center',
        marginLeft:12
    },
    chooseFileText:{ 
        fontSize: 10, 
        color: '#fff', 
        textAlign: 'center' 
    },
    setPriceView: {
        width: 68,
        height: 40,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
        padding: 8
    },
    faqView: {
        width: '100%',
        height: 47,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
        padding: 8,
        marginBottom:26
    },
    descriptionView: {
        height: 100,
        width: '100%',
        fontSize: 14,
        backgroundColor:styleFrom.white,
        marginTop:5,
        borderRadius: 5,
        textAlignVertical: 'top',
        padding: 10,
        lineHeight: 21,
        paddingStart: 15,

      },

}

export default styles;