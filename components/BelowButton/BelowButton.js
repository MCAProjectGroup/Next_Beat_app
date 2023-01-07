import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BelowButton = () => {
  return (
    <View  style={styles.container}>
      <TouchableOpacity style={styles.buttonwraper}>
        <Text style={styles.title}> Music </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonwraper}>
        <Text style={styles.title}> Prodcast & Shows </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BelowButton

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:15,
        marginLeft:5  
    },
    buttonwraper:{
        paddingVertical:6,
        marginRight:25,
        paddingHorizontal:15,
        backgroundColor:"#333",
        borderRadius:999,
    },
    title:{
        color:'#fff',
    }
})