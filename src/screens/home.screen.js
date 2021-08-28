import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';
import ScreenNames from './screens.constants';
import {getFirstLetterCapitalizedString} from '../utils/strings.utils';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>hehheheheh</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate(
            getFirstLetterCapitalizedString(ScreenNames.PROFILE),
            {name: 'Jane'},
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
