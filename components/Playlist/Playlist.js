import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Playlist = ({alubmTitle}) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrapper}>
        <Image 
        source={{uri:"https://movieposters2.com/images/1516929-b.jpg"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>{alubmTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Playlist

const styles = StyleSheet.create({
    wrapper:{
        width:140,
        marginRight:10,
        marginTop:10
    },
    playlistImage:{
        aspectRatio:1,
        borderRadius:5,
     
    },
    title:{
        color:"#d1c7c7",
        marginTop:5,
        marginLeft:5,
        fontWeight:"300",
        fontSize:15

    }
})