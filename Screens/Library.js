import {StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import LibraryHeader from '../components/LibraryHeader/LibraryHeader';
import LibraryBottom from '../components/LibraryBottom/LibraryBottom';
import LibraryCard from '../components/LibraryCard/LibraryCard';
import LibraryAddCard from '../components/LibraryAddCard/LibraryAddCard';
import { useNavigation } from '@react-navigation/native';
import { request } from '../utils/request';


const Library = () => {
  const navigation = useNavigation();
  const [artistsList, setArtistsList] = useState([])
  const _getArtistsList = async()=>{
    try {
      const res = await request("get", "user/artists");
      console.log(res.data);
      setArtistsList(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    _getArtistsList()
  }, [])
  console.log("your lib");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textwrapper}>
        <LibraryHeader />
      </View>
      {/* <LibraryBottom /> */}
      {/* <ScrollView> */}
        <FlatList 
          data={artistsList}
          keyExtractor={(item, index)=> item._id}
          renderItem={({item, index})=>(

            <LibraryCard item={item} title={item.name} />
          )}
        />
        {/* <LibraryCard title="KK" />
        <LibraryCard title="Rahat Fateh Ali Khan" />
        <LibraryCard title="Arijit Singh" />
        <LibraryCard title="Neha Kakar" />
        <LibraryCard title="Mohit Chauhan" />
        <LibraryCard title="Arijit Singh" />
        <LibraryCard title="Neha Kakar" /> */}
        {/* <LibraryAddCard /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171926',
    paddingTop: 40,
  },
  textwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
