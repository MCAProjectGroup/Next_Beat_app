import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import MusicSetting from './MusicSetting'

const Settingcontent = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Music Listening Preferences</Text>
      <MusicSetting title="Music Language(s)"/>
      <MusicSetting title="On Click Behaviour-List"/>
      <MusicSetting title="Streaming Quality"/>
      {/* <Musicsetting title="Equalizer"/> */}
    </View>
  )
}

export default Settingcontent





const styles = StyleSheet.create({
  container:{
    marginTop:50,
    marginLeft:10
  },
})