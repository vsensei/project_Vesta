import React from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';

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
        'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=100&q=80',
      message: 'Test answer #2',
      time: '22:22',
      unreadNumber: 1,
    },
    3: {
      name: 'Test Author #3',
      avatar: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      message: 'Test answer #3',
      time: '11:11',
      unreadNumber: 10,
    },
    4: {
      name: 'Test Author #4',
      avatar:
        'https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg',
      message: 'Test answer #4',
      time: '22:22',
      unreadNumber: 22,
    },
    5: {
      name: 'Test Author #5',
      avatar: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      message: 'Test answer #5',
      time: '10:10',
      unreadNumber: '99+',
    },
  };

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
