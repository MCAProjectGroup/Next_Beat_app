import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Logout from './Logout';


const MusicSetting = ({title, path,onPress}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress ||( ()=> path && navigation.navigate(path) || title==="Logout" && setShowBottomSheet(true))} >
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

export default MusicSetting

const styles = StyleSheet.create({
    container:{
      marginTop:50,
      marginLeft:10
    },
    left_container:{
      // marginTop:30
    }
  })