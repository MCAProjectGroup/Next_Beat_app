import {StyleSheet, Text, View,FlatList} from 'react-native';
import React from 'react';
import LibrarySongs from './LibrarySongs';

const ListData = [
    {
      songno:1,
      songname:'Tum Se Hi',
      followers:'108,120,151'
    },
    {
        songno:2,
        songname:'Rang Lageya',
        followers:'124,189,518'
    },
    {
        songno:3,
        songname:'Saiyaara',
        followers:'41,781,557'
    },
    {
        songno:4,
        songname:'Po Nee Po',
        followers:'35,073,274'
    },
    {
        songno:5,
        songname:'Pee Loon',
        followers:'54,311,749'
    },
  ];

const LibrarySongsContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Popular
      </Text>
      <FlatList
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <LibrarySongs songno={item.songno} songname={item.songname} followers={item.followers} />}
        />
    </View>
  );
};

export default LibrarySongsContainer;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
    }
});
