import React from 'react';
import {Text, Button, View} from 'react-native';
import homeStyles from './home.styles';
import ScreenNames from 'screens/screens.constants';
import {getFirstLetterCapitalizedString} from 'utils/strings.utils';

const HomeScreen = ({navigation}) => {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.navigation}>
        <Text style={homeStyles.centeredText}>Navigation</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate(
              getFirstLetterCapitalizedString(ScreenNames.PROFILE),
              {name: 'Jane'},
            )
          }
        />
        <Button
          title="Go to chats"
          onPress={() =>
            navigation.navigate(
              getFirstLetterCapitalizedString(ScreenNames.CHATS),
            )
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
