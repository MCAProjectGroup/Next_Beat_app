import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Albumbottom from './Albumbottom';
import Albumheader from './Albumheader';
import { request } from '../../utils/request';
import { useRoute } from '@react-navigation/native';

const getSongList = async (query)=>{
  return await request("get","user/"+query) //query = "category="
}

const Musicalbum = () => {
  const route = useRoute()
  const params = route.params;
  const [SongsList, setSongsList] = useState([])

  const _getSongList = async ()=>{
    try {
      let query = "" 
      if(params.category){
        query = "songs?category=" + params.category;
      }
      if(params.type=="album"){
        query = "albums/"+params.item._id
      }
      const res = await getSongList(query);
      if(params.type=="album")
      setSongsList(res.data.data.songs_details.map((item, index)=>({...item, _id:params.item.songs[index]})));
      // console.log(res.data.data.songs_details)
      else
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
        {/* {console.log({SongsList})} */}
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
