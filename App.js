import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import axios from 'axios';

import BottomTabNavigation from './Navigtion/BottomTabNavigation';
import SplashScreen from 'react-native-splash-screen';

import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
  State,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';

import {setupPlayerManager} from "./utils/player"
import Musicalbum from './components/MusicAlbum/Musicalbum';
import messaging from '@react-native-firebase/messaging';

import AuthNavigation from './Navigtion/AuthNavigation';
import {useDispatch, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginSuccessfully } from './store/auth';
import Forgetpassword from './components/ForgetPassword/Forgetpassword';
import Resetotp from './components/ForgetPassword/Resetotp';


export const trackList = [
  {
    id: 'trackId',
    url: require('./song1.mp3'),
    title: 'Raatan Lambiyan',
    artist: 'Jubin Nautiyal, Asees Kaur',
    artwork: 'https://www.pagalworld.com.se/siteuploads/thumb/sft7/3198_4.jpg',
    duration: 230,
  },
  {
    id: 'trackId2',
    url: require('./song2.mp3'),
    title: 'Baarish Mein Tum',
    artist: 'Neha Kakkar, Rohanpreet Singh',
    artwork:
      'https://www.pagalworld.com.se/siteuploads/thumb/sft128/63993_4.jpg',
    duration: 227,
  },
  {
    id: 'trackId3',
    url: require('./song3.mp3'),
    title: 'Dhokha',
    artist: 'Arijit Singh',
    artwork: 'https://www.pagalworld.com.se/siteuploads/thumb/sft11/5054_4.jpg',
    duration: 245,
  },
  {
    id: 'trackId4',
    url: require('./song4.mp3'),
    title: 'Meri Zindagi Hai Tu',
    artist: 'Jubin Nautiyal, Neeti Mohan',
    artwork: 'https://www.pagalworld.com.se/siteuploads/thumb/sft9/4203_4.jpg',
    duration: 219,
  },
  {
    id: 'trackId5',
    url: require('./song5.mp3'),
    title: 'Pyaar Karte Ho Na',
    artist: 'Stebin Ben, Shreya Ghoshal',
    artwork: 'https://www.pagalworld.com.se/siteuploads/thumb/sft9/4477_4.jpg',
    duration: 191,
  },
  {
    id: 'trackId6',
    url: require('./song6.mp3'),
    title: 'Mehrama',
    artist: 'Darshan Raval, Antara Mitra',
    artwork: 'https://www.pagalworld.us/_big/love-aaj-kal-2-2020-250.jpg',
    duration: 245.4,
  },
  {
    id: 'trackId7',
    url: require('./song7.mp3'),
    title: 'Shayad',
    artist: 'Arijit Singh',
    artwork: 'https://www.pagalworld.us/_big/love-aaj-kal-2-2020-250.jpg',
    duration: 248,
  },
  {
    id: 'trackId8',
    url: require('./song8.mp3'),
    title: 'Suzume No Tojimari ',
    artist: 'Chill Box',
    artwork: 'https://paglasongs.com/uploads/thumb/sft19/9474_4.jpg',
    duration: 215.4,
  },
];

const App = () => {
  // const token = "hghjg";
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const checkAuth = async()=>{
      try {
        const token = await AsyncStorage.getItem("@token")
        dispatch(LoginSuccessfully({ token: token }));
      } catch (error) {
        
      }
  }
  // console.log({auth});
  // const [IsPlayerReady, setIsPlayerReady] = useState(false);
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

    // await setupPlayer()
    // Add a track to the queue
    // await TrackPlayer.add();
    // await TrackPlayer.add(trackList);

    // Start playing it
    // await TrackPlayer.play();
  };
  // }

  const initialize = async () => {
    const token = await messaging().getToken();
    console.log({token});
    console.log({setupPlayerManager});
    try {
      await setupPlayerManager();
      await start();
    } catch (error) {
      console.log({error});
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    initialize();
    checkAuth()
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // onDisplayNotification(remoteMessage)
    });

    return unsubscribe;
  }, []);
  // useEffect(() => {
  // //   ApiCall()

  // addSong()
  // }, [])

  // const onDisplayNotification = async(remoteMessage)=>{
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission()

  //   // // Create a channel (required for Android)
  //   // const channelId = await notifee.createChannel({
  //   //   id: 'important',
  //   //   name: 'important',
  //   //   importance:AndroidImportance.HIGH
  //   // });

  //   // Display a notification
  //   // await notifee.displayNotification({
  //   //   title:remoteMessage.notification.title,
  //   //   // title: 'Song Title,
  //   //   body: remoteMessage.notification.body,
  //   //   android: {
  //   //     channelId,
  //   //   }

  //   // });
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
      
      {auth.token ? <BottomTabNavigation /> : <AuthNavigation />}
      <FlashMessage position={"top"} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#171926',
    Color: '#fff',
  },
});
