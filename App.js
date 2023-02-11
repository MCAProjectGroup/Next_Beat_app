import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
// import Login from './components/Login/Login'
import axios from 'axios'
import Notificationpage from './components/Notificationpage/Notificationpage'
import BottomTabNavigation from './Navigtion/BottomTabNavigation'
import SplashScreen from 'react-native-splash-screen'
import Recentlypage from './components/Recentlypage/Recentlypage'
import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player'
import notifee, { AndroidStyle } from '@notifee/react-native';
import { setupPlayer, addTracks } from './service';


// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import Login from './components/Login/Login'
// import axios from 'axios';
// import BottomTabNavigation from './Navigtion/BottomTabNavigation';
// import SplashScreen from 'react-native-splash-screen';

// import Signpage from './components/Signpage/Signpage'
// import { NavigationContainer,DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './components/Welcome/Welcome'

// const Stack = createNativeStackNavigator();
// const ApiCall = async()=>{
// screen loader
// console.log("loader on")
// fetch('https://jsonplaceholder.typicode.com/todos/2')
// .then((res)=>{res.json()})
// console.log(resJson);
// const res2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
// const resJson2 = await res.json()
// console.log("loader off")

// loaderOff()

// const res = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/1',
//   method:"get",

  // console.log("loader off")
  
  var track1 = {
    url: require("./a.mp3"), // Load media from the network
    title: 'Memu Aagamu ft',
    artist: 'Allu Arjun, Armaan Malik, and TRI.BE',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://picsum.photos/200/300', // Load artwork from the network
    duration: 174 // Duration in seconds
};

// })
// const res2 = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/2',
//   method:"get",

// })
// const res3 = await axios({
//   url:'https://jsonplaceholder.typicode.com/todos/3',
//   method:"get",

// })

// console.log(res.data, res2.data, res3.data);

// console.log({res:res.data});

// console.log("loader off")

const App = () => {
  const [IsPlayerReady, setIsPlayerReady] = useState(false);
  // const addSong = async()=>{
  //   await TrackPlayer.setupPlayer({
  //     // autoUpdateMetadata:true
  //   })

  //   await TrackPlayer.updateOptions({
  //     android:{
  //       appKilledPlaybackBehavior:AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
  //     },
  //     notificationCapabilities:[Capability.Play, Capability.Play, Capability.SeekTo]
  // });
  //   await TrackPlayer.add(track1);

  const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      notificationCapabilities:[Capability.Play,Capability.Pause, Capability.Stop]
    })
    

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('./a.mp3'),
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: "https://picsum.photos/200/300"
    });

    // Start playing it
    // await TrackPlayer.play();
};
  // }
  useEffect(() => {
  start();
  SplashScreen.hide()
  }, []);

  // useEffect(() => {
  // //   ApiCall()
  

  // addSong()
  // }, [])

  // const onDisplayNotification = async()=>{
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission()

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: 'Notification Title',
  //     // title: 'Song Title,
  //     body: 'Artist',
  //     android: {
  //       largeIcon: 'url/to/album/artwork',
  //       style: {
  //          type:  AndroidStyle.MEDIA,
  //       },
  //       actions: [
  //         {
  //           title: 'Play',
  //           pressAction: {
  //             id: 'snooze',
  //           },
  //           icon: 'value-of-custom-icon'
  //         },
  //       ],
  //       channelId: 'channelId',
  //     },
  //   });
  // }

  // return (
  //   <View>
  //     <Button title="Display Notification" onPress={() => onDisplayNotification()} />
  //   </View>
  // );
  // if(!IsPlayerReady)
  // return null;
  return (
    <View style={styles.wrapper}>
      <BottomTabNavigation />
    </View>

    // <NavigationContainer theme={DarkTheme}>
    //   <Stack.Navigator screenOptions={{headerShown:true}}>
    //     <Stack.Screen name="Welcome" options={{
    //       headerShown:false
    //     }} component={Welcome} />
    //     <Stack.Screen name="Signpage"
    //     options={{
    //       title:"Create New Account"
    //     }}
    //     component={Signpage} />
    //     <Stack.Screen name="Login"
    //     options={{
    //       title:"login your account"
    //     }}
    //     component={Login} />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#121212',
    Color: '#fff',
  },
});
