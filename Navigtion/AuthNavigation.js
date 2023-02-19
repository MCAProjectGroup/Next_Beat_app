// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Welcome from '../components/Welcome/Welcome';
import Signpage from '../components/Signpage/Signpage';
import Login from '../components/Login/Login';
import Forgetpassword from '../components/ForgetPassword/Forgetpassword';


function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer
      theme={{
        ...DarkTheme,
        colors: {
          background: '#001e3c',
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
          component={Welcome}
        />
        <Stack.Screen
          name="Signpage"
          options={{
            title: 'Create New Account',
          }}
          component={Signpage}
        />
        <Stack.Screen
          name="Login"
          options={{
            title: 'login your account',
          }}
          component={Login}
        />

        <Stack.Screen
          name="ForgetPassword"
          options={{
            title: 'Forget Password',
          }}
          component={Forgetpassword}
        />.
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigation;
