import {StyleSheet, useWindowDimensions} from 'react-native';
import {Dimensions} from 'react-native';
import {COLORS} from '../../../contains';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 12,
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    height: height * 0.5,
  },
  banner: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  top: {
    marginVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  button: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.violet,
    borderRadius: 20,

    marginVertical: 10,
  },
  text_while: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
export default styles;
