import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {COLORS} from '../../../contains';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightViolet,
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderColor: '#e8e8e8',
  },
});
export default styles;
