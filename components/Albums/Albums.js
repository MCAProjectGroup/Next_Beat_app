import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Playlist from '../Playlist/Playlist'


const Albums = ({title, ...rest}) => {
  
  return (
    <View style={{marginTop:15,flex:1}}>
      <Text style={styles.albumtitle}>{title}</Text>
      <View style={styles.albumwrap}>
        <FlatList
          data={rest.dataList}
          horizontal
          keyExtractor={(item)=>item._id}
          renderItem={({item, index})=>(

            <Playlist alubmTitle={item.title || item.name} item={item} index={index} onPress={rest.onPress}/>
          )}

        />
        {/* <ScrollView horizontal showsVerticalScrollIndicator={false}> */}
            {/* <Playlist alubmTitle="Hindi-Top "/>
            <Playlist alubmTitle="Kuch Baatein"/>
            <Playlist alubmTitle="Weekly Top Songs"/>
            <Playlist alubmTitle="Thoda Thoda Pyaar"/>
            <Playlist alubmTitle="Lut Gaya"/>
            <Playlist alubmTitle="Dhokha"/>
            <Playlist alubmTitle="Jubiyaan Nautiyal"/> */}
        {/* </ScrollView> */}
     </View>
    </View>
  )
}

export default Albums

const styles = StyleSheet.create({
    albumtitle:{
        color:"#fff",
        fontWeight:'700',
        fontSize:26,
        marginLeft:10,
        marginTop:10
        
    },
    albumwrap:{
    
    }
    
})