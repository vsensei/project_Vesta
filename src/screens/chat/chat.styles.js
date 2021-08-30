import {StyleSheet} from 'react-native';

const chatStyles = StyleSheet.create({
  leftMessage: {
    color: 'red',
  },
  rightMessage: {
    color: 'green',
    textAlign: 'right',
  },
  left: {
    width: 200,
  },
  right: {
    width: 200,
    alignSelf: 'flex-end',
  },
});

export default chatStyles;
