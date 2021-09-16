import React, {useEffect} from 'react';
import {ScrollView, Text, View, TextInput, Button} from 'react-native';
import chatStyles from './chat.styles';
import messagesDummy from 'dummies/messagesDummy';

const ChatScreen = ({route, navigation}) => {
  const {id, name} = route.params;
  const chat = messagesDummy[id];

  const isUsersMessage = (messageUserId, currentUserId) =>
    messageUserId.toString() === currentUserId;

  useEffect(
    () => navigation.setOptions({title: `Chat with ${name} (${id})`}),
    [navigation, name, id],
  );

  return (
    <View>
      {chat ? (
        <ScrollView style={chatStyles.mainScroll}>
          {Object.entries(chat).map(([key, {userId, text}]) => (
            <View key={key} style={chatStyles.message}>
              <View
                style={
                  isUsersMessage(userId, id)
                    ? chatStyles.right
                    : chatStyles.left
                }>
                {/*<Text>userId={userId}</Text>
          <Text>id={id}</Text>*/}
                <Text>{text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      ) : (
        <View style={chatStyles.emptyView}>
          <Text>Chat is empty</Text>
        </View>
      )}
      <View style={chatStyles.textPanel}>
        <TextInput style={chatStyles.textInput} />
        <Button title="Send" />
      </View>
    </View>
  );
};

export default ChatScreen;
