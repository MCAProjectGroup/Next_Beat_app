import { StyleSheet, Text, View,SafeAreaView, } from 'react-native'
import React from 'react'
import Recentlyplaylistpage from './Recentlyplaylistpage'
import Playlistsongs from './Playlistsongs'

const Recentlypage = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Wed, Dec 28,2022</Text>
      <View style={styles.recentplaylist}>
        <Recentlyplaylistpage/>
        <Playlistsongs/>
        
      </View>
    </SafeAreaView>
  )
}

export default Recentlypage

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        paddingHorizontal:15
    },
    title:{
        color:"#fff",
        fontSize:25,
        fontWeight:'bold',
        // marginTop:10
    }
})