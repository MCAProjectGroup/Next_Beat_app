import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import BottomDemo from './BottomDemo'

const Logout = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:32,fontWeight:'bold',color:'#fff'}}>Logout</Text>
      <Text style={{fontSize:17,fontWeight:'400',color:'grey',marginTop:10}}>Are you sure want to logout of Musify Music ?</Text>
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={{fontWeight: 'bold',fontSize:18,color:'#000'}}>Yes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomDemo(Logout)

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logoutBtn: {
        width: '80%',
        backgroundColor: '#1dd761',
        borderRadius: 4,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 10,
      },
})