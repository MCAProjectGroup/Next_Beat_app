import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const Login = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Email or username</Text>
      <TextInput style={styles.input}/>
      <Text style={styles.title} >Password</Text>
      <TextInput style={styles.input} />
     
    </View>
    <View style={styles.Buttonwrapper}>
      <Text style={styles.Buttontitle}>Log in </Text>
    </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop:30,
    
  },
  title:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:30,
    lineHeight:50,
    marginTop:15
  },
  input:{
    backgroundColor:"#717171",
    fontSize:25,
    color:"#fff",
    borderRadius:5,
    paddingLeft:15,
  },
  Buttonwrapper:{
    padding:10,
    alignItems:'center',
    justifyContent:"space-around",
    backgroundColor:"#717171",
    borderRadius:50,
    height:60,
    width:150,
    margin:50 ,
    marginHorizontal:120
    
  },
  Buttontitle:{
    fontSize:15,
    // fontWeight:"bold",
    color:"#121212",
    
  }
})