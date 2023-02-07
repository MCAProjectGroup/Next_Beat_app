// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Notificationpage from '../components/Notificationpage/Notificationpage';

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
        <Stack.Screen name="Home" option={{
                    // headerShown:false,
                    headerShown:false,

            //   header:()=>(
            //     <View style={{height:60, backgroundColor:"red"}}>
            //         <Header />
            //     </View>
            //   ),
            
        
              
        }} component={Home} />
        <Stack.Screen name="Notification" component={Notificationpage} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default StackNavigation;