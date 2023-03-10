import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Searchitem = ({title, bgColor}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc} onPress={()=> navigation.navigate("Categories")} >
        <View style={[styles.container,{backgroundColor:bgColor}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
        </TouchableOpacity>

      </View>
  )
}

export default Searchitem

const styles = StyleSheet.create({
    wrapper:{
    flex:1,
    marginHorizontal:5,
    marginVertical:5,
  },
  title:{
      color:"#fff",
      fontWeight:"400",
      fontSize:20,    
  },
  playlistdesc:{
      flexDirection:'row',
      marginRight:5,
      alignItems:'center',
      width:"50%",  
  },
  container:{
    backgroundColor:"#EF6C00",
    height:90,
    width:185,
    borderRadius:5,
    paddingTop:10,
    paddingLeft:10
  }
  
  })