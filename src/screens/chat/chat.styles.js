import {StyleSheet} from 'react-native';

const chatStyles = StyleSheet.create({
  mainScroll: {
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'column-reverse',
  },
  emptyView: {
    height: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  message: {
    marginVertical: 5,
  },
  left: {
    alignSelf: 'flex-start',
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: 5,
    maxWidth: '80%',
    padding: 4,
  },
  right: {
    alignSelf: 'flex-end',
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderWidth: 2,
    borderRadius: 5,
    maxWidth: '80%',
    padding: 4,
  },
  textPanel: {
    width: '100%',
    height: '10%',
    backgroundColor: 'purple',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    width: '80%',
    backgroundColor: 'white',
  },
});

export default chatStyles;
