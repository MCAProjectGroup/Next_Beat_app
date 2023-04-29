import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontSize:15}}>FAQ</Text>
      <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Contact Us</Text>
      <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Rate App</Text>
      <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Share App</Text>
      <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Terms of Use</Text>
      <Text style={{color:'#fff',fontSize:15,marginTop:30}}>Privacy Policy</Text>
    </View>
  )
}

export default Help

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:20,
    marginTop:20
  }
})