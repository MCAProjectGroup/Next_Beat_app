import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Rechentplaylist = () => {
  return (
    <View style={{marginTop:15}}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x205"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Mame Khan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x202"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Udit Narayan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x201"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Sherya Ghosal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x203"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Arijit Singh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x204"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title}>Shaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playlistdesc}>
        <Image
        source={{uri:"https://source.unsplash.com/featured/300x207"}}
        style={styles.playlistImage}
        />
        <Text style={styles.title} >Kumar Sanu</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Rechentplaylist

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
        marginHorizontal:5,
        marginVertical:5
    },
    playlistImage:{
        height:60,
        width:60,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    title:{
        color:"#fff",
        marginLeft:8
    },
    playlistdesc:{
        flexDirection:'row',
        marginRight:8,
        borderRadius:5,
        backgroundColor:"#333",
        alignItems:'center',
        width:"50%",     
    }
})