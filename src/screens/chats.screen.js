import React from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import ScreenNames from './screens.constants';
import {getFirstLetterCapitalizedString} from '../utils/strings.utils';

const ChatsScreen = ({navigation}) => {
  const messagesDummy = {
    1: {
      name: 'Test Author #1',
      avatar:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      message: 'Test message #1',
      time: '11:11',
      unreadNumber: 0,
    },
    2: {
      name: 'Test Author #2',
      avatar:
        'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      message: 'Test message #2',
      time: '22:22',
      unreadNumber: 1,
    },
    3: {
      name: 'Test Author #3',
      avatar:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      message: 'Test message #3',
      time: '11:11',
      unreadNumber: 10,
    },
    4: {
      name: 'Test Author #4',
      avatar:
        'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      message: 'Test message #4',
      time: '22:22',
      unreadNumber: 22,
    },
  };

  return (
    <ScrollView>
      {Object.entries(messagesDummy).map(
        ([key, {name, avatar, message, time, unreadNumber}]) => (
          <View style={styles.horizontalView} key={key}>
            <View>
              <Image
                style={styles.avatar}
                source={{
                  uri: avatar,
                }}
              />
            </View>
            <View style={styles.messageDataView}>
              <Text style={styles.boldText}>{name}</Text>
              <Text style={styles.paleText}>{message}</Text>
            </View>
            <View style={styles.messageInfoView}>
              <Text style={styles.time}>{time}</Text>
              <View style={styles.unreadNumberView}>
                <Text style={styles.unreadNumber}>{unreadNumber}</Text>
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
  avatarView: {},
  avatar: {
    borderWidth: 1.5,
    borderColor: 'black',
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
    alignSelf: 'flex-end',
    backgroundColor: 'purple',
    borderRadius: 10,
  },
  unreadNumber: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ChatsScreen;
