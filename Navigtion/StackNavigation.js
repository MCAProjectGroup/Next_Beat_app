// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Notificationpage from '../components/Notificationpage/Notificationpage';
import Recentlypage from '../components/Recentlypage/Recentlypage';
import Header from '../components/Header/Header';
import Setting from '../components/Setting/Setting';
import Language from '../components/Setting/Language';
import Musicalbum from '../components/MusicAlbum/Musicalbum';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        options={{
            header:()=>(
         
          <View style={{height:60, backgroundColor:"red"}}>
              <Header />
          </View>
        ),
       
          }}
        component={Home} />
        <Stack.Screen name="Notification" component={Notificationpage} />
        <Stack.Screen name="Recentplay" component={Recentlypage} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="playlist" component={Musicalbum} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default StackNavigation;