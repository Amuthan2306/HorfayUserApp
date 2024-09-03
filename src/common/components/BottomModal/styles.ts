import { StyleSheet } from 'react-native';
import styleFrom from "../../../assets/styles/styles";

const styles = {
  bottomSection: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems:  'flex-start',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto'
  },
  line: {
    width:  50,
    backgroundColor:styleFrom.grey,
    height: 4,
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 6
  },
  container: {
    width: '100%',
    padding:  16,
    paddingTop:  20,
    backgroundColor: styleFrom.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  }
};

export default styles;