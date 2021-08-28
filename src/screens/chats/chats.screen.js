import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import messagesDummy from '../../dummies/messagesDummy';
import chatsStyles, {
  getTimeStyle,
  getUnreadNumberForText,
  getUnreadNumberForView,
} from './chats.styles';

const ChatsScreen = ({navigation}) => {
  return (
    <ScrollView>
      {Object.entries(messagesDummy).map(
        ([key, {name, avatar, message, time, unreadNumber}]) => (
          <View style={chatsStyles.horizontalView} key={key}>
            <Image
              style={chatsStyles.avatar}
              source={{
                uri: avatar,
              }}
            />
            <View style={chatsStyles.messageDataView}>
              <Text style={chatsStyles.boldText}>{name}</Text>
              <Text style={chatsStyles.paleText}>{message}</Text>
            </View>
            <View style={chatsStyles.messageInfoView}>
              <Text style={getTimeStyle(unreadNumber)}>{time}</Text>
              <View style={getUnreadNumberForView(unreadNumber)}>
                {unreadNumber ? (
                  <Text style={getUnreadNumberForText(unreadNumber)}>
                    {unreadNumber < 100 ? unreadNumber : '99+'}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        ),
      )}
    </ScrollView>
  );
};

export default ChatsScreen;
