import React from 'react';
import {Text, Image, View} from 'react-native';
import chatViewStyles, {
  getTimeStyle,
  getUnreadNumberForText,
  getUnreadNumberForView,
} from './chatView.styles';

const ChatView = ({id, value: {name, avatar, message, time, unreadNumber}}) => {
  return (
    <View style={chatViewStyles.horizontalView}>
      <Image
        style={chatViewStyles.avatar}
        source={{
          uri: avatar,
        }}
      />
      <View style={chatViewStyles.messageDataView}>
        <Text style={chatViewStyles.boldText}>{name}</Text>
        <Text style={chatViewStyles.paleText}>{message}</Text>
      </View>
      <View style={chatViewStyles.messageInfoView}>
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
  );
};

export default ChatView;
