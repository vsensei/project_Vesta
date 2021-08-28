import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';
import ScreenNames from './screens.constants';
import {getFirstLetterCapitalizedString} from '../utils/strings.utils';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <Text style={styles.centeredText}>Navigation</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    justifyContent: 'space-around',
    height: '30%',
    width: '70%',
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: 'purple',
    borderStyle: 'dotted',
    borderRadius: 1,
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default HomeScreen;
