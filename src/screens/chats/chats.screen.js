import React from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import messagesDummy from '../../dummies/messagesDummy';

const ChatsScreen = ({navigation}) => {
  const getTimeStyle = unreadNumber =>
    unreadNumber ? styles.time : styles.paleText;

  const getUnreadNumberForView = unreadNumber =>
    unreadNumber ? styles.unreadNumberView : styles.unreadNumberViewEmpty;

  const getUnreadNumberForText = unreadNumber => {
    if (unreadNumber < 10) {
      return styles.unreadNumber;
    }
    return unreadNumber < 100
      ? styles.unreadNumberExtended
      : styles.unreadNumberMax;
  };

  return (
    <ScrollView>
      {Object.entries(messagesDummy).map(
        ([key, {name, avatar, message, time, unreadNumber}]) => (
          <View style={styles.horizontalView} key={key}>
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            />

            <View style={styles.messageDataView}>
              <Text style={styles.boldText}>{name}</Text>
              <Text style={styles.paleText}>{message}</Text>
            </View>
            <View style={styles.messageInfoView}>
              <Text style={getTimeStyle(unreadNumber)}>{time}</Text>
              <View style={getUnreadNumberForView(unreadNumber)}>
                <Text style={getUnreadNumberForText(unreadNumber)}>
                  {unreadNumber}
                </Text>
              </View>
            </View>
          </View>
        ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    width: 20,
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  unreadNumberViewEmpty: {
    width: 20,
    height: 20,
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

export default ChatsScreen;
