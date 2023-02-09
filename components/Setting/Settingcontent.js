import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Settingcontent = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
   
  )
}

export default Settingcontent

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:10,
        // backgroundColor:'orange',
        paddingHorizontal:5
    },
    title:{
        fontSize:20,
        fontWeight:'800',
        color:'#fff'
    }
})