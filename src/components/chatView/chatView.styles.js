import {StyleSheet} from 'react-native';

const chatViewStyles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  horizontalView: {
    height: 70,
    //marginHorizontal: '10%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  avatar: {
    borderWidth: 1.7,
    borderColor: 'purple',
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  messageDataView: {width: '50%'},
  boldText: {
    fontWeight: 'bold',
  },
  paleText: {
    color: '#3f3f3f',
  },
  messageInfoView: {
    width: '10%',
  },
  time: {
    color: 'purple',
    fontWeight: 'bold',
  },
  unreadNumberView: {
    width: 24,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 12,
  },
  unreadNumberViewEmpty: {
    width: 24,
    height: 24,
  },
  unreadNumber: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  unreadNumberExtended: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  unreadNumberMax: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
});

export const getTimeStyle = unreadNumber =>
  unreadNumber ? chatViewStyles.time : chatViewStyles.paleText;

export const getUnreadNumberForView = unreadNumber =>
  unreadNumber
    ? chatViewStyles.unreadNumberView
    : chatViewStyles.unreadNumberViewEmpty;

export const getUnreadNumberForText = unreadNumber => {
  if (unreadNumber < 10) {
    return chatViewStyles.unreadNumber;
  }
  return unreadNumber < 100
    ? chatViewStyles.unreadNumberExtended
    : chatViewStyles.unreadNumberMax;
};

export default chatViewStyles;
