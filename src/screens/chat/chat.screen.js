import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import chatStyles from './chat.styles';
import messagesDummy from 'dummies/messagesDummy';

const ChatScreen = ({route, navigation}) => {
  const {id, name} = route.params;
  const chat = messagesDummy[id];

  const isUsersMessage = (messageUserId, currentUserId) =>
    messageUserId.toString() === currentUserId;

  return (
    <ScrollView>
      <Text>
        chat with {name} ({id})
      </Text>
      {chat ? (
        <ScrollView>
          {Object.entries(chat).map(([key, {userId, text}]) => (
            <View>
              <View
                style={
                  isUsersMessage(userId, id)
                    ? chatStyles.right
                    : chatStyles.left
                }>
                {/*<Text>userId={userId}</Text>
          <Text>id={id}</Text>*/}
                <Text
                  style={
                    isUsersMessage(userId, id)
                      ? chatStyles.rightMessage
                      : chatStyles.leftMessage
                  }>
                  {text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text>Chat is empty</Text>
      )}
    </ScrollView>
  );
};

export default ChatScreen;
