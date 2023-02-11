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

import Musicalbum from './components/MusicAlbum/Musicalbum';

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
      notificationCapabilities:[Capability.Play,Capability.Pause, Capability.Stop, Capability.SkipToNext, Capability.SkipToPrevious, Capability.SeekTo],
      android:{
        appKilledPlaybackBehavior:AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
      }
    })
    

    // Add a track to the queue
    await TrackPlayer.add([{
        id: 'trackId',
        url: require('./song1.mp3'),
        title: 'Raatan Lambiyan',
        artist: 'Jubin Nautiyal, Asees Kaur',
        artwork: "https://www.pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg",
        duration:174,
    },
    {
      id: 'trackId2',
      url: require('./song2.mp3'),
      title: 'Baarish Mein Tum',
      artist: 'Neha Kakkar, Rohanpreet Singh',
      artwork: "https://www.pagalworld.com.se/siteuploads/thumb/sft128/63993_4.jpg",
      duration:174,

  }
  ]);

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
      {/* <Musicalbum/> */}
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
