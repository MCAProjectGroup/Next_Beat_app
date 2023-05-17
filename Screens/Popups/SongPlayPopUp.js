import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils'
import Feather from 'react-native-vector-icons/Feather'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Slider from '@react-native-community/slider';
import { SongManagerOptions } from '../../static'
import TrackPlayer, { State, usePlaybackState,useProgress } from 'react-native-track-player'
import { useDispatch, useSelector } from 'react-redux'
import { setRepeat } from '../../store/song'

const mode = ["", "-once", "-off"]

function pad(n, width, z = 0) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
  
const minutesAndSeconds = (position) => ([
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
]);
 const secondsToHHMMSS = (seconds) => {
    // credits - https://stackoverflow.com/a/37096512

    seconds = Number(seconds);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
    const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
    const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
    return `${hrs}${mins}${scnds}`;
}

const SongPlayPopUp = (props) => {
    const playerState = usePlaybackState();
    const progress = useProgress();
    const repeat = useSelector(state=> state.song.repeat)
   const dispatch = useDispatch()
    // console.log({progress});

    return (
        <Modal animationType='slide' visible={props.show} onRequestClose={props.onClose}>
            <View style={styles.header}>
                <TouchableOpacity onPress={props.onClose}> 
                    <MCI name={"chevron-down"}  size={46} color={"#fff"} />

                </TouchableOpacity>
                <Text style={styles.headerText}>{props?.data?.title||""}</Text>
                <TouchableOpacity>
                    <MCI name={"dots-vertical"}  size={32} color={"#fff"} />

                </TouchableOpacity>
            </View>
            <View style={styles.mainContainer}>

                <View style={{flex:1, alignItems:"center"}}>
                    <View style={{ width: "100%" }}>
                        <Image source={{ uri: props?.data?.artwork }} style={[styles.songImg,{resizeMode:"stretch"}]} />
                    </View>
                    <View style={styles.songInfoContainer}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.songNameText}>{props?.data?.title||""}</Text>
                            <Text style={styles.songArtistText}>{props?.data?.artist||""}</Text>

                        </View>
                        <View style={{ width: 35 }}>
                            {/* <Feather name="heart" size={24} color="#fff" /> */}
                        </View>
                    </View>
                    <View style={{marginTop:28}}>

                        <Slider
                            style={styles.sliderStyle}
                            minimumValue={0}
                            maximumValue={progress.duration}
                            // step={1}
                            onSlidingComplete={(data)=>{
                                console.log({data});
                                TrackPlayer.seekTo(parseInt(data))
                                
                            }}
                            value={progress.position}
                            // role="progressbar"
                            thumbTintColor="#fff"
                            // thumbImage={}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#e6e6e6"
                            

                        />
                        <View style={styles.timeLineContainer}>
                            <Text style={{color:"#fff"}}>{secondsToHHMMSS(progress.position)}</Text>
                            <Text style={{color:"#fff"}}>{secondsToHHMMSS(progress.duration)}</Text>
                        </View>
                        {console.log({repeat})}
                        <View style={styles.songManageMenu}>
                            {
                               SongManagerOptions.map((item, index)=>(
                                    <TouchableOpacity onPress={()=>{
                                        // console.log(item)
                                        item.onPress(repeat);
                                        if(item.icon.startsWith("repeat")){
                                            dispatch(setRepeat())
                                        }
                                        }}>
                                        <MCI name={index===2?playerState == State.Playing ? 'pause' : 'play': index===4?item.icon+mode[repeat]: item.icon} size={32+(index===2?16:0)}  color="#fff"/>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    
                </View>
            </View>

        </Modal>
    )
}

export default SongPlayPopUp

const styles = StyleSheet.create({
    header:{
        height:60, 
        elevation:10,
        paddingHorizontal: 16, 
        backgroundColor:"#121212", 
        alignItems:"center",
        flexDirection:"row", 
        justifyContent:"space-between", 
        borderBottomWidth:1, 

        borderBottomColor:"rgba(0,0,0,0.5)"
    },
    headerText:{
        color: "#fff", 
        fontSize: 14, 
        fontWeight: "700", 
    },
    mainContainer:{
        backgroundColor: "#121212", 
        flex: 1, 
        padding: 24 
    },
    songImg:{
        width: "100%", 
        borderRadius:7, 
        height: SCREEN_HEIGHT * 0.45, 
    },
    songInfoContainer:{
        marginTop: "10%", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between" 
    },
    songNameText:{
        color: "#fff", 
        fontSize: 18, 
        fontWeight: "700", 
    },
    songArtistText:{
        color: "#e6e6e6", 
        fontSize: 14, 
        marginTop: 6, 
    },
    sliderStyle:{
        width: SCREEN_WIDTH-24, 
        height: 30, 
        padding:0, 
    },
    timeLineContainer:{
        paddingHorizontal:10, 
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    songManageMenu:{
        flexDirection:"row", 
        justifyContent:"space-between", 
        marginTop:24, 
        alignItems:"center", 
        paddingHorizontal:10
    }
})