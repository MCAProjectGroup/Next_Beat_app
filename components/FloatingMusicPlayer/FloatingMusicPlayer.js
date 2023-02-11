import { StyleSheet, Text, View,Easing,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import TextTicker from 'react-native-text-ticker';
import MCI from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FloatingMusicPlayer = () => {
    const [liked,setLiked] = useState(false)
  return (
    <View style={{backgroundColor:"#121212", flex:1, justifyContent:"flex-end"}}>

        <View style={styles.container}>
        <Image
        source={{uri : "https://picsum.photos/200/300"}}
        style={styles.imageCover}
        />
        <View style={styles.wrapper}>
            <TextTicker style={styles.textwrapper} 
            duration={1000}
            easing={Easing.linear}
            repeatSpacer={80}
            marqueeDelay={1000}
            loop
            >
                A very Long Title
                </TextTicker>

            <TextTicker style={styles.subtextwrapper} 
            duration={1000}
            easing={Easing.linear}
            repeatSpacer={80}
            marqueeDelay={1000}
            loop
            >
                A very Long Artist
                </TextTicker>
        </View>
        <TouchableOpacity style={{marginRight:10}} onPress={() => setLiked(!liked)}>
            { liked ? (
            <AntDesign name="heart" size={24} color="#1dd761" />
            ):
            <AntDesign name="hearto" size={24} color="#fff" />
            }
        </TouchableOpacity>
        <View style={{marginHorizontal:15}}>
            <TouchableOpacity>
            <MCI 
            />
            </TouchableOpacity>
            
        </View>
        </View>
    </View>
  )
}

export default FloatingMusicPlayer

const styles = StyleSheet.create({
    container:{
        flex:1,
        // position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        // right:20,
        // left:20,
        // bottom:65,
        padding:10,
        borderRadius:10,
        backgroundColor:"#555",
    },
    imageCover:{
        // aspectRatio:1,
        width:40,
        height:40,
        borderRadius:5,
        resizeMode:"stretch"
    },
    wrapper:{
        marginHorizontal:10,
        paddingBottom:2,
        flex:1
    },
    textwrapper:{
        color:"#fff",
        fontWeight:"700",
    
    },
    subtextwrapper:{
        color:"#fff",
        fontWeight:"400",
    }
})
