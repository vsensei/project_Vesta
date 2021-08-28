import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './src/screens/screens.constants';
import {getFirstLetterCapitalizedString} from './src/utils/strings.utils';
import HomeScreen from './src/screens/home/home.screen';
import ProfileScreen from './src/screens/profile/profile.screen';
import ChatsScreen from './src/screens/chats/chats.screen';

const Stack = createNativeStackNavigator();

const screens = [
  {
    key: getFirstLetterCapitalizedString(ScreenNames.HOME),
    component: HomeScreen,
    name: 'Welcome',
  },
  {
    key: getFirstLetterCapitalizedString(ScreenNames.PROFILE),
    component: ProfileScreen,
  },
  {
    key: getFirstLetterCapitalizedString(ScreenNames.CHATS),
    component: ChatsScreen,
  },
];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(({key, component, name}) => (
          <Stack.Screen
            key={key}
            name={key}
            component={component}
            options={name ? {title: name} : null}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
