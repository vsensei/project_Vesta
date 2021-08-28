import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import messagesDummy from '../../dummies/messagesDummy';
import styles, {
  getTimeStyle,
  getUnreadNumberForText,
  getUnreadNumberForView,
} from './chats.styles';

const ChatsScreen = ({navigation}) => {
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

export default ChatsScreen;
