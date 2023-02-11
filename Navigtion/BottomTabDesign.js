import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { TabBarOptions } from '../static'
import { useNavigation } from '@react-navigation/native'
import MCI from 'react-native-vector-icons/FontAwesome5';
import TrackPlayer, { RepeatMode, State } from 'react-native-track-player';

const BottomTabDesign = (props) => {
    const [Current, setCurrent] = useState("Home")
    const { navigation } = props;
    const [IsPlaying, setIsPlaying] = useState(false);
    useLayoutEffect(() => {
        console.log(IsPlaying);
    //   if(!State.Ready)
    //   return setIsPlaying(false);
    //   if(State.Playing)
    //   return setIsPlaying(true)
    //   return setIsPlaying(false)
    if(IsPlaying){
        TrackPlayer.play()
        TrackPlayer.setRepeatMode(RepeatMode.Queue)
    }
    else{
        TrackPlayer.pause()
    }
    }, [IsPlaying])

    const PlayerManager = async ()=>{
        // console.log("pressede");
        let t =  await TrackPlayer.getState()
        // if(t!=="playing"){
            // return setIsPlaying(true)
        // }
        return setIsPlaying(!IsPlaying)

        // await TrackPlayer.play()
    }

    return (
        <View style={{
            minHeight: 65,
            paddingTop: 10,
            backgroundColor: "#040404",
            borderTopWidth: 0,
            elevation: 5

        }}>
            <View style={{ height: 50, flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" , alignItems:"center" }}>
                    <View style={{ width: 60, height: "100%", backgroundColor: "red" }}>
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 16, color:"#fff" }}>lorem song</Text>

                </View>
                <TouchableOpacity onPress={PlayerManager} style={{justifyContent:"center", marginRight:16}}>
                    <MCI name="play" size={20} color={"#ff0066"} />
                </TouchableOpacity>
            </View>
            <View style={{ width: "100%", height: 1, backgroundColor: "grey", marginVertical: 4 }} />
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                {
                    TabBarOptions.map((item) => (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate(item.path)
                            setCurrent(item.path)
                        }} style={{ flex: 1, alignItems: "center" }}>
                            <item.Icon color={item.path === Current ? "#fff" : "grey"} />
                            <Text style={{ color: item.path === Current ? "#fff" : "grey", }}>{item.name}</Text>
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