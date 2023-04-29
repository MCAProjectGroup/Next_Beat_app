import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
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

const LibraryContent = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ArtistLibrary/>
      <LibrarySongsContainer/>
      <PopularContainer/>
      <FeaturingContainer/>
      <ArtistDesc/>
      <ArtistFansContainer/>
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