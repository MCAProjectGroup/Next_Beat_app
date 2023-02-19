import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Settingcontent = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Music Listening Preferences</Text>
      <Musicsetting title="Music Language(s)"/>
      <Musicsetting title="On Click Behaviour-List"/>
      <Musicsetting title="Streaming Quality"/>
      <Musicsetting title="Equalizer"/>
    </View>
  )
}

export default Settingcontent

const Musicsetting=({title})=>{
  return(
    <TouchableOpacity>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between', marginTop:30}}>
      <View style={styles.left_container}>
        <Text style={{color:'#fff',fontSize:15}}>{title}</Text>
      </View>
      <View style={styles.right_container}>
      <AntDesign name='right' color={'grey'} size={24} />
      </View>
      </View>
      </TouchableOpacity>

  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:50,
    marginLeft:10
  },
  left_container:{
    // marginTop:30
  }
})