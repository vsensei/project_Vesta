import React from 'react';
import {ScrollView} from 'react-native';
import chatsDummy from 'dummies/chatsDummy';
import ChatView from 'components/chatView/chatView';
import ScreenNames from 'screens/screens.constants';
import {getFirstLetterCapitalizedString} from 'utils/strings.utils';

const ChatsScreen = ({navigation}) => {
  return (
    <ScrollView>
      {Object.entries(chatsDummy).map(([key, value]) => (
        <ChatView
          key={key}
          id={key}
          value={value}
          handlePress={() =>
            navigation.navigate(
              getFirstLetterCapitalizedString(ScreenNames.CHAT),
              {
                id: key,
                name: value.name,
              },
            )
          }
        />
      ))}
    </ScrollView>
  );
};

export default ChatsScreen;
