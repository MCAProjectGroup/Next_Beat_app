import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import ArtistFansLike from './ArtistFansLike';

const ListData = [
    {
        artistname:"Farhan Akhtar"
    },
    {
        artistname:"Vishal Dadlani"
    },
    {
        artistname:"Arijit singh"
    },
    {
        artistname:"Neha Kakkar"
    },
    {
        artistname:"Sonu Nigam"
    },
  ];


const ArtistFansContainer = () => {
  return (
    <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
        Fans also like
      </Text>
        <FlatList
        horizontal
          keyExtractor={(item, index) => index}
          data={ListData}
          ListHeaderComponent={() => <View />}
          renderItem={({item}) => <ArtistFansLike artistname={item.artistname} />}
        />
    </View>
  )
}

export default ArtistFansContainer

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 20,
      },
})