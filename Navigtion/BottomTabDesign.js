import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TabBarOptions } from '../static'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer, { Event, RepeatMode, State, usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player';
import SongPlayPopUp from '../Screens/Popups/SongPlayPopUp';
import { trackList } from '../App';

const BottomTabDesign = (props) => {
    const [Current, setCurrent] = useState("Home")
    const { navigation } = props;
    const [IsPlaying, setIsPlaying] = useState(false);
    const [showSongPlayPopUp, setShowSongPlayPopUp] = useState(false)
    const [CurrentTrack, setCurrentTrack] = useState(0);
  

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
      if(event.state == State.nextTrack) {
        let index = await TrackPlayer.getCurrentTrack();
        console.log({index});
        setCurrentTrack(index);
      }
    });

    // useLayoutEffect(() => {
    //     console.log(IsPlaying);
    // //   if(!State.Ready)
    // //   return setIsPlaying(false);
    // //   if(State.Playing)
    // //   return setIsPlaying(true)
    // //   return setIsPlaying(false)
    // if(IsPlaying){
    //     TrackPlayer.play()
    //     TrackPlayer.setRepeatMode(RepeatMode.Queue)
    // }
    // else{
    //     TrackPlayer.pause()
    // }
    // }, [IsPlaying])

   
    
    const playerState = usePlaybackState();

    async function handlePlayPress() {
      if(await TrackPlayer.getState() == State.Playing) {
        setIsPlaying(false)
        TrackPlayer.pause();
      }
      else {
        TrackPlayer.play();
        setIsPlaying(true)

      }
    }

    

    return (
        <View style={{
            minHeight: 80,
            paddingTop: 10,
            backgroundColor: "#171926",
            borderTopWidth: 0,
            elevation: 5

        }}>
            <SongPlayPopUp show={showSongPlayPopUp} onClose={()=> setShowSongPlayPopUp(false)} data={trackList[CurrentTrack]}/>
            <TouchableOpacity onPress={()=>setShowSongPlayPopUp(true)} style={{ height: 50, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" , alignItems:"center" }}>
                    <View style={{ width: 60, height: "100%", backgroundColor: "red" }}>
                        <Image source={{uri: trackList[CurrentTrack].artwork}} style={{width:60, height:"100%", resizeMode:"stretch"}} />
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 16, color:"#fff" }}>{CurrentTrack>=0 && trackList[CurrentTrack].title}</Text>

                </View>
                <TouchableOpacity onPress={handlePlayPress} style={{justifyContent:"center", marginRight:16}}>
                    <MCI name={playerState == State.Playing ? 'pause' : 'play'} size={20} color={"#1dd761"} />
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={{ width: "100%", height: 1, backgroundColor: "grey", marginVertical: 6 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                {
                    TabBarOptions.map((item) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(item.path)
                            setCurrent(item.path)
                        }} style={{ flex: 1, alignItems: "center" }}>
                            <item.Icon color={item.path === Current ? "#fff" : "grey"} />
                            <Text style={{ color: item.path === Current ? "#fff" : "grey", marginVertical:4, fontSize:12 }}>{item.name}</Text>
                        </TouchableOpacity>
                        //    <item.icon />
                    ))
                }

            </View>
        </View>
    )
}

export default BottomTabDesign

const styles = StyleSheet.create({})