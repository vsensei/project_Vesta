import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    justifyContent: 'space-around',
    height: '30%',
    width: '70%',
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: 'purple',
    borderStyle: 'dotted',
    borderRadius: 1,
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default homeStyles;
