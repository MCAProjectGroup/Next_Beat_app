import {StyleSheet, Text, View,FlatList} from 'react-native';
import React from 'react';
import Featuring from './Featuring';

const ListData = [
   
    {
        artistdetails:"This Is Mohit Chauhan"
    },
    {
        artistname:"Mohit Chauhan Radio"
    },
    {
        artistname:"Trending Valentine Hits"
    },
    {
        artistname:"All out 00s Hindi"
    },
    {
        artistname:"Tamil Romance"
    },
  ];


const FeaturingContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Featuring Mohit Chauhan
      </Text>
      <FlatList
        horizontal
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <Featuring artistname={item.artistname} />}
        />
    </View>
  );
};

export default FeaturingContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal:10
  },
});
