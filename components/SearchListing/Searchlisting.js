import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Albumbottom from '../MusicAlbum/Albumbottom'
import Feather from 'react-native-vector-icons/Feather';
import { request } from '../../utils/request';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';


const Searchlisting = () => {
  const searchInput = useRoute().params.searchInput
  const [SongsList, setSongsList] = useState([])
  const [searchSong, setSearchSong] = useState(searchInput)
  const _getSongList = async(text=searchInput)=>{
    try {
      const res = await request("get", "user/songs?title="+text);
      console.log(res.data);
      setSongsList(res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    
    _getSongList()
  }, [])
  return (
    <View style={styles.container}>
      {/* <Text>Searchlisting</Text> */}
      <View style={styles.textwrapper}>
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.searchinput}>
        <Feather name="search" size={24} color="#333" />
        <TextInput
          placeholder="What do you want to listen to?"
          style={styles.input}
          value={searchSong}
          onChangeText={setSearchSong}
          onSubmitEditing={()=>_getSongList(searchSong)}
        />
      </View>
      <View style={{paddingHorizontal:20}}>

      <FlatList 
        data={SongsList}
        ItemSeparatorComponent={()=> <View  style={{height:5}}/>}
        renderItem={({item})=>(
            <Albumbottom item={item}/>
        )}
        keyExtractor={(item, ) => item+"dfdsfdsf"}
      />
      </View>
    </View>
  )
}

export default Searchlisting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171926',
        paddingTop: 40,
        // padding:20
      },
      textwrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 28,
        flex: 1,
        // marginLeft: 10,
      },
    searchinput: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom:20,
      },
      input: {
        width: '100%',
        paddingLeft: 10,
        fontSize: 15,
        color: '#333',
        fontWeight: '700',
      },
})