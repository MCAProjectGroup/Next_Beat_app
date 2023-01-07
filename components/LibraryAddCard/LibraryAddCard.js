import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Antdesign from 'react-native-vector-icons/AntDesign';

const LibraryAddCard = () => {
  return (
    <View >
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <View style={styles.librarycircleadd}>
        <Antdesign name="plus" size={24} color="#CCCCCC" />
        </View>
        <View style={styles.artiststext}>
        <Text style={styles.title}>Add artists</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <View style={styles.librarysquareadd}>
        <Antdesign name="plus" size={24} color="#CCCCCC" />
        </View>
        <View style={styles.artiststext}>
        <Text style={styles.title}>Add prodcasts & shows</Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>
  )
}

export default LibraryAddCard

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        marginHorizontal:5,
        marginVertical:15,
        
    },
    librarycircleadd:{
        height:60,
        width:60,
        borderRadius:999,
        backgroundColor:"#333",
        alignItems:'center',
        justifyContent:'center'
       
    },
    title:{
        color:"#fff",
        marginLeft:15,
        fontSize:18,
        fontWeight:"500"
    },
    playlistdesc:{
        flexDirection:'row',
        marginRight:8,
        borderRadius:5,
        alignItems:'center',
        width:"100%",  
    },
    librarysquareadd:{
        height:60,
        width:60,
        borderRadius:9,
        backgroundColor:"#333",
        alignItems:'center',
        justifyContent:'center' 
    }
})