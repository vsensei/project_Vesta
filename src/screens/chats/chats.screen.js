import React from 'react';
import {ScrollView} from 'react-native';
import messagesDummy from 'dummies/messagesDummy';
import ChatView from 'components/chatView/chatView';

const ChatsScreen = ({navigation}) => {
  return (
    <ScrollView>
      {Object.entries(messagesDummy).map(([key, value]) => (
        <ChatView key={key} id={key} value={value} />
      ))}
    </ScrollView>
  );
};

export default ChatsScreen;
