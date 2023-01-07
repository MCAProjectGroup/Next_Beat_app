import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'



const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View >{props.icon}</View>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        padding:12,
        borderRadius:50,
        alignItems:'center',
        justifyContent:"space-evenly",
        justifyContent:'center',
        flexDirection:'row',
        margin:5,
        borderColor:"#fff",
        borderWidth:1,
        
    },
    title:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
        marginHorizontal:20,
    },
 
  
})