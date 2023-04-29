import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const LibraryCard = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc} onPress={() => navigation.navigate("Library")} >
        <Image
        source={{uri:"https://www.bollywoodhelpline.com/upload/articles/id6341301.jpg"}}
        style={styles.playlistImage}
        />
        <View style={styles.artiststext}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Artist</Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>
  )
}



export default LibraryCard

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        marginHorizontal:5,
        marginVertical:15
    },
    playlistImage:{
        height:60,
        width:60,
        borderRadius:999,
        resizeMode:'contain'
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
        width:"50%",  
    },
    subtitle:{
        color:"#CCCCCC",
        marginLeft:15,

    },
    artiststext:{
        flexDirection:'column'
    }
})