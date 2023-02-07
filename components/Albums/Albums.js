import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Playlist from '../Playlist/Playlist'

const Albums = ({title}) => {
  return (
    <View style={{marginTop:15,flex:1}}>
      <Text style={styles.albumtitle}>{title}</Text>
      <View style={styles.albumwrap}>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <Playlist alubmTitle="Arijit Singh, Pritam"/>
            <Playlist alubmTitle="Hindi-Top "/>
            <Playlist alubmTitle="Kuch Baatein"/>
            <Playlist alubmTitle="Weekly Top Songs"/>
            <Playlist alubmTitle="Thoda Thoda Pyaar"/>
            <Playlist alubmTitle="Lut Gaya"/>
            <Playlist alubmTitle="Dhokha"/>
            <Playlist alubmTitle="Jubiyaan Nautiyal"/>
        </ScrollView>
     </View>
    </View>
  )
}

export default Albums

const styles = StyleSheet.create({
    albumtitle:{
        color:"#fff",
        fontWeight:'700',
        fontSize:26,
        marginLeft:10,
        marginTop:10
        
    },
    albumwrap:{
    
    }
    
})