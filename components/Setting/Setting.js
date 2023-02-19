import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Settingcontent from './Settingcontent'
import Settingcontentdata from './Settingcontentdata'

const Setting = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={{alignItems:'center',flexDirection:'row',}}>
      <AntDesign name='left' color={'#fff'} size={20} />
      <Text style={{color:'#fff',fontSize:32,fontWeight:'bold'}}> Settings </Text>
      </View>
      <Profile/>
      <Settingcontent/>
      <Settingcontentdata stitle={"Offline Songs On slow Internet"} ssubtitle={"Play downloaded and mp3 songs only"}/>
    </View>
    </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:12,
    marginTop:30
  }
})