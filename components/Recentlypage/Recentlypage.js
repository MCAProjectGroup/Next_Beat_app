import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const Recentlypage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Wed, Dec 28,2022</Text>
      <View style={styles.recentplaylist}>

      </View>
    </SafeAreaView>
  )
}

export default Recentlypage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        paddingTop:60,
        paddingHorizontal:15
    },
    title:{
        color:"#fff",
        fontSize:25,
        fontWeight:'bold'
    }
})