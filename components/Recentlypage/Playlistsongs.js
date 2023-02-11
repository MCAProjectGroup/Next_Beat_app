import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Playlistsongs = () => {
  return (
    <View style={styles.container}>
        <View style={styles.left_container}>
      <Image
        source={{uri: 'https://images.genius.com/9b46bc8816a6e3db740afda972d8ca36.1000x1000x1.jpg'}}
        style={styles.playlistImage}
      />
      </View>
      <View style={styles.right_container}>
        <Text style={styles.title}>Choudhary</Text>
        <Text style={styles.subtitle}> Songs . Mame Khan</Text>
      </View>
    </View>
  )
}

export default Playlistsongs

const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems:'center',
      marginLeft:25,
      marginVertical:10
      
    },
    playlistImage: {
      marginTop: 5,
      height: 50,
      width: 50,
      borderRadius: 5,
    },
    right_container:{
      marginLeft:10
  
    },
    title:{
      color:"#1DB954",
      fontSize:15
  
    },
    subtitle:{
      color:"grey"
    }
  });
  