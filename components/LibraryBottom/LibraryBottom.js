import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LibraryBottom = () => {
  return (
        <View  style={styles.container}>
          <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.title}> Playlists </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonwraper}>
            <Text style={styles.title}> Artists </Text>
          </TouchableOpacity>
        </View>
  )
}

export default LibraryBottom

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:15,
        marginLeft:5,
        paddingBottom:10 
    },
    buttonwraper:{
        paddingVertical:6,
        marginRight:25,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:999,
    },
    title:{
        color:'#fff',
    }
})