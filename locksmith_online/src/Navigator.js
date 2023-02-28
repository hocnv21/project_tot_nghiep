import React, {useEffect} from 'react';
import {View, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AppContext from './AppContext';
import auth from '@react-native-firebase/auth';

import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import Home from './screens/HomeScreen/Home';
import MapScreen from './screens/MapScreen/MapScreen';
import OnBoaringScreen from './screens/OnBoaringScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

GoogleSignin.configure({
  webClientId:
    '883139811738-hk2iac6lbkehkduf4pnmafvc0vlmpumu.apps.googleusercontent.com',
});
const Stack = createStackNavigator();
const StackAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoaring"
        component={OnBoaringScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const scheme = useColorScheme();
  const [user, setUser] = React.useState(null);
  const [rooms, setRooms] = React.useState([]);
  const [unfilteredRooms, setUnfilteredRooms] = React.useState([]);

  function onAuthStateChanged(userlogin) {
    setUser(userlogin);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <AppContext.Provider
      value={{
        user: user,
      }}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <StatusBar barStyle="light-content" backgroundColor="green" /> */}
        <View style={{flex: 1}}>{!user ? <StackAuth /> : <StackHome />}</View>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default Navigator;
