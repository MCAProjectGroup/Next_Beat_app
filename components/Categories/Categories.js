import {ScrollView, StyleSheet, View,FlatList,Text} from 'react-native';
import React from 'react';
import CategoriesItems from './CategoriesItems';

const ListData = [
  {
    playlist: 'Popular Bollywwod Playlist',
  },
  {
    playlist: 'Panjabi Pop',
  },
  {
    playlist: 'New & Trending',
  },
  {
    playlist: 'Bollywwod Romance',
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={{color: '#fff', fontSize: 30, fontWeight: '800',padding:15}}>Hindi</Text>
        <FlatList
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <CategoriesItems playlist={item.playlist} />}
        />
        </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    // marginTop: 20,
  },
});
