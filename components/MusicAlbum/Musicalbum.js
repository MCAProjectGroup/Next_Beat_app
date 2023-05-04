import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Albumbottom from './Albumbottom';
import Albumheader from './Albumheader';
import { request } from '../../utils/request';

const getSongList = async ()=>{
  return await request("get","user/songs")
}

const Musicalbum = () => {

  const [SongsList, setSongsList] = useState([])

  const _getSongList = async ()=>{
    try {
      const res = await getSongList();
      setSongsList(res.data.data);
      console.log({res:res.data});
    } catch (error) {
      console.error("songs list", error);
    }
  }

  useEffect(() => {  
    _getSongList()
  }, [])
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <Albumheader />
        <FlatList
          data={SongsList}
          keyExtractor={(item, index)=> item._id}
          renderItem={({item, index})=>(
            <Albumbottom item={item} />
            
          )}
        />
        {/* <Albumbottom />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom />
        <Albumbottom /> */}
       
      </View>
    </ScrollView>
  );
};

export default Musicalbum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
