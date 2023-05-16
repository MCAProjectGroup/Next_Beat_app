import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ArtistLibrary from './ArtistLibrary'
import LibrarySongs from './LibrarySongs'
import PopularReleases from './PopularReleases'
import Featuring from './Featuring'
import ArtistDesc from './ArtistDesc'
import ArtistFansLike from './ArtistFansLike'
import LibrarySongsContainer from './LibrarySongsContainer'
import ArtistFansContainer from './ArtistFansContainer'
import FeaturingContainer from './FeaturingContainer'
import PopularContainer from './PopularContainer'
import { useRoute } from '@react-navigation/native'
import { request } from '../../utils/request'

const LibraryContent = () => {
  const artist = useRoute().params.artist;
  const [SongsList, setSongsList] = useState([])
  const _getSongList = async()=>{
    try {
      const res = await request("get", "user/songs?artist="+artist._id);
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
      <ScrollView>
      <ArtistLibrary artist={artist}/>
      <LibrarySongsContainer dataList={SongsList}/>
      </ScrollView>
    </View>
  )
}

export default LibraryContent



const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'silver'
        
    }
})