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
import Playspage from '../components/Plays/Playspage';
import Podcasts from '../components/Podcasts/Podcasts';
import Categories from '../components/Categories/Categories';
import LibraryContent from '../components/ArtistLibrary/LibraryContent';
import Premium from '../Screens/Premium';
import Forgetpassword from '../components/ForgetPassword/Forgetpassword';
import Help from '../components/Setting/Help';
import Profilepage from '../components/Setting/Profilepage';

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
      <Stack.Navigator 
      
      screenOptions={{
        headerStyle:{
          backgroundColor: "#171926",

        },
        headerTitleStyle:{
          color:"#fff"
        },
        title:"",
        headerTintColor:"#fff"
      }}
      >
        <Stack.Screen name="Home" 
        options={{
            header:()=>(
         
          <View style={{}}>
              <Header />
          </View>
        ),
       
          }}
        component={Home} />
        <Stack.Screen name="Notification" component={Notificationpage}  options={{headerShown:true, title:"" }} />
        <Stack.Screen name="Recentplay" component={Recentlypage} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="playlist" component={Musicalbum} />
        <Stack.Screen name="play" component={Playspage} />
        <Stack.Screen name="podcasts" component={Podcasts} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="premium" component={Premium} options={{
          title:"Best Offer For You"
        }} />
        <Stack.Screen name="Library" component={LibraryContent} options={{
          // headerShown:false
          title:""
        }}/>
         <Stack.Screen name="Help" component={Help} options={{
          title:"Help & Support"
        }} />
        <Stack.Screen name="Profilepage" component={Profilepage} options={{
          title:"My Profile"
        }} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default StackNavigation;