import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import FloatingMusicPlayer from '../components/FloatingMusicPlayer/FloatingMusicPlayer';
import BelowButton from '../components/BelowButton/BelowButton';
import Rechentplaylist from '../components/Recentplaylist/Rechentplaylist';
import Albums from '../components/Albums/Albums';
import { useDispatch } from 'react-redux';
import { getProfileData } from '../store/auth';
import { TrackPlayerAddAndPlay } from '../utils/player';
import { request } from '../utils/request';
import { useNavigation } from '@react-navigation/native';



const Home = () => {
  const dispatch = useDispatch();
  const [popularSongList, setPopularSongList] = useState([])
  const [randomAlbumList, setRandomAlbumList] = useState([])
  const _initialCalls = async()=>{
    dispatch(getProfileData())
  }

  const getPopularSongList =async()=>{
    try {
      const res = await request("get","user/songs/popular")
      console.log({res:res.data});
      setPopularSongList(res.data.data)

    } catch (error) {
      console.log({error});
    }
  }

  const getRandomAlbumList = async()=>{
    try {
      const res = await request("get","user/albums/random")
      console.log({res:res.data});
      setRandomAlbumList(res.data.data)

    } catch (error) {
      console.log({error});
    }
  }

  useLayoutEffect(() => {
    _initialCalls()
    getPopularSongList()
   getRandomAlbumList()
  }, [])

  
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <BelowButton /> */}
        {/* <Rechentplaylist /> */}
        <View >
          <Albums title="Popular Song" dataList={popularSongList} type={"song"} onPress={(item, index)=> {
            TrackPlayerAddAndPlay( {
              id: item._id,
              url: item.live_song,
              title: item.title,
              artist: item.artists_details.map(item => item.name).join(", "),
              artwork: item.live_image,
              // duration: item.duration,
            })
          }} />
          
          <Albums title="Popular Albums" dataList={randomAlbumList} type={"album"} onPress={(item, index)=> {
           navigation.navigate("playlist",{item:item, type:"album"})
          }} />
          {/* <Albums title="Based on your recent Search" />
          <Albums title="Trending Valentine'Hits" /> */}
          
        </View>
      </ScrollView>

      {/* <FloatingMusicPlayer/> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
